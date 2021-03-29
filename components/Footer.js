import { Link } from 'react-scroll'

export default function Footer() {
    return (
        <div className="footer">
            <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={1000}
            ><ion-icon name="arrow-up-circle-outline" /></Link>
            <p>Site made By Malcom Daley</p>
        </div>
    )
}