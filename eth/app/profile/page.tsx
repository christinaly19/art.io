import './profile.css';

const img1 = 'https://i.postimg.cc/NfJmZZ3k/icons8-facebook-50.png'
const img2 = 'https://i.postimg.cc/2SgvSh8q/icons8-instagram-50.png'
const img3 = 'https://i.postimg.cc/k58S6GBT/icons8-spotify-50.png'
const img4 = 'https://i.postimg.cc/K81BbJFS/icons8-twitter-50.png'

const img5 = 'https://i.postimg.cc/Bn6ZWhrT/icons8-settings-48.png'

const nft1 = 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/05/merlin_184196631_939fb22d-b909-4205-99d9-b464fb961d32-superJumbo.jpeg?auto=format&q=60&fit=max&w=930'
const nft2 = 'https://uk.sganalytics.com/assets/uploads/fcimages/images/NFT%20digital%20art.jpg'
const nft3 = 'https://uploads-ssl.webflow.com/632c0b24c6c60510a1d60f5c/6332b75485f2ddcc9487a7f4_nfts-bored-ape-yacht-club-819x1024.jpg'
const nft4 = 'https://img2.storyblok.com/325x325/f/102932/1920x1080/156ed23596/monkey-g46eb24a10_1920.jpg'
const nft5 = 'https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1623270212425-BKBOSVBQQ4YQJGHKQJXW/Vader24_0001_PINK_blue.jpg?format=1000w'

export default function Profile() {
    return (
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
            <div className='pf-text'>
                <img src={img5}/>
            </div>
        </div>
        <div className='profile-art'>
            <h1 className='art-header'>My Artwork</h1>
            <div className='art-carousel'>
                <div className='nft-art'>
                    <p className='nft-desc'>spacenaught #241cd6</p>
                    <img className='nft' src={nft1}/>
                </div>
                <div className='nft-art'>
                    <p className='nft-desc'>david #214pc1</p>
                    <img className='nft' src={nft2}/>
                </div>
                <div className='nft-art'>
                    <p className='nft-desc'>painted #241dvz5</p>
                    <img className='nft' src={nft3}/>
                </div>
                <div className='nft-art'>
                    <p className='nft-desc'>bored ape #213cs</p>
                    <img className='nft' src={nft4}/>
                </div>
                <div className='nft-art'>
                    <p className='nft-desc'>vader #xs2315</p>
                    <img className='nft' src={nft5}/>
                </div>
            </div>
        </div>
    </div>
    )
}