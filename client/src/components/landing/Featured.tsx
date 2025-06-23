import { ArrowRight, CalendarDays, Clock, MapPin } from 'lucide-react'
import React from 'react'
import Marquee from 'react-fast-marquee'


// import gloryNight from ''
// import Fawaskid from ''
// import HPAC from ''
// import IETC from ''
// import Lasmocol from ''
// import EkoBoys from ''

const features = [
    {
        "id": 1,
        "title": "Lagos Tech Expo 2025",
        "description": "A gathering of innovators, startups, and tech enthusiasts to showcase the future of technology in Africa.",
        "date": "2025-08-15",
        "time": "10:00 AM",
        "location": "Landmark Centre, Lagos",
        "category": "Technology",
        "backImg": "/images/events/Apake Rock Party.jpg",
        "isFree": true,
        "price": ""
    },
    {
        "id": 2,
        "title": "Lagos Tech Expo 2025",
        "description": "A gathering of innovators, startups, and tech enthusiasts to showcase the future of technology in Africa.",
        "date": "2025-08-15",
        "time": "10:00 AM",
        "location": "Landmark Centre, Lagos",
        "category": "Technology",
        "backImg": "/images/events/Chris belcky glory night.jpg",
        "isFree": true,
        "price": "",
    },
    {
        "id": 3,
        "title": "Lagos Tech Expo 2025",
        "description": "A gathering of innovators, startups, and tech enthusiasts to showcase the future of technology in Africa.",
        "date": "2025-08-15",
        "time": "10:00 AM",
        "location": "Landmark Centre, Lagos",
        "category": "Technology",
        "backImg": "/images/events/Fawaskid_Ase_Concert.jpg",
        "isFree": false,
        "price": "6000",
    },
    {
        "id": 4,
        "title": "Lagos Tech Expo 2025",
        "description": "A gathering of innovators, startups, and tech enthusiasts to showcase the future of technology in Africa.",
        "date": "2025-08-15",
        "time": "10:00 AM",
        "location": "Landmark Centre, Lagos",
        "category": "Technology",
        "backImg": "/images/events/Human Powered Airplane Conference.jpg",
        "isFree": true,
        "price": "",
    },
    {
        "id": 5,
        "title": "Lagos Tech Expo 2025",
        "description": "A gathering of innovators, startups, and tech enthusiasts to showcase the future of technology in Africa.",
        "date": "2025-08-15",
        "time": "10:00 AM",
        "location": "Landmark Centre, Lagos",
        "category": "Technology",
        "backImg": "/images/events/Imagine Every Thing Concert.jpg",
        "isFree": false,
        "price": "2500",
    },
    {
        "id": 6,
        "title": "Lagos Tech Expo 2025",
        "description": "A gathering of innovators, startups, and tech enthusiasts to showcase the future of technology in Africa.",
        "date": "2025-08-15",
        "time": "10:00 AM",
        "location": "Landmark Centre, Lagos",
        "category": "Technology",
        "backImg": "/images/events/LASMOCOL get together.jpg",
        "isFree": true,
        "price": "",
    },
    {
        "id": 7,
        "title": "Lagos Tech Expo 2025",
        "description": "A gathering of innovators, startups, and tech enthusiasts to showcase the future of technology in Africa.",
        "date": "2025-08-15",
        "time": "10:00 AM",
        "location": "Landmark Centre, Lagos",
        "category": "Technology",
        "backImg": "/images/events/Swimming_Party.jpg",
        "isFree": false,
        "price": "10000",
    },
]

export default function Featured() {
    return (
        <>
            <div>
                <h1 className='text-2xl font-semibold'>Featured Events</h1>
                <p className=''>Discover exciting events handpicked just for you.</p>
            </div>

            <Marquee
                speed={50}
                gradient
                gradientWidth={20}
                gradientColor="#f9fafba9"
                className='min-h-[480px] h-full'
            >
                {features.map((eventCard, Id) => (
                    <div key={Id} className="card bg-base-100 w-96 shadow-sm mx-4 hover:shadow-md rounded-md min-h-[450px]">
                        <figure className='relative h-[250px]'>
                            <img
                                src={eventCard.backImg}
                                className='object-cover h-full w-full'
                            />
                        </figure>
                        <hr />
                        <div className="card-body flex flex-col gap-2 p-2 min-h-[200px]">
                            <div>
                                <h2 className="card-title flex items-center justify-between w-full font-semibold">
                                    {eventCard.title}
                                    {eventCard.isFree ? (<span className="bg-[#130f54]/50 font-semibold rounded-sm p-1 px-2">Free</span>) : (<span className="bg-[#FBBF24]/50 font-semibold rounded-sm p-1 px-2">Paid</span>)}
                                </h2>
                                <p className="">{eventCard.category}</p>
                            </div>
                            <p  className="flex items-center gap-2"><CalendarDays size={20}/>{eventCard.date}</p>
                            <p  className="flex items-center gap-2"><Clock size={20}/>{eventCard.time}</p>
                            <p  className="flex items-center gap-2"><MapPin size={20}/>{eventCard.location}</p>
                            <hr/>
                            <div className="flex justify-between items-center">
                                {eventCard.price === "" ? (<p className="font-semibold">For Free</p>) : (<p className="font-semibold">Price: ${eventCard.price}</p>)}
                                <button className='py-2 text-[#FBBF24] rounded-lg cursor-pointer flex items-center justify-between gap-2.5'>Book Event <ArrowRight/></button>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </>
    )
}

