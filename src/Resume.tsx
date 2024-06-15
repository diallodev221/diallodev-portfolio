const Resume = () => {
  return (
    <section className="resume-section" id="resume-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".3s">
              <h2 className="section-title">
                <i className="flaticon-recommendation"></i> My Experience
              </h2>
            </div>

            <div className="resume-widget">
              <div className="resume-item wow fadeInLeft" data-wow-delay=".4s">
                <div className="resume-item-left">
                  <img
                    src="/src/assets/img/icons/eng_tech_group_logo.jpeg"
                    alt=""
                    width={48}
                  />
                </div>
                <div className="resume-item-right">
                  <h3 className="role">Software Developer - Consultant</h3>
                  <div className="organization">
                    ENG Technologie Group - Contract
                  </div>
                  <div className="time">Nov 2023 - Present</div>
                  <div className="location">Dakar, Senegal - Full-time</div>
                </div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
                <div className="resume-item-left">
                  <img
                    src="/src/assets/img/icons/eng_tech_group_logo.jpeg"
                    alt=""
                    width={48}
                  />
                </div>
                <div className="resume-item-right">
                  <h3 className="role">Software Developer Intern</h3>
                  <div className="organization">
                    ENG Technologie Group - Stage
                  </div>
                  <div className="time">July 2023 - Oct 2023 • 4 mois</div>
                  <div className="location">Dakar, Senegal - Full-time</div>
                </div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                <div className="resume-item-left">
                  <img
                    src="/src/assets/img/icons/mafalia_logo.jpeg"
                    alt=""
                    width={48}
                  />
                </div>
                <div className="resume-item-right">
                  <h3 className="role">Software Engineer</h3>
                  <div className="organization">Mafalia - Contract</div>
                  <div className="time">{"Nov 2023 - Present"}</div>
                  <div className="location">Dakar, Senegal - Remote</div>
                </div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".7s">
              <div className="resume-item-left">
                  <img
                    src="/src/assets/img/icons/sarayatech_logo.jpeg"
                    alt=""
                    width={48}
                  />
                </div>
                <div className="resume-item-right">
                  <h3 className="role">Full Stack Web Developer</h3>
                  <div className="organization">SarayaTech Senegal - Stage</div>
                <div className="time">Oct 2021 - Dec 2022 • 3 mois</div>
                <div className="location">Dakar, Senegal</div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".4s">
              <h2 className="section-title">
                <i className="flaticon-graduation-cap"></i> My Education
              </h2>
            </div>

            <div className="resume-widget">
              <div className="edu-item wow fadeInRight" data-wow-delay=".5s">
                <div className="time">2020 - 2023</div>
                <h3 className="edu-title">Programming course</h3>
                <div className="institute">Harverd University</div>
              </div>
            
              <div className="edu-item wow fadeInRight" data-wow-delay=".7s">
                <div className="time">2022 - 2023</div>
                <h3 className="edu-title">
                  Certificate Java Full-Stack Developer
                </h3>
                <div className="institute">SarayaTech Senegal, Dakar</div>
              </div>
              <div className="edu-item wow fadeInRight" data-wow-delay=".8s">
                <div className="time">2020 - 2023</div>
                <h3 className="edu-title">
                  Bachelor Degree - Software Development
                </h3>
                <div className="institute">
                  University Digital Cheikh Hamidou Kane, Senegal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
