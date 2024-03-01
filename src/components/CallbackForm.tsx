import { FaHubspot } from "react-icons/fa"

const CallbackForm = () => {
    return (
        <section className="form-section">
            <div className="callback-form">
                <div>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" name="phone" id="phone" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <button>Reaquest A Callback</button>
                <div>
                    <a href="https://app.hubspot.com/signup-hubspot/marketing?uuid=ec878439-e44e-44d1-a139-1bf9358de291&utm_medium=virality&utm_campaign=hubspot-forms-virality&intent=marketingFreeForms&hubs_id=forms-branding-control&hubs_source=www.smacdigital.com&step=landing_page" target="_blank"><FaHubspot /><p>
                        <span>Create your own free forms </span>to  generate leads from your website.
                    </p>
                    </a></div>
            </div>
        </section>
    )
}

export default CallbackForm
