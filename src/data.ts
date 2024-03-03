import { BsMegaphone } from "react-icons/bs"
import { PiRocket } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import { TbHeartShare } from "react-icons/tb";
import { IconType } from "react-icons"
import services1 from './assets/services1.png'
import services2 from './assets/services2.png'
import services3 from './assets/services3.png'
import services4 from './assets/services4.png'
import services5 from './assets/services5.png'
import services6 from './assets/services6.png'
import services7 from './assets/services7.png'
import services8 from './assets/services8.png'
import services9 from './assets/services9.png'
import project1 from './assets/project1.jpg'
import project2 from './assets/project2.jpg'
import project3 from './assets/project3.jpg'
import blog1 from './assets/blog1.jpg'
import blog2 from './assets/blog2.jpg'
import blog3 from './assets/blog3.jpg'
import brand1 from './assets/brand1.png'
import brand2 from './assets/brand2.png'
import brand3 from './assets/brand3.png'
import brand4 from './assets/brand4.png'
import brand5 from './assets/brand5.png'
import brand6 from './assets/brand6.png'
import brand7 from './assets/brand7.png'
import brand8 from './assets/brand8.png'
import brand9 from './assets/brand9.png'
import brand10 from './assets/brand10.png'
import brand11 from './assets/brand11.png'
import brand12 from './assets/brand12.png'
import brand13 from './assets/brand13.png'
import brand14 from './assets/brand14.png'
import brand15 from './assets/brand15.png'
import brand16 from './assets/brand16.png'
import brand17 from './assets/brand17.png'
import rahul from './assets/rahul-swami.png'
import jitendra from './assets/jitendra-swami.png'
import deep from './assets/deep-chakravarty.png'
import customer from './assets/customer.png'
import customer1 from './assets/customer1.png'
import customer2 from './assets/customer2.png'

export const navItems: string[] = ["Home", "About Us", "Services", "Portfolio", "Testimonials", "Blog", "Contact Us", "Career"];

export const servicesComponent: { title: string, desc: string, img: string }[] = [
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
export const featuresComponents: { title: string, desc: string, icons: IconType }[] = [
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
export const projects: { title: string, img: string }[] = [
    { title: 'Stone Hub India', img: project1 },
    { title: 'Intex Technologies', img: project2 },
    { title: 'OohMexicano', img: project3 }
]
export const blogs: { title: string, img: string, desc: string, date: string }[] = [
    {
        title: 'Gen Z Marketing: A Guide to Reaching Out to Zoomers',
        img: blog1,
        desc: "Some marketing experts say that Gen Z is a difficult nut to crack. Well, in our opinion, it is not difficult, but there is a different way to crack it. If relative processes and strategies are followed, they can take your brand to greater heights....",
        date: '20 Feb 2024'
    },
    {
        title: 'Want to make your brand stand out in marketing and advertising world?',
        img: blog2,
        desc: "There is a proverb by Matshona Dhilwayo: “Do what no one else can do, and you will become what no one else can become. This is the exact essence if you want to stand out in the marketing and advertising worlds. The marketing and ad worlds...",
        date: '14 Feb 2024'
    },
    {
        title: 'The Ethics of Digital Marketing and their Repercussions',
        img: blog3,
        desc: "As you know, digital marketing is a way of marketing where marketing is done online through websites, social media, blogs, and advertising. As digital marketing is the way to go forward as it provides the advantages of ease of doing business, brand buildi...",
        date: '09 Feb 2024'
    }
]
export const brands: string[] = [
    brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15, brand16, brand17
]

export const heads:{img:string,office:string,name:string,post:string,address:string,mobile:string,email:string}[]=[
    {
        img:rahul,
        office:'Pune Office',
        name:'Rahul Swami',
        post:'For Business Enquiries',
        address:'4th Floor, Krishna Avenue Above Dominos Opposite D MART Near Sadanand, Hotel Baner Road, Baner, balewadi, bavdhan,Pashan, Pune, Maharashtra 411045.',
        mobile: '+91 95827 92638',
        email:' rahul@smacdigial.com'
    },
    {
        img:jitendra,
        office:'Jaipur Office',
        name:'Jitendra Swami',
        post:'For Business Enquiries',
        address:'Anukampa Point, 116/230, 2nd Floor, Shipra Path, Mansarovar,Jaipur, Rajasthan 302020',
        mobile: ' +91 9829069519',
        email:' Jitendra@smacdigial.com'
    },
    {
        img:deep,
        office:'Kolkata Office',
        name:'Deep Chakravarty',
        post:'For Business Enquiries',
        address:'Hari Kripa, 422 Satyajit Kanan Rd, Barakhola, Mukundapur,Kolkata 700099',
        mobile: ' +91 9831132254',
        email:' deep@smacdigital.com'
    }
]

export const clients:{brand:string,img:string,desc:string}[]=[
    {
        brand:"Casa Interno",
        img:customer,
        desc:"SMAC Digital gave our interior designing business exposure to the world of the internet. They gave us steady growth by making our website greatly influential. We really appreciate what you did."
    },
    {
        brand:"GK Ratnam",
        img:customer1,
        desc:"Online presence is a big deal today and GK Ratnam thanks SMAC Digital for it. They made our website as elegant, classy and royal as our collection is. Hope this companionship goes forever."
    },
    {
        brand:"Livpure",
        img:customer2,
        desc:"Out of many options they have, people reach out to us for our products. All because of the expertise of SMAC Digital. They have designed our website so well and digital marketing was done perfectly for the right audience. Commendable job done by the team."
    }
]