import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top Section with Logo */}
        <div className="footer-top">
          <Link href="/" className="footer-logo">
            <span className="logo">
              Muskaan<span className="highlight">logo</span>
            </span>
          </Link>
        </div>

        {/* Footer Content Section */}
        <div className="footer-content">
          <div className="footer-about">
            <h4>About AI Blog</h4>
            <p>Stay updated with AI developments in various industries, from healthcare to gaming, and learn how AI is shaping the world.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul className="footerLinks">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>

          {/* Social Media Links Section with Text */}
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <div className="social-btn">
                <Link href="https://twitter.com" className="social-link">
                  <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
                  <span>Twitter</span>
                </Link>
              </div>
              <div className="social-btn">
                <Link href="https://facebook.com" className="social-link">
                  <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
                  <span>Facebook</span>
                </Link>
              </div>
              <div className="social-btn">
                <Link href="https://instagram.com" className="social-link">
                  <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
                  <span>Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AI Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
