import React,{useEffect} from "react";
import jwt_decode from 'jwt-decode';
import userActions from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

export default function GoogleSignIn(){
    const dispatch= useDispatch()

    
    const habdleCallbackResponse=(response)=>{
        let userObject = jwt_decode(response.credential)
        dispatch(userActions.signIn({
                email:userObject.email,
                password:userObject.sub,
                from:'google'
        }))
    }
    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id:'648340746425-7jmm6t2ob35d4cgjnvu059b4ql22i4ct.apps.googleusercontent.com',
            context:'signin',
            callback: habdleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            {theme:'outline',
            size:'medium',
            text:'signin_with',
            locale:'en-IN',
        }
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
        <div id='buttonDiv'></div>
    )
}