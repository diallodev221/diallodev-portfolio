import data from "./data.json";

const { email, logo } = data;

const Header = () => {
  return (
    <>
      {/* <!-- HEADER START --> */}
      <header className="tj-header-area header-absolute">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="index.html">
                  <img
                    src={logo}
                    alt="diallo-dev"
                  />
                </a>
              </div>

              <div className="header-info-list d-none d-md-inline-block">
                <ul className="ul-reset">
                  <li>
                    <a href="mailto:saifoulaye.diallo05@gmail.com">
                      {email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="header-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="#services-section">Services</a>
                    </li>
                    <li>
                      <a href="#works-section">Works</a>
                    </li>
                    <li>
                      <a href="#resume-section">Resume</a>
                    </li>
                    <li>
                      <a href="#skills-section">Skills</a>
                    </li>
                    <li>
                      <a href="#testimonials-section">Testimonials</a>
                    </li>
                    <li>
                      <a href="#contact-section">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-button">
                <a href="#" className="btn tj-btn-primary">
                  Hire me!
                </a>
              </div>

              <div className="menu-bar d-lg-none">
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="tj-header-area header-2 header-sticky sticky-out">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="index.html">
                  <img
                    src={logo}
                    alt="diallo-dev"
                  />
                </a>
              </div>

              <div className="header-info-list d-none d-md-inline-block">
                <ul className="ul-reset">
                  <li>
                    <a href="mailto:saifoulaye.diallo05@gmail.com">
                      {email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="header-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="#services-section">Services</a>
                    </li>
                    <li>
                      <a href="#works-section">Works</a>
                    </li>
                    <li>
                      <a href="#resume-section">Resume</a>
                    </li>
                    <li>
                      <a href="#skills-section">Skills</a>
                    </li>
                    <li>
                      <a href="#testimonials-section">Testimonials</a>
                    </li>
                    <li>
                      <a href="#contact-section">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-button">
                <a href="#" className="btn tj-btn-primary">
                  Hire me!
                </a>
              </div>

              <div className="menu-bar d-lg-none">
                <button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
