import data from "./data.json";

const { skills } = data;

const Skill = () => {
  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Skills
              </h2>
              <p className=" wow fadeInUp" data-wow-delay=".4s">
                I excel in various programming languages and frameworks,
                enabling me to craft bespoke software solutions tailored to your
                unique requirements. My proficiency ensures seamless integration
                and optimal performance for all applications.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              {skills.map((sk) => (
                <div className="skill-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="skill-inner">
                    <div className="icon-box">
                      <img src={sk.img} alt={sk.name} />
                    </div>
                    <div className="number">92%</div>
                  </div>
                  <p>{sk.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
