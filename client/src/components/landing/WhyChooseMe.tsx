import { Binoculars, BadgePlus, Goal, TabletSmartphone, Shield, MessageCircle } from 'lucide-react'
import React from 'react'

const features = [
    {
        "id": 1,
        "title": "Easy Event Discovery",
        "description": "Find exciting events around you using location filters, categories, and search.",
        "icon": Binoculars,
    },
    {
        "id": 2,
        "title": "Quick Event Creation",
        "description": "Create and publish your event in just a few steps. No tech skills needed.",
        "icon": BadgePlus
    },
    {
        "id": 3,
        "title": "Personalized Suggestions",
        "description": "Get event recommendations based on your interests and past activity.",
        "icon": Goal
    },
    {
        "id": 4,
        "title": "Mobile-Friendly Platform",
        "description": "Book, browse, and manage events easily on any device.",
        "icon": TabletSmartphone
    },
    {
        "id": 5,
        "title": "Secure Bookings",
        "description": "Enjoy safe and fast bookings with trusted payment gateways.",
        "icon": Shield
    },
    {
        "id": 6,
        "title": "Community & Reviews",
        "description": "Read reviews and connect with others who’ve attended the events.",
        "icon": MessageCircle,
    }
]

export default function WhyChooseMe() {
    return (
        <>
            <h1 className='text-2xl font-semibold'>Why Choose Book My Event?</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {features.map((card) => {
                    const Icon = card.icon;
                    return (
                        <div key={card.id} className="card bg-base-100 hover:shadow-md p-8 shadow-sm rounded-md">
                            <div className="card-body">
                                <Icon className="w-8 h-8 text-primary mb-3" />
                                <h2 className="card-title text-lg font-semibold">{card.title}</h2>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
