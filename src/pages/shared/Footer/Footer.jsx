import { Link } from "react-router-dom";
import logo from "../../../assets/herologo.png"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-orange-primary text-white font-bold">
            <div>
                <img className="w-32" src={logo} alt="" />
                <p>Heroverse Toy Industries Ltd.<br />Providing best toy for kids</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/" className="link link-hover">Branding</Link>
                <Link to="/" className="link link-hover">Design</Link>
                <Link to="/" className="link link-hover">Marketing</Link>
                <Link to="/" className="link link-hover">All Toys</Link>
                <Link to="/" className="link link-hover">Blogs</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="/" className="link link-hover">About us</Link>
                <Link to="/" className="link link-hover">Contact</Link>
                <Link to="/" className="link link-hover">Jobs</Link>
                <Link to="/login" className="link link-hover">Login</Link>
                <Link to="/" className="link link-hover">register</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="/" className="link link-hover">Terms of use</Link>
                <Link to="/" className="link link-hover">Privacy policy</Link>
                <Link to="/" className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;