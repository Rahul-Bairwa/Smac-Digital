import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import seoPng from '../assets/seo.png'
import { SiWhatsapp } from "react-icons/si"
import Services from "../components/Services"
import message from '../assets/message.png'
import message2 from '../assets/message-2.png'
import logo from '../assets/logo_2.png'
import googleLogo from '../assets/google-logo.png'
import Project from "../components/Project"
import { featuresComponents, servicesComponent, projects, blogs, brands, navItems, heads } from '../data.ts'
import { FaPhoneVolume } from 'react-icons/fa';
import CallbackForm from "../components/CallbackForm.tsx"
import customer1 from '../assets/customer1.png'
const Home = () => {

    return (
        <>
            <div className="home-page">
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
                </div>
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
                            projects.map((e) => {
                                return (
                                    <Project e={e} />
                                )
                            })
                        }
                    </div>
                    <button><span><FaArrowRight /></span>Other Projects</button>
                </section>
                <section className="story-section">
                    <div className="story-container">
                        <div className="left-container">Real success stories and <br /> unbiased review <br />
                            of our clients!</div>
                        <div className="right-container">
                            <img src={customer1} alt="" />
                            <p>SMAC Digital gave our interior designing business exposure to the world of the internet. They gave us steady growth by making our website greatly influential. We really appreciate what you did.</p>
                            <h1>Casa Interno</h1>
                        </div>
                    </div>
                </section>
                <section className="blog-section">
                    <span>Blog Post</span>
                    <h1>Stay Updated With Digital Marketing News Which Could <br />
                        Drive Your Growth In The Future
                    </h1>
                    <div className="blog-container">
                        {
                            blogs.map((e) => {
                                return (
                                    <div className="blog-card">
                                        <img src={e.img} />
                                        <div className="description">
                                            <h1>{e.title}</h1>
                                            <p>{e.desc}</p>
                                            <h3>{e.date}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="brand-section">
                    <h1>Brands that have trusted us</h1>
                    <div className="brands-container">
                        {
                            brands.map((e) => {
                                return <img src={e} alt="" />
                            })
                        }
                    </div>
                    <div className="make-a-call-section">
                        {/* <img src={makeacall} alt="make a call bg" />     */}
                        <div>
                            <h1>We work with you to improve your <span>business's</span> bottom line and generate <br />
                                positive ROI so that you can scale it up.
                            </h1>
                            <a href="tel:+91 9079610936"><button>Make A Call Now</button></a>
                        </div>
                    </div>
                </section>
                <footer>
                    <section className="footer-section">
                        <div className="social-meadia">
                            <img src={logo} alt="SMAC" />
                            <div className="social-icons">
                                <a href="https://www.facebook.com/smacdigi" target="_blank" className="icons-container">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.linkedin.com/company/smac-digital-pvt-ltd" target="_blank" className="icons-container">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://twitter.com/DigitalSmac" target="_blank" className="icons-container">
                                    <FaTwitter />
                                </a>
                                <a href="https://www.instagram.com/smacdigital/" target="_blank" className="icons-container">
                                    <FaInstagram />
                                </a>
                            </div>
                            <img src={googleLogo} alt="" />
                        </div>
                        <div className="services">
                            <h1>Services</h1>
                            {
                                servicesComponent.map(e => (
                                    <p>{e.title}</p>
                                ))
                            }
                        </div>
                        <div className="quick-links">
                            <h1>Quick Links</h1>
                            {
                                navItems.slice(1).map(e =>
                                    <p>{e}</p>
                                )
                            }
                        </div>
                        <div className="blog-post">
                            <h1>Blog Post</h1>
                            {
                                blogs.map(e =>
                                    <div className="blog-post">
                                        <p>{e.title}</p>
                                        <p className="date">{e.date}</p>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                    <section className="bottom-footer">
                        {
                            heads.map(e =>
                                <div className="heads-card">
                                    <img src={e.img} alt={e.name} />
                                    <div>
                                        <h1>{e.office}</h1>
                                        <h4>{e.name}</h4>
                                        <i>{e.post}</i>
                                        <p style={{ padding: " 1rem 0" }}>{e.address}</p>
                                        <a style={{ color: "#ffffff" }} href={`tel:${e.mobile}`}><FaPhoneVolume />{e.mobile}</a>
                                        <div>{e.email}</div>
                                    </div>
                                </div>
                            )
                        }
                    </section>
                    <p style={{ fontSize: ".9rem" }}>Copyright 2023, All Right Reserved SMAC Digital</p>
                </footer>
                <div className="whatsapp-sticky-div">
                    <a href="https://wa.me/message/FIXBPM3JZUSQJ1" className="whatsapp-sticky-button"><SiWhatsapp /></a>
                </div>
            </div>

        </>
    )
}

export default Home
