import React, {useContext} from 'react'
import { ValidationContext } from '../../contexts/ValidationProvider'

import imageNotification from "../../assets/images/mainpage-light/subscribe/notification.svg"
import SubscribeForm from '../../components/Forms/SubscribeForm'

const Subscribe = () => {
    const { submitted } = useContext(ValidationContext)

    if (submitted) {
        return (
            <section id="subscribe"  aria-label="subscribe section">

                <div className="container center">
                    
                    <h2 className="subscribed h3">Thank you for subscribing to our newsletter!</h2>

                </div>

            </section>
        )
    }
    

    return (
        <section id="subscribe"  aria-label="subscribe section">

            <div className="container center sub-box">
                
                <div className="sub-info-box">
                    <img id="sub-image" src={imageNotification} alt="image 'notification'" />
                    <h2 id="img-text-md">Subscribe to our newsletter <span id="d-ext">to stay informed about the latest updates.</span></h2>                                    
                </div>
                
                <div className="sub-input-box">

                    <div className="sub-border">

                        <SubscribeForm />
                        
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Subscribe
