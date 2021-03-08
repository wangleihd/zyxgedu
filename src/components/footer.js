/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p>中业信工教育 <span className="icon -love"><RiHeart2Line/></span> by <Link to="/">zyxgedu.com</Link></p>
    </div>
  </footer>
)

export default Footer