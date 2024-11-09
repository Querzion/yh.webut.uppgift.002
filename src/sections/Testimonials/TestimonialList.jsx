import React, { useState, useEffect } from 'react'
import TestimonialItem from './TestimonialItem'

const TestimonialList = () => {
    const [testimonialItems, setTestimonialItems] = useState([])

    const fetchData = async () => {
        const res = await fetch("https://win24-assignment.azurewebsites.net/api/testimonials")
        const data = await res.json()

        setTestimonialItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="reviews">
            {
                testimonialItems.map((item) => (<TestimonialItem key={item.id} item={item} />))
            }
        </div>
    )
}

export default TestimonialList