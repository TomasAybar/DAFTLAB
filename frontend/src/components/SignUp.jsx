import '../styles/style.css'
import { Link as LinkRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from '../../src/redux/actions/userActions'
import GoogleSignUp from './GoogleSignUp';
import toast from 'react-hot-toast';


function AccountSignUp(props) {
    const countrys = ["Select Country", "Argentina", "Uruguay", "Chile", "Bolivia", "Peru", "Brazil", "Colombia", "Venezuela", "Paraguay", "Ecuador", 'Other']

    const handleSubmit = async (event) => {
        event.preventDefault()
        const userData = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            photoUrl: event.target[4].value,
            country: event.target[5].value,
            from: 'form-Signup',
            role: 'user'
        }
        const res = await props.signUp(userData)

        if (res.data.success) {

            toast.success(`${res.data.message}`)
            event.target.reset()

        } else {
            toast.success(`${res.data.message}`)
            event.target.reset()
        }
    }
    return (
        <div className='body'>
            <div className="container-signup-s">
                <div className='overlay-ctn-signin'>
                    <div className='overlay-signup'>
                        <div className='overlay-right'>
                            <h1 className='title-signup'>Have you already created an account?</h1>
                            <LinkRouter to='/signIn'>
                                <button className='accountbtn' id='signUp'>Sign In</button>
                            </LinkRouter>
                        </div>
                    </div>
                </div>
                <div className="sign-up-ctn">
                    <form className='formRegistro-signup' onSubmit={handleSubmit}>
                        <h1 className='title-signup'>Create Account</h1>
                        <div className="social-ctn">
                            <GoogleSignUp />
                        </div>
                        <h3 className='or-text'>or</h3>
                        <input className='signUp-input' type='text' placeholder='FirstName' required />
                        <input className='signUp-input' type='text' placeholder='LastName' required />
                        <input className='signUp-input' type='text' placeholder='Email' required />
                        <input className='signUp-input' type='password' placeholder='Password' required />
                        <input className='signUp-input' type='text' placeholder='Profile Pic' required />
                        <select className='signUp-input' style={{ cursor: 'pointer' }} name='country' required>
                            {countrys.map((country, index) =>
                                <option style={{ cursor: 'pointer' }} key={index}>{country}</option>
                            )}
                        </select>
                        <button type="submit" value="submit" className='accountbtn'>Sign Up</button>
                        <div className='responsive-btn'>
                            <h1 className='title-signup-res'>Have you already created an account?</h1>
                            <LinkRouter to='/signIn'>
                                <button className='btn-responsive' id='signUp'>Sign In</button>
                            </LinkRouter>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    signUp: userActions.signUp
}
export default connect(null, mapDispatchToProps)(AccountSignUp);