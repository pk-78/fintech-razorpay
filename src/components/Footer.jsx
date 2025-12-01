import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="text-white">
     
      <div className="max-w-7xl mx-auto px-6 py-10 grid  md:grid-cols-2 gap-8">
        {/* Company Info */}
        <div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Company name
          </h2>
          <p className="mb-1 ">New Delhi</p>
          <div className="flex items-center gap-2 my-1">
            <MdEmail className="text-xl" />
            <span>xyz123@gamil.com</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <MdPhone className="text-xl" />
            <span>111-222-3334</span>
          </div>
          <div className="flex gap-4 text-2xl ">
            <FaLinkedin className="hover:text-[#0077b5]" />
            <FaFacebookSquare className="hover:text-[#1877f2]" />
            <FaTwitter className="hover:text-[#1da1f2]" />
            <FaInstagram className="hover:text-[#e1306c]" />
          </div>
        </div>
        </div>
    <div className="grid grid-cols-3">
        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-3">Product</h3>
          <ul className="space-y-2  text-white">
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Charting</a></li>
            <li><a href="#">Billing</a></li>
            <li><a href="#">Outcomes</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-3">Company</h3>
          <ul className="space-y-2  text-white">
            <li><a href="#">Features</a></li>
            <li><a href="#">Why Ritten</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-3">Support</h3>
          <ul className="space-y-2  text-white">
            <li><a href="#">Contact Us</a></li>
            <li> <a href="#">Privacy Policy </a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
     </div>
     </div>

    

      {/* Bottom Bar */}
      <div className="bg-[#252525] pb-36 md:pb-28 pt-4 text-white text-center  text-lg h-15">
        
      </div>
    </footer>
  );
}

export default Footer;
