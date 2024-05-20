export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Third year ComputerEngineering Undergraduate who finds hisself in a
            real world ruled by progress and productivity. Passionate and
            innovative Full-Stack Developer with a creative mindset and a strong
            inclination towards problem-solving. Equipped with a comprehensive
            skill set spanning both front-end and back-end development, With a
            proactive and energetic approach, I am dedicated to delivering
            high-quality products that exceed expectations.
          </p>
          <div>
            <ul>
              <li className="hero--section-description">
                Always eager to know new technology.
              </li>
              <li className="hero--section-description">
                Passionate and innovative Full-Stack Developer with a creative
                mindset and a strong inclination towards problem-solving.
              </li>
              <li className="hero--section-description">
                Equipped with a comprehensive skill set spanning both
                front-end and back-end development.
              </li>
              <li className="hero--section-description">
                Dedicated to delivering high-quality products that exceed
                expectations with a proactive and energetic approach.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
