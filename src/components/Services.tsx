import services1 from '../assets/services1.png'
import services2 from '../assets/services2.png'
import services3 from '../assets/services3.png'
import services4 from '../assets/services4.png'
import services5 from '../assets/services5.png'
import services6 from '../assets/services6.png'
import services7 from '../assets/services7.png'
import services8 from '../assets/services8.png'
import services9 from '../assets/services9.png'

const Services = () => {
    const servicesComponent: { title: string, desc: string, img: string }[] = [
        {
            title: 'Marketing Automation',
            desc: 'Marketing Automation In digital marketing, much software is used for repetitive marketing functions like email marketing, social media marketing, etc. Thes...',
            img: services1
        },
        {
            title: 'Inbound Marketing',
            desc: 'Inbound marketing is a process where people are brought in instead of going out to search for customers. It’s a process to attract, engage, and delight cust...',
            img: services2
        },
        {
            title: 'Social Media Marketing',
            desc: 'Social media marketing is the use of social media platforms in a manner so that audiences are created for brand awareness; increase in sales, and to boost web tra...',
            img: services3
        },
        {
            title: 'Search Engine Optimization',
            desc: 'Search engine optimization SEO is the collection of tools and best practices that will help a website to rank higher in the search engine. A proper SEO collectio...',
            img: services4
        },
        {
            title: 'Video Marketing',
            desc: 'Video marketing is a simple marketing tool where brands make videos for the product and the same is promoted in the social media channels. It helps to promote you...',
            img: services5
        },
        {
            title: 'Website Design And Development',
            desc: 'Website Design & Development “Web design is not just about creating pretty layouts. It’s about understanding the marketing challenge behind you...',
            img: services6
        },
        {
            title: 'Mobile Application Development',
            desc: 'Mobile Application development “The future of mobile is the future of online. It is how people access online content now.” David Murphy, Founder, a...',
            img: services7
        },
        {
            title: 'Digital Media Planning',
            desc: 'Digital Media Plan So now you know the importance of your online presence and you hired a digital marketing agency to help your business grow. And the digital...',
            img: services8
        },
        {
            title: 'Influencer Marketing',
            desc: 'Influencer Marketing “People do not buy goods and services. They buy relations, stories, and magic.” -Seth Godin What is influencer marketing?...',
            img: services9
        }
    ]
    return (
        <>
            {
                servicesComponent.map((e) => {
                    return (
                        <div className='service-card'>
                            <div className="img-div">
                                <img src={e.img} alt="" />
                            </div>
                            <h1>{e.title}</h1>
                            <p>{e.desc}</p>
                            <a href="#">Read More</a>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Services
