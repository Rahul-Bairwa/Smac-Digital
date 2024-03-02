import project1 from './assets/project1.jpg'
import project2 from './assets/project2.jpg'
import project3 from './assets/project3.jpg'
import blog1 from './assets/blog1.jpg'
import blog2 from './assets/blog2.jpg'
import blog3 from './assets/blog3.jpg'



export const projects: { title: string, img: string }[] = [
    { title: 'Stone Hub India', img: project1 },
    { title: 'Intex Technologies', img: project2 },
    { title: 'OohMexicano', img: project3 }
]
export const blogs: { title: string, img: string, desc: string ,date:string}[] = [
    {
        title: 'Gen Z Marketing: A Guide to Reaching Out to Zoomers',
        img:blog1,
        desc:"Some marketing experts say that Gen Z is a difficult nut to crack. Well, in our opinion, it is not difficult, but there is a different way to crack it. If relative processes and strategies are followed, they can take your brand to greater heights....",
        date:'20 Feb 2024'
    },
    {
        title: 'Want to make your brand stand out in marketing and advertising world?',
        img:blog2,
        desc:"There is a proverb by Matshona Dhilwayo: “Do what no one else can do, and you will become what no one else can become. This is the exact essence if you want to stand out in the marketing and advertising worlds. The marketing and ad worlds...",
        date:'14 Feb 2024'
    },
    {
        title: 'The Ethics of Digital Marketing and their Repercussions',
        img:blog3,
        desc:"As you know, digital marketing is a way of marketing where marketing is done online through websites, social media, blogs, and advertising. As digital marketing is the way to go forward as it provides the advantages of ease of doing business, brand buildi...",
        date:'09 Feb 2024'
    }
]
