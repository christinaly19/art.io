import './profile.css';

var image = 'https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-7-1024x1020.jpg'

var img1 = 'https://i.postimg.cc/NfJmZZ3k/icons8-facebook-50.png'
var img2 = 'https://i.postimg.cc/2SgvSh8q/icons8-instagram-50.png'
var img3 = 'https://i.postimg.cc/k58S6GBT/icons8-spotify-50.png'
var img4 = 'https://i.postimg.cc/K81BbJFS/icons8-twitter-50.png'

export default function Profile() {
    return(
    <div className='profile-container'>
        <div className='profile-info'>
            <img className='pf-photo' src="https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-7-1024x1020.jpg"/>
            <div className='pf-text'>
                <h1 className='pf-h1'>Elinivae</h1>
                <h2 className='pf-h2'>elveina12353@gmail.com</h2>
                <div className='pf-icongroup'>
                    <img className="pf-icon" src={img1}/>
                    <img className="pf-icon" src={img2}/>
                    <img className="pf-icon" src={img3}/>
                    <img className="pf-icon" src={img4}/>
                </div>
            </div>
            <div className='pf-settings'/>
        </div>
        <div className='profile-art'>

        </div>
    </div>
    )
}