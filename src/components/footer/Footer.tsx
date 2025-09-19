import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear() 
  return (
    <footer className="bg-[#00545F] rounded-t-3xl mt-8 px-4 py-6">
      <div className="text-sm text-gray-300">
        <div className="flex flex-col gap-3">
          <Link to="/account-type" className="hover:text-white transition-colors">
            My Account
          </Link>
          <Link to="/help-and-contact" className="hover:text-white transition-colors">
            Help & Contact
          </Link>
          <Link to="#" className="hover:text-white transition-colors">
            Become a Seller
        </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-600 text-center">
          <p className="text-xs text-gray-400">© {year} Bid&Buy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
