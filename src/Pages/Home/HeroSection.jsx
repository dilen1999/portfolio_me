// export default function HeroSection() {
//   return (
//     <section id="heroSection" className="hero--section">
//       <div className="hero--section--content--box">
//         <div className="hero--section--content">
//           <p className="section--title">Hey, I'm George Dilen</p>
//           <h1 className="hero--section--title">
//             <span className="hero--section-title--color" style={{color:"blue"}}>Full Stack Developer</span>{" "}
//             <br />
//             {/* Developer */}
//           </h1>
//           <p className="hero--section-description">
//           I am third-year undergraduate of the Faculty of Engineering, University of Ruhuna. I am reading for a BSc. (Hons.) Degree in Computer Engineering.
//             {/* <br /> Dolorum, quas. Amet soluta assumenda cum? */}
//           </p>
//         </div>
//         <button className="btn btn-primary">Get In Touch</button>
//       </div>
//       <div className="hero--section--img" style={{width:"20vw", height:"70vh",marginLeft: "10vw"}}>
//         <img src="./img/hero_img.png" alt="Hero Section" />
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import "../HeroSection.css"; // Import your CSS file where you define the animation

export default function HeroSection() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Delay the showing of the text to create the typing effect
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const handleDownloadCV = () => {
    // Replace 'cv.pdf' with the path to your CV file
    const cvUrl = "../img/CV.pdf";
    // Initiating the download
    window.open(cvUrl, "_blank");
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm George Dilen</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color" style={{ color: "Darkblue" }}>
              {showText && <TypedText text="Full Stack Developer" />}
            </span>
            <br />
          </h1>
          <p className="hero--section-description">
            I am a third-year undergraduate of the Faculty of Engineering, University of Ruhuna. I am reading for a BSc. (Hons.) Degree in Computer Engineering.
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleDownloadCV}>dowload CV</button>
      </div>
      <div className="hero--section--img" style={{ width: "20vw", height: "70vh", marginLeft: "10vw" }}>
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

// Component for the typing animation
const TypedText = ({ text }) => {
  return (
    <span className="typed-text">
      {text.split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ))}
    </span>
  );
};
