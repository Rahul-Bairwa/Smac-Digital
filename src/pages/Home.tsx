import { FaArrowRight } from "react-icons/fa"
import CallbackForm from "../components/CallbackForm"
import seoPng from '../assets/seo.png'
import { SiWhatsapp } from "react-icons/si"
import { BsMegaphone } from "react-icons/bs"
import { PiRocket } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import { TbHeartShare } from "react-icons/tb";
import { IconType } from "react-icons"
import Services from "../components/Services"
import message from '../assets/message.png'
import message2 from '../assets/message-2.png'
import Project from "../components/Project"
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'

const Home = () => {
    const featuresComponents: { title: string, desc: string, icons: IconType }[] = [
        {
            title: "New-age Digital Marketing Approach",
            desc: "We follow the new age digital marketing approach by driving positive Return On Investment from your marketing expense.",
            icons: BsMegaphone
        },
        {
            title: "Strong Creative Designers",
            desc: "A real creative team to get the best ideas for your market and create a unique perception of your brand.",
            icons: PiRocket
        },
        {
            title: "Real Success Stories",
            desc: "Real stories to convert startups in brands by proving a performance-oriented digital marketing approach.",
            icons: TbWorldWww
        },
        {
            title: "Digital Marketing Agency Owned Media From Offline to Online",
            desc: "We have our media to promote you offline and online so that you can get the best rates for your advertisements.",
            icons: TbHeartShare
        },

    ];
    const projects: { title: string, img: string }[] = [
        { title: 'Stone Hub India', img: project1 },
        { title: 'Intex Technologies', img: project2 },
        { title: 'OohMexicano', img: project3 }
    ]
    return (
        <>
            <div className="home-section">
                <section className="intro-section">
                    <div className="intro-left">
                        <div>
                            <div className="digital-marketing-agency">Digital Marketing Agency</div>
                            <h1>We Are A Performance <br />
                                Driven Digital Marketing Agency in India
                            </h1>
                            <p>We boost your business through new age media</p>
                            <button><span><FaArrowRight /></span>Analyze Your Marketing Expense </button>
                        </div>
                    </div>
                    <CallbackForm />
                </section>
                <section className="features-section">
                    <div className="features-section-inner-div">
                        <div className="seo-container">
                            <h4>Our Features</h4>
                            <h1>We help you to get the best out <br />
                                of your marketing expenses with our professional digital marketing team of marketers through online and offline media.
                            </h1>
                            <img src={seoPng} alt="" />
                        </div>
                        <div className="feature-section-card">
                            {
                                featuresComponents.map((e) => {
                                    return (
                                        <div className="feature-card">
                                            <div></div>
                                            <e.icons />
                                            <h3>{e.title}</h3>
                                            <p>{e.desc}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                <section className="services-section">
                    <div className="services-top-section">
                        <div>Our Services</div>
                        <h1>Performance Driven Digital Marketing Services</h1>
                    </div>
                    <div className="service-card-container">
                        <Services />
                    </div>
                </section>
                <section className="suggestion-section">
                    <img src={message} alt="" />
                    <div>Our Digital Marketing Service Features</div>
                    <h1>Don't Forget To Get Expert Suggestion <br />
                        On Your Digital Assets
                    </h1>
                    <p>Please enter valid website, email address or phone number.</p>
                    <form className="suggestion-form">
                        <input type="text" placeholder="http://website here" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Phone Number" name="" />
                        <button><span><FaArrowRight /></span>Analyze Your Site</button>
                    </form>
                </section>
                <section className="projects-section">
                    <img src={message2} alt="Message Image" />
                    <span>Our Portfolio</span>
                    <h1>Creative Works Which Converted <br />
                        Startup Into A Brand!
                        </h1>
                    <div className="projects-container">
                        {
                            projects.map((e)=>{
                                return(
                                    <Project e={e}/>
                                )
                            })
                        }
                    </div>
                    <button><span><FaArrowRight /></span>Other Projects</button>
                </section>
                <div className="whatsapp-sticky-div">
                    <button className="whatsapp-sticky-button"><SiWhatsapp /></button>
                </div>
            </div>
        </>
    )
}

export default Home
