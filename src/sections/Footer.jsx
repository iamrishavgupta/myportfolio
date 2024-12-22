const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mt-10 md:mt-40">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a href="https://github.com/iamrishavgupta" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">
              <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </div>
          </a>

          <a href="https://x.com/ItsRishav_dev" target="_blank" rel="noopener noreferrer">

          <div className="social-icon">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </div>

          </a>
          
        </div>
  
        <p className="text-white-500">© 2024 Rishav Gupta. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  