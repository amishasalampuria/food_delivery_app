// import { assets } from '../../assets/frontend_assets/assets';
import { assets } from  "../../assets/frontend_assets/assets.js"
import './Footer.css';

function Footer(){
    return(
       <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum reiciendis id amet sapiente neque blanditiis
                    totam itaque repudiandae, aliquid recusandae laudantium earum? Beatae iste asperiores, doloribus, modi sint
                    quaerat illum ipsa eaque exercitationem omnis autem suscipit amet quod dolore.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>

                </div>
            </div>
            <div className='footer-content-centre'>
                <h2>Contact Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                   <li>+1-222-456-7890</li>
                   <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 <i className="fa fa-copyright" aria-hidden="true"></i> Tomato.com - All Right Reserved.</p>
       </div>

    )
}

export default Footer;