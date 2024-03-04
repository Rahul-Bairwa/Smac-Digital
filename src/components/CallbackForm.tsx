import { useState, ChangeEvent, useRef } from "react"
import { FaHubspot } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
const CallbackForm = () => {
    const formVisibility = useRef<HTMLButtonElement>(null);
    const [userData, setUserData] = useState<userInput>({
        "name": "",
        "mobile": "",
        "email": ""
    })
    const eRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    interface userInput {
        name: string,
        mobile: string,
        email: string
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    const toastOptions = {
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }
    const verify = () => {
        let valid = true
        if (userData.name.length === 0) {
            toast.error("name is required", toastOptions)
            valid = false
        }
        else if (userData.name.length < 3) {
            toast.error("name must be greater than 3 charactor", toastOptions)
            valid = false
        }
        if (!eRegex.test(userData.email)) {
            toast.error("enter valid email", toastOptions)
            valid = false
        }
        if (userData.mobile.length !== 10) {
            toast.error("mobile number must be 10 digits", toastOptions)
            valid = false
        }
        return valid
    }
    console.log(userData.mobile.length)
    const handleSubmit = async () => {
        if (verify()) {
            try {
                const res = await fetch('http://localhost:3330/make_request', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });
                await res.json();
                setUserData({"name": "","mobile": "","email": ""})
                alert(`Your Request Successfully Submited`)
                if(formVisibility.current){
                    formVisibility.current.style.display="none"
                }
            } catch (error) {
                console.warn("please run your backend file")
                console.error(error)
            }
        }
    }
    return (
        <section ref={formVisibility} className="form-section">
            <div className="callback-form">
                <div>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name" id="name" value={userData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" name="mobile" id="mobile" value={userData.mobile} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={userData.email} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>Reaquest A Callback</button>
                <div>
                    <a href="https://app.hubspot.com/signup-hubspot/marketing?uuid=ec878439-e44e-44d1-a139-1bf9358de291&utm_medium=virality&utm_campaign=hubspot-forms-virality&intent=marketingFreeForms&hubs_id=forms-branding-control&hubs_source=www.smacdigital.com&step=landing_page" target="_blank"><FaHubspot /><p>
                        <span>Create your own free forms </span>to  generate leads from your website.
                    </p>
                    </a></div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default CallbackForm
