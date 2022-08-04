import React,{useEffect} from "react";
import jwt_decode from 'jwt-decode';
import userActions from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';

function GoogleSignUp(){
    
    const dispatch= useDispatch();

    const handleCallbackResponse = (response) => {

        let userObject = jwt_decode(response.credential)

        // console.log(userObject)
        
        dispatch(userActions.signUp({
                firstName:userObject.given_name,
                lastName:userObject.family_name,
                email:userObject.email,
                password:userObject.sub,
                photoUrl:userObject.picture,
                country:'Argentina',
                from:'google',
                role:'user'
        }))
    }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '648340746425-7jmm6t2ob35d4cgjnvu059b4ql22i4ct.apps.googleusercontent.com',
            callback: handleCallbackResponse,
            context: "signup"
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: 'outline', size: 'medium', text: 'signup_with', locale: 'en-IN' }
        )
        //google.accounts.id.prompt();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id='buttonDiv'></div>
    )
}
const mapDispatchToProps = {
    signUp: userActions.signUp
}
export default connect(null, mapDispatchToProps)(GoogleSignUp)