import data from "./data.json";

const { hero } = data;

const Hero = () => {
  return (
    <>
      {/* <!-- HERO SECTION START --> */}
      <section className="hero-section d-flex align-items-center" id="intro">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle">
              HI
            </text>
          </svg>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content-box">
                <span className="hero-sub-title">{hero.title}</span>
                <h1 className="hero-title">{hero.subtitles[0]}</h1>

                <div className="hero-image-box d-md-none text-center">
                  <img src={hero.profile.img} alt={hero.profile.alt} />
                </div>

                <p className="lead">
                  As a software developer, I tackle complex user experience
                  issues to build robust, integrity-focused solutions that bring
                  billions of people together.
                </p>
                <div className="button-box d-flex flex-wrap align-items-center">
                  <a href="#" className="btn tj-btn-secondary" download>
                    Download CV <i className="flaticon-download"></i>
                  </a>
                  <ul className="ul-reset social-icons">
                    {hero.professionalDetails.map(social => (
                      <li key={social.alt}>
                      <a href={social.link} target="_blank">
                        <i className={social.icon}></i>
                      </a>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="hero-image-box text-center">
                <img src="../src/assets/img/hero/Profile.png" alt="" />
              </div>
            </div>
          </div>

          <div className="funfact-area">
            <div className="row">
              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number">
                    <span className="odometer" data-count="4">
                      4
                    </span>
                  </div>
                  <div className="text">
                    Years of <br />
                    Experience
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number">
                    <span className="odometer" data-count="4">
                      4
                    </span>
                    +
                  </div>
                  <div className="text">
                    Project <br />
                    Completed
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number">
                    <span className="odometer" data-count="1">
                      1
                    </span>
                    K
                  </div>
                  <div className="text">
                    Happy <br />
                    Clients
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number">
                    <span className="odometer" data-count="4">
                      4
                    </span>
                  </div>
                  <div className="text">
                    Years of <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- HERO SECTION END --> */}
    </>
  );
};

export default Hero;
