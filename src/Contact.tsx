
const Contact = () => {
  return (
    <section className="contact-section" id="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 order-2 order-md-1">
                        <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
                            <div className="section-header">
                                <h2 className="section-title">Let’s work together!</h2>
                                <p>I design and code beautifully simple things and i love what i do. Just simple like
                                    that!
                                </p>
                            </div>

                            <div className="tj-contact-form">
                                <form id="contact-form">
                                    <div className="row gx-3">
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input type="text" name="conName" id="conName" placeholder="First name"
                                                    autoComplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input type="text" name="conLName" id="conLName" placeholder="Last name"
                                                    autoComplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input type="email" name="conEmail" id="conEmail"
                                                    placeholder="Email address" autoComplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input type="tel" name="conPhone" id="conPhone"
                                                    placeholder="Phone number" autoComplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form_group">
                                                <select name="conService" id="conService" className="tj-nice-select">
                                                    <option value="" selected disabled>Choose Service</option>
                                                    <option value="braning">Web Consultance</option>
                                                    <option value="web">Web Development</option>
                                                    <option value="uxui">UI/UX Design</option>
                                                    <option value="app">Mobile Development</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form_group">
                                                <textarea name="conMessage" id="conMessage"
                                                    placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form_btn">
                                                <button type="submit" className="btn tj-btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1 col-md-5  d-flex flex-wrap align-items-center  order-1 order-md-2">
                        <div className="contact-info-list">
                            <ul className="ul-reset">
                                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                                    data-wow-delay=".4s">
                                    <div className="icon-box">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <div className="text-box">
                                        <p>Phone</p>
                                        <a href="tel:00221771244151">+221 77 124 41 51 | +221 76 429 12 61</a> 
                                    </div>
                                </li>
                                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                                    data-wow-delay=".5s">
                                    <div className="icon-box">
                                        <i className="flaticon-mail-inbox-app"></i>
                                    </div>
                                    <div className="text-box">
                                        <p>Email</p>
                                        <a href="mailto:mail@mail.com">saifoulaye.diallo0512@gmail.com</a>
                                    </div>
                                </li>
                                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                                    data-wow-delay=".6s">
                                    <div className="icon-box">
                                        <i className="flaticon-location"></i>
                                    </div>
                                    <div className="text-box">
                                        <p>Address</p>
                                        <a href="#">Keur Massar, Dakar <br />Senegal</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact