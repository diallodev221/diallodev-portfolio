const Service = () => {
  return (
    <>
      {/* <!-- SERVICES SECTION START --> */}
      <section className="light-mode services-section" id="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="light-mode section-header text-center">
                <h2
                  className="light-mode section-title wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  My Quality Services
                </h2>
                <p className=" wow fadeInUp" data-wow-delay=".4s">
                  I am committed to delivering high-quality, reliable software
                  that meets your exact specifications and exceeds your
                  expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="light-mode services-widget position-relative">
                <div
                  className="light-mode service-item current d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">01</span>
                    <h3 className="light-mode service-title">Consulting</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      IT consulting to help businesses choose the right
                      technologies and solutions.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper"
                    className="service-link modal-popup"
                  ></button>
                </div>
                <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">02</span>
                    <h3 className="service-title"> Web Development</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      Creation of responsive and user-friendly websites and web
                      applications. E-commerce solutions, including shopping
                      carts, payment gateways, and order management systems.
                      Single-page applications (SPAs) using frameworks like
                      React, Angular, or Vue.js.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper"
                    className="service-link modal-popup"
                  ></button>
                </div>
                <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">03</span>
                    <h3 className="service-title">
                      API Development and Integration
                    </h3>
                  </div>
                  <div className="right-box">
                    <p>
                      Optimize your digital ecosystem with my API development
                      and integration services. I design robust, scalable APIs
                      and integrate third-party APIs to enhance your existing
                      systems, improving efficiency and connectivity across your
                      business.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper"
                    className="service-link modal-popup"
                  ></button>
                </div>
                {/* <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">04</span>
                    <h3 className="service-title">Mobile App Development</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      In today's mobile-first world, I develop top-notch mobile
                      apps for iOS and Android that offer a seamless user
                      experience and drive engagement. Whether you need a native
                      app, I have the expertise to bring your mobile app ideas
                      to life.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper"
                    className="service-link modal-popup"
                  ></button>
                </div> */}
                <div
                  className="active-bg wow fadeInUp"
                  data-wow-delay=".5s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- SERVICES SECTION END --> */}

      {/* <!-- start: Service Popup --> */}
      <div
        id="service-wrapper"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        <div className="popup_modal_img">
          <img src="../src/assets/img/services/modal-img.jpg" alt="" />
        </div>

        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">SERVICES</h6>
                    <h2 className="title">UI/UX Design</h2>
                    <div className="desc">
                      <p>
                        Elizabeth some dodgy chavs are you taking the piss faff
                        about pardon amongst car boot a load of old tosh is
                        cracking goal blow off telling brown.
                      </p>

                      <p>
                        Brolly show off show off pick your nose and blow off
                        well A bit of how’s your father tomfoolery blimey, me
                        old mucker starkers Queen’s English dropped a clanger
                        bite your arm spiffing good time burke Why chancer.
                        Hotpot bum bag cracking goal young delinquent naff
                        bugger cup of chars bender loo it’s all gone to pot the
                        nancy cheeky.
                      </p>

                      <p>
                        At public school cras bog some dodgy chav Richard Why
                        argy bargy vagabon William bender matie boy, off his nut
                        chancer Jeffrey up the kyver say mufty you mug ummm
                        telling pear shaped Oxford owt to do with me do one so
                        said are you taking his.
                      </p>
                    </div>

                    <h3 className="title">Services Process</h3>
                    <div className="desc">
                      <p>
                        Elizabeth some dodgy chavs are you taking the piss faff
                        about pardon amongst car boot a load of old tosh is
                        cracking goal blow off telling brown.
                      </p>
                    </div>
                    <ul>
                      <li>Reinvent Your Business to Better</li>
                      <li>Pioneering the Internet's First</li>
                      <li>Pioneering the Design World's First</li>
                      <li>Pioneering the Design World's First</li>
                      <li>Pioneering the Design World's First</li>
                      <li>Pioneering the Design World's First</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="tj_main_sidebar">
                  <div className="sidebar_widget services_list">
                    <div className="widget_title">
                      <h3 className="title">All Services</h3>
                    </div>
                    <ul>
                      <li className="active">
                        <button>
                          <i className="flaticon-design"></i>
                          Branding Design
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-3d-movie"></i>
                          3D Animation
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ux-design"></i>
                          UI/UX Design
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i>
                          Web Design
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-ui-design"></i>
                          App Design
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="sidebar_widget contact_form">
                    <div className="widget_title">
                      <h3 className="title">Get in Touch</h3>
                    </div>

                    <form action="index.html">
                      <div className="form_group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                          autoComplete="off"
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="email"
                          name="semail"
                          id="semail"
                          placeholder="Email"
                          autoComplete="off"
                        />
                      </div>
                      <div className="form_group">
                        <textarea
                          name="smessage"
                          id="smessage"
                          placeholder="Your message"
                          autoComplete="off"
                        ></textarea>
                      </div>
                      <div className="form_btn">
                        <button className="btn tj-btn-primary" type="submit">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end: Service Popup --> */}
    </>
  );
};

export default Service;
