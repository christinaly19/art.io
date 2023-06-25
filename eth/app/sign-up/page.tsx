import './login.css'
var image = "https://cdn.vox-cdn.com/thumbor/Al48-pEnyIn2rlgKX7MIHNmlE68=/0x0:5563x3709/1200x800/filters:focal(2302x1311:3192x2201)/cdn.vox-cdn.com/uploads/chorus_image/image/65752607/1048232144.jpg.0.jpg";

export default function Login() {
    return (
        <div className='login-page'>
                <img className="login-img"src={image} alt="background-image"/>

                <div className='login-container'>
                    <h2 className='login-header'>LOG-IN</h2>
                    <form className='login-form'>
                        <p className='login-text'>Email</p>
                        <input type='text' name='user' className='login-input'/>
            
                        <p className='login-text'>Password</p>
                        <input type='text' name='user' className='login-input'/>

                        <p className='login-text'></p>
                        <button className='login-submit'>SUBMIT</button>
                    </form>
                </div>
        </div>
    );
}