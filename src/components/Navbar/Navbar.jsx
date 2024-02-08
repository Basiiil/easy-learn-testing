import styled from './Navbar.module.css'
import {Github,Linkedin,Twitter} from '../../assets/icons/index'
function Navbar() {
  return (
    <div className={styled.navbar}>
        <div className={styled.testTech}>JEST & REACT TESTING</div>
        <div className={styled.icons}>
            <Github />
            <Linkedin />
            <Twitter />
        </div>
    </div>
  )
}

export default Navbar