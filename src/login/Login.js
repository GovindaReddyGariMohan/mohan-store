import './login.scss'
const Login = () => {

    return (
        <div className='signup'>
            <div className='signup-content'>
                <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg" alt="imag" />
                <div className='input-field'>
                    <div className='form-title'><b>Login</b> or <b>Signup</b></div>
                    <div>
                        <input type='text' placeholder='+91 | Mobile Number' />
                    </div>
                    <p className='terms-and-services'>By continuing, I agree to the <span>Terms of Use</span> & <span>Privacy Policy</span></p>
                    <button>CONTINUE</button>
                    <div className='help'>Have troble logging in? <span>Get help</span></div>
                </div>
            </div>
        </div>
    )
}
export default Login;