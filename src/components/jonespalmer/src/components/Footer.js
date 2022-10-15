import React from 'react'
import img from '../assets/Lfooter.svg'
import img2 from '../assets/FooterLogo.svg'
import './Footer.css'

function Footer() {
    return (
        
  <footer id="jpcontact">
  <div class="jpleftLogo">
  <img src={img} alt="jplfooterlogo"></img>
  <span>2019 Jones and Palmer</span>
  </div>
  <div class="jprightFoot">
  <div class="jprightFootNav">
  <a href="#access">Accessibility</a><a href="#none" class="rightp">|</a><a href="#privacy">Privacy Policy</a><a class="rightp" href="#none">|</a><a href="#sitemap">Site Map</a>
  </div>
  <img src={img2} class="jprightLogo" alt="rfooterlogo"></img>
  </div>
  </footer>

    )
}

export default Footer
