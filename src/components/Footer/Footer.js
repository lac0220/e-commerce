import './footer.scss';
import logo from '../logo.webp';

export default function Footer() {

    return (
        <div className="footer">
            <hr></hr>
            <img src={logo} alt="E-commerce" />
            <p>Copyright &copy; Laszlo Nemeth 2026</p>
        </div>
    );
}