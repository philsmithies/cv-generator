import './style.css'
import Github from './github_white.png'

const Footer = () => {
  return (
    <div class="footer">
      <a href="https://github.com/philsmithies/cv-generator"><img src={Github} alt="logo footer" className="github_img"/></a>
      <a href="https://github.com/philsmithies/cv-generator">Github</a>
    </div>
  )
}

export default Footer