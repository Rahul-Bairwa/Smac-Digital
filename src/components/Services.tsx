import {servicesComponent} from '../data.ts'
const Services = () => {
    
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
