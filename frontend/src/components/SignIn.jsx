import '../styles/style.css'
import { Link as LinkRouter } from 'react-router-dom';
import userActions from '../../src/redux/actions/userActions'
import { connect } from 'react-redux';
import GoogleSignIn from './GoogleSignIn';
import toast from 'react-hot-toast';

// import { useNavigate } from 'react-router-dom';

function SignIn(props){

    // const navigate = useNavigate();

    const handleSubmit= async (event)=>{

        event.preventDefault()

        const userSignIn= {
            email: event.target[0].value,
            password: event.target[1].value,
            from: "form-SignIn"
        }

        const res = await props.signIn(userSignIn)
        toast.success(`${res.data.message}`)

    }




    return(
    <div className='body'> 
            <div className="container-signup">
                <div className="sign-in">
                    <form className='formRegistro' onSubmit={handleSubmit}>
                        <h1 className='title-signup'>Welcome</h1>
                        <div className="social-ctn">
                            <GoogleSignIn/>
                        </div>
                        <h3 className='or-text'>or</h3>
                        <input className='signUp-input' type='text' placeholder='Email'/>
                        <input className='signUp-input' type='password' placeholder='Password'/>
                        <button className='accountbtn'>Sign In</button>
                        <div className='responsive-btn'>
                            <h1 className='title-signup-res'>Do not you have an account yet?</h1>
                            <LinkRouter to='/signup'>
                                <button className='btn-responsive' id='signUp'>Sign Up</button>
                            </LinkRouter>
                        </div>
                    </form>
                </div>
                <div className='overlay-ctn'>
                    <div className='overlay'>
                        <div className='overlay-right-s'>
                            <h1 className='title-signup'>Do not you have an account yet?</h1>
                            <LinkRouter to='/signup'>
                                <button className='accountbtn' id='signUp'>Sign Up</button>
                            </LinkRouter>
                        </div>
                    </div>
                </div>
            </div>
    </div>   
      )
 }
 const mapDispatchToProps= {
    signIn: userActions.signIn
  }
export default connect(null, mapDispatchToProps)(SignIn)
    