import { useState } from "react";
import "./App.css";
import Particles from "./components/Particles/Particles";
import Lanyard from "./components/Lanyard/Lanyard";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "./useInView";
import resume from './assets/resume.pdf';
import Swal from 'sweetalert2';

function Number({ n, decimals = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? n : 0 },
    config: { mass: 1, tension: 20, friction: 20 },
  });

  return (
    <animated.h2 ref={ref}>
      {number.to((val) => val.toFixed(decimals))}
    </animated.h2>
  );
}

const Skills = ({ title, image }) => {
  return (
    <div className="skill">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

const Work = ({ title, company, image, desc, time, position }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`work ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="work">
        <div className="card-inner">
          <div className="front">
            <img src={image} alt={title} />
            <div className="description">
              <h3>{title}</h3>
              <p>{time}</p>
              <h5>{company}</h5>
              <h6>{position}</h6>
            </div>
          </div>
          <div className="back">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = ({ title, desc, link, image }) => {
  return (
    <div className="project">
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-xl shadow-md mb-4"
      />
      <div className="detail">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{desc}</p>
        <div className="buttons flex gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "f0074eeb-79aa-4f14-beeb-4bfc5289b3c4");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    })
  }
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          position: "fixed", // 🔄 changed from absolute to fixed
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh", // 🆗 fills the whole screen height
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="hello">
        <div className="header">
          <h1 className="typewriter  font-DynaPuff text-4xl font-bold">
            {" "}
            Hi There👋! Welcome to Cica's portofolio
          </h1>
        </div>
        <div className="memoji">
          <div className="lanyard">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
          <div className="bubble">
            <p>
              {" "}
              Hi, I’m Cica! 👋 Welcome to my portfolio. Scroll down this to
              explore more about Isya and all the cool things she’s been up to!
              Throughout this journey, you’ll get a glimpse of her education,
              skills, work experiences, and exciting projects she’s worked on.
              So prepare your coffee, sit back, relax, and enjoy the ride! 🚀
            </p>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="container1">
          <div className="myphoto">
            <div className="circle-bg"></div>
            <img src="/fullbody.jpg" width="200" alt="Isya" />
          </div>
          <div className="about">
            <h1>Hey there !</h1>
            <h2> I am Isya Maghfira Zalfa </h2>
            <h4> but feel free to call me Cica! </h4>
            <p>
              An Informatics student with a strong focus on <b>Cybersecurity</b>
              ,especially in <b>digital forensics</b> and <b>risk assessment</b>. I’m also
              passionate about frontend development — building intuitive and
              secure <b>web</b> and <b>mobile</b> apps that balance creativity
              with functionality. Whether I’m analyzing threats or designing
              user interfaces, I love creating experiences that are not only
              impactful, but also safe. Always learning, always exploring —
              let’s connect and create something meaningful! ✨
            </p>
            <div className="contact">
              <div className="phone">
                <FaPhoneAlt />
                <h6>087805801599</h6>
              </div>
              <br />
              <div className="email">
                <MdEmail />
                <h6>005cica@gmail.com</h6>
              </div>
              <br />
              <div className="location">
                <FaLocationDot />
                <h6>Bekasi, Indonesia</h6>
              </div>
            </div>
            <div className="resumeapp">
            <button className="resume">
            <a href={resume} download="resume">Download resume</a>
          </button>
            <div className="apps">
              
              <h5>Check out my</h5>
              <div className="circle-contact">
                <button>
                  <a href=" https://www.instagram.com/isyaaamghfra?igsh=a3Jnd292ejlzeWdt">
                    <FaInstagram size={30} />{" "}
                  </a>
                </button>
              </div>
              <div className="circle-contact">
                <button>
                  <a href="https://www.linkedin.com/in/isya-maghfira-zalfa-8b707828b/">
                    <FaLinkedin size={30} />{" "}
                  </a>
                </button>
              </div>
              <div className="circle-contact">
                <button>
                  <a href="https://github.com/cicuut">
                    <FaGithub size={30} />{" "}
                  </a>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="whatIDo">
            <div className="circle web">
              <h2>Web Development</h2>
            </div>
            <div className="circle mobile">
              <h2>Mobile Development</h2>
            </div>
            <div className="circle forensic">
              <h2>Digital Forensic</h2>
            </div>
            <div className="circle risk">
              <h2>Risk Assessment</h2>
            </div>
          </div>
          <div className="counter">
            <div className="gpa">
              <Number n={3.83} decimals={2} />
              <h3>Grade Avarage Point</h3>
            </div>
            <div className="projects">
              <Number n={5} decimals={0} />
              <h3>Work Projects</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <h2>What I’ve Worked With</h2>
        <div className="theskills">
          <div className="frontend">
            <h4>Frontend</h4>
            <div className="content">
              <Skills image="/html.png" title="html" />
              <Skills image="/css.png" title="css" />
              <Skills image="/javascript.png" title="javascript" />
              <Skills image="/tailwind.png" title="tailwind css" />
              <Skills image="/react.png" title="react" />
            </div>
          </div>
          <div className="backend">
            <h4>Backend</h4>
            <div className="content">
              <Skills image="/php.png" title="php" />
              <Skills image="/laravel.png" title="laravel" />
              <Skills image="/python.png" title="python" />
              <Skills image="/mysql.png" title="mysql" />
              <Skills image="/mongodb.svg" title="mongodb" />
            </div>
          </div>
          <div className="mobile-dev">
            <h4>Mobile</h4>
            <div className="content">
              <Skills image="/java.png" title="java" />
            </div>
          </div>
          <div className="cyber">
            <h4>Cyber Security</h4>
            <div className="content">
              <Skills image="/wireshark.png" title="wireshark" />
              <Skills image="/linux.png" title="linux" />
              <Skills image="/burpsuite.png" title="burpsuite" />
              <Skills image="/autopsy.png" title="autopsy" />
            </div>
          </div>
          <div className="others">
            <h4>Others</h4>
            <div className="content">
              <Skills image="/gdocs.png" title="gdocs" />
              <Skills image="/spreadsheet.png" title="spreadsheet" />
              <Skills image="/canva.png" title="canva" />
              <Skills image="/git.png" title="git" />
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <h2>Where I’ve Made Impact</h2>
        <div className="theworks">
          <div className="timeline-line"></div> {/* garis tengah */}
          <div className="timeline-wrapper">
            <div className="timeline left">
              <div className="works vod">
                <Work
                  image="/voder.jpg"
                  title="External Relation"
                  time="Nov 2023-Sep 2024"
                  company="PUMA Informatics"
                  position="Vice Head of External Relation"
                  desc="As the Vice Head of External Relation in PUMA, I’ve played a key role in organizing major events and 
                    fostering strong collaborations with external partners. My responsibilities include coordinating event 
                    logistics, maintaining stakeholder engagement, leading internal coordination, and managing public relations. 
                    I also address challenges promptly to ensure smooth execution. This role has sharpened my skills in 
                    communication, event planning, and partnership building—contributing to HIMA’s successful initiatives
                    and broader outreach."
                />
              </div>
            </div>
            <div className="timeline right">
              <div className="works culfest2023">
                <Work
                  image="/culfest2023.jpg"
                  title="Cultural Festival  2023"
                  time="Nov 2023"
                  company="President University Student Boarding"
                  position="Staff of Guard"
                  desc="As an Event Guard for sports and esports events, I ensured the safety and smooth flow of activities by 
            managing crowd control, monitoring access, and responding to emergencies. I provided assistance to attendees, 
            maintained surveillance for security threats, and supported event setup and teardown. This role strengthened 
            my communication, problem-solving, and situational awareness skills while ensuring a safe and enjoyable 
            experience for all participants."
                />
              </div>
            </div>
            <div className="timeline left">
              <div className="works comstud">
                <Work
                  image="/comstud.jpg"
                  title="Comparative Study"
                  time="Nov 2023-Mar 2024"
                  company="PUMA Informatics"
                  position="Vice Project Manager"
                  desc="As Vice Project Manager for a Comparative Study Event, I helped lead the planning and execution of a program 
                            that promoted knowledge exchange and cross-cultural understanding. I collaborated on strategic planning, 
                            coordinated a diverse team, managed event logistics, engaged with institutional partners, and supported budget 
                            oversight. I also contributed to post-event evaluation and problem-solving. This role strengthened my leadership, 
                            project management, and communication skills while enabling me to foster meaningful connections and learning 
                            experiences."
                />{" "}
              </div>
            </div>
            <div className="timeline right">
              <div className="works comvis">
                <Work
                  image="/comvis.jpg"
                  title="Company Visit"
                  time="Nov 2023-Apr 2024"
                  company="PUMA Informatics"
                  position="Member of Liasion Officer"
                  desc="Liaison Officer for company visits, I facilitated communication and coordination between our team and 
                            partner organizations. My role involved reaching out to prospective companies, building professional 
                            relationships, managing visit logistics, and aligning company expertise with event goals. This experience 
                            strengthened my communication, networking, and organizational skills while ensuring smooth and impactful 
                            company visits."
                />
              </div>
            </div>
            <div className="timeline left">
              <div className="works ic">
                <Work
                  image="/impactcircle.jpg"
                  title="Impact Circle 8.0"
                  time="Dec 2023 - Mar 2024"
                  company="AIESEC in PU"
                  position="OC of Brand Marketing and Communication"
                  desc="I specialize in Brand Marketing, Communications, and Design with a focus on crafting impactful strategies and 
                    visuals that connect with diverse audiences. My role includes developing brand campaigns, designing engaging 
                    content, managing digital platforms, and leveraging analytics for data-driven insights. I also support event 
                    coordination to boost brand engagement. With a passion for storytelling and design, I aim to create meaningful 
                    and consistent brand experiences."
                />{" "}
              </div>
            </div>
            <div className="timeline right">
              <div className="works csgo">
                <Work
                  image="/csgo.jpg"
                  title="Computing Sport and Games Olympiade 2023"
                  time="Jan 2024-Feb 2024"
                  company="PUFA Computing"
                  position="Staff of Guard"
                  desc="As an Event Guard for sports and esports events, I ensured the safety and smooth flow of activities by  managing crowd control, monitoring access, and responding to emergencies. I provided assistance to attendees,  maintained surveillance for security threats, and supported event setup and teardown. This role strengthened  my communication, problem-solving, and situational awareness skills while ensuring a safe and enjoyable  experience for all participants."
                />
              </div>
            </div>
            <div className="timeline left">
              <div className="works afl">
                <Work
                  image="/aflinsummer.jpg"
                  title="AIESEC Future Leader"
                  time="Feb 2024 - Feb 2025"
                  company="AIESEC in PU"
                  position="Staff of CX&IR"
                  desc="As a CX&IR member, I successfully increased participant satisfaction to 93% and exceeded the target by 1.44% 
                    through excellent service, clear communication via WhatsApp, and engaging handbook design. I built strong 
                            relationships by understanding participants’ needs and adapting to different personalities. I also analyzed 
                            feedback to improve the event experience. This role sharpened my skills in communication, time management, 
                            design, and customer relationship management."
                />
              </div>{" "}
            </div>
            <div className="timeline right">
              <div className="works culfest2024">
                <Work
                  image="/culfest2024.jpg"
                  title="Cultural Festival  2024"
                  time="Feb 2024 - Nov 2025"
                  company="President University Student Boarding"
                  position="Staff of Event Organizer"
                  desc="As an Event Organizer for the Cultural Festival 2024, I helped plan and execute a vibrant celebration that promoted cultural awareness. I led a team of international volunteers, coordinated performers, and ensured smooth on-site operations. This role strengthened my skills in event planning, team coordination, and problem-solving."
                />
              </div>{" "}
            </div>
            <div className="timeline left">
              <div className="works schoters">
                <Work
                  image="/schoters.jpg"
                  title="Study and Work Abroad Festival"
                  time="Jul 2024"
                  company="Schoters by Ruang Guru"
                  position="Staff of Crowd Control"
                  desc="As a Crowd Control Specialist, I ensure safe, organized, and enjoyable event environments. My role involves 
                    managing large crowds, guiding attendee movement, enforcing safety protocols, and responding swiftly to 
                    potential risks or emergencies. I also provide clear communication and support to attendees, helping 
                    maintain a positive atmosphere. With strong situational awareness and interpersonal skills, I contribute 
                    to the smooth execution of both small and large-scale events."
                />{" "}
              </div>
            </div>
            <div className="timeline right">
              <div className="works ta">
                <Work
                  image="/temualumni.jpg"
                  title="Temu Alumni 2024"
                  time="Apr 2024 - Jun 2024"
                  company="PUMA Informatics"
                  position="PIC of Liasion Officer"
                  desc="As the PIC of Liaison Officer for an alumni engagement event, I led a team in managing alumni outreach, 
                            ensuring clear communication and strong participation. I was responsible for coordinating with alumni, 
                            maintaining positive relationships, and aligning their involvement with the event’s objectives. By serving as 
                            the main point of contact, I helped create a welcoming atmosphere and facilitated meaningful connections. 
                            This role strengthened my leadership, communication, and organizational skills, while contributing to long-term 
                            alumni engagement and the success of the event."
                />
              </div>
            </div>
            <div className="timeline left">
              <div className="works techx">
                <Work
                  image="/techx.jpg"
                  title="Technology  Exploration"
                  time="Jun 2024 - Oct 2024"
                  company="PUMA Informatics"
                  position="Member of Sponsorship"
                  desc=" As a Sponsorship Member, I was responsible for securing and managing partnerships to support our events. 
                            I conducted outreach to potential sponsors, created tailored proposals, and negotiated mutually beneficial 
                            agreements. I also ensured sponsor visibility through branding integration and maintained strong, ongoing 
                            relationships. This role strengthened my skills in communication, negotiation, and partnership management."
                />{" "}
              </div>
            </div>
            <div className="timeline right">
              <div className="works loveyouth">
                <Work
                  image="/loveyouth.jpg"
                  title="LOVEYOUth 2024"
                  time="Oct 2024 - Jan 2025"
                  company="AIESEC  in PU"
                  position="Staff of Delegates Service"
                  desc="As part of the Delegate Service team, I conducted interviews and maintained effective communication via 
                    WhatsApp to ensure a smooth onboarding process. I built strong relationships by understanding participants’ 
                            needs, offering personalized support, and adapting to different personalities. I also addressed their concerns 
                            promptly, provided essential event information, and created a welcoming atmosphere throughout the program. 
                            By analyzing feedback and identifying improvement areas, I helped enhance the overall delegate experience 
                            and ensured they felt valued, informed, and engaged during the event."
                />
              </div>
            </div>
            <div className="timeline left">
              <div className="works hod">
                <Work
                  image="/hoder.jpg"
                  title="External Relation"
                  time="Oct 2024 - Present"
                  company="PUMA Informatics"
                  position="Head of Division External Relation"
                  desc="As Head of External Relations for PUMA Informatics, I led partnership strategies, managed stakeholder communications, and oversaw events with external parties. I also guided a team to ensure smooth execution and alignment with organizational goals. This role enhanced my leadership, event management, and strategic communication skills."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <h2>Project Showcase</h2>
        <div className="theprojects">
          <Project
            image="/lunar.jpg"
            title="LUNAR AI"
            desc="This mobile application integrates the OpenAI API to create a chatbot with multiple sensors, offering real-time, personalized interactions. I contributed by designing the UI/UX layouts and implementing the SQLite database for efficient data management, ensuring a seamless user experience."
            link="https://github.com/cicuut/Lunar-AI.git"
          />
          <Project
            image="/ticketopia.png"
            title="Ticketopia"
            desc="I built a ticketing website using PHP and MySQL, where I developed the home page and event 
         detail pages. The site dynamically displays events from the database, with each event page showing 
         key info like date, location, and ticket details. This project strengthened my skills in backend 
         development and database integration."
            link="https://github.com/cicuut/Ticketopia"
          />

          <Project
            image="/moodly.jpg"
            title="Moodly"
            desc="This mobile application helps users manage tasks based on their mood. When the user feels down, the app suggests low-effort tasks to avoid overwhelming them. I was responsible for creating all the UI/UX layouts and implementing key functionalities, including login/logout, adding tasks, updating task status, and handling user mood input to tailor task suggestions accordingly."
            link="https://github.com/cicuut/Moodly"
          />
          <Project
            image="/bunbelievable.png"
            title="Bunbelievable"
            desc="In the bakery website project built with HTML, CSS, and JavaScript, I developed the category and product description pages. I focused on creating a responsive and user-friendly interface that allows users to easily explore different types of bread and view detailed product information, including images, prices, and ingredients."
            link="https://github.com/cicuut/Bunbeliveable"
          />
          <Project
            image="/stepcure101.png"
            title="Stepcure101"
            desc="This web application is designed for assessing risks and managing threat intelligence. I contributed to both the frontend and backend development, ensuring a seamless user experience and efficient data processing. The application utilizes MongoDB for data storage and integrates with the MISP API to provide real-time threat intelligence."
            link="https://github.com/cicuut/Stepcure101"
          />
        </div>
      </div>
      <div className="section5">
        <div className="memoji2">
          <img src="/memoji3.gif" className="emoji" alt="Click me" />
          <div className="bubble">
            <p>
              Wow — you scrolled all the way down here? That means a lot to me.
              Thank you for taking the time to explore my work, my story, and
              the little things I’ve crafted with passion. Every project you’ve
              seen reflects not just skills and code, but also late nights, wild
              ideas, teamwork, and growth. I’m always excited to meet new
              people, collaborate on meaningful projects, or just chat about
              ideas and dreams. So, whether you’re here as a fellow creative, a
              potential teammate, or just someone curious — let’s connect, share
              stories, and maybe even build something awesome together.
            </p>
          </div>
        </div>
      </div>
      <div className="section6">
        <h2>Contact Me!</h2>
        <div className="contactme">
          <form onSubmit={onSubmit}>
            <div className="inputBox">
              <div className="inputField">
                <input
                  type="text"
                  placeholder="Full name"
                  id="name"
                  name="name"
                  className="item"
                  autoComplete="off"
                  required 
                />
                <input
                  type="text"
                  placeholder="Email address"
                  id="email"
                  name="email"
                  className="item"
                  autoComplete="off"
                  required 
                />
              </div>
              <div className="inputField">
                <input
                  type="text"
                  placeholder="Phone number"
                  id="phone"
                  name="phone"
                  className="item"
                  autoComplete="off"
                  required 
                />
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                   name="subject"
                  className="item"
                  autoComplete="off"
                  required 
                />
              </div>
              <div className="message">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Messages"
                  className="item"
                  autoComplete="off"
                  cols="30"
                  rows="10"
                  required 
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btnemail">
              Send message
            </button>
          </form>

          <div className="footer">
            <hr className="border-black-600 my-4" />
            <h1>Isya Maghfira Zalfa</h1>
            <h5>
              Informatics student | Cybersecurity enthusiast | Always curious,
              always learning.
            </h5>
            <button>
              <a href=" https://www.instagram.com/isyaaamghfra?igsh=a3Jnd292ejlzeWdt">
                <FaInstagram size={20} className="mr-5" />{" "}
              </a>
            </button>
            <button>
              <a href="https://www.linkedin.com/in/isya-maghfira-zalfa-8b707828b/">
                <FaLinkedin size={20} className="mr-5" />{" "}
              </a>
            </button>
            <button>
              <a href="https://github.com/cicuut">
                <FaGithub size={20} />{" "}
              </a>
            </button>
            <hr className="border-black-600 my-4" />
            <p>&copy; 2025 Cica. All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
