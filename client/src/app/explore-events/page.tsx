"use client";


import events from "./events.json";
import { ArrowRight, CalendarDays, Clock, MapPin } from 'lucide-react'


export default function ExploreEvents() {
  

  return (
    <main className="px-5 flex flex-col gap-4">
      <h1 className="text-3xl font-bold ml-2.5">Explore Events</h1>
      <hr />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="card bg-base-100 w-96 shadow-sm mx-4 hover:shadow-md rounded-md min-h-[450px]">
            <figure className='relative h-[250px]'>
              <img
                src={event.backImg}
                className='object-cover h-full w-full'
              />
            </figure>
            <hr />
            <div className="card-body flex flex-col gap-2 p-2 min-h-[200px]">
              <div>
                <h2 className="card-title flex items-center justify-between w-full font-semibold">
                  {event.title}
                  {event.isFree ? (<span className="bg-[#130f54]/50 font-semibold rounded-sm p-1 px-2">Free</span>) : (<span className="bg-[#FBBF24]/50 font-semibold rounded-sm p-1 px-2">Paid</span>)}
                </h2>
                <p className="">{event.category}</p>
              </div>
              <p className="flex items-center gap-2"><CalendarDays size={20} />{event.date}</p>
              <p className="flex items-center gap-2"><Clock size={20} />{event.time}</p>
              <p className="flex items-center gap-2"><MapPin size={20} />{event.location}</p>
              <hr />
              <div className="flex justify-between items-center">
                {event.price === "" ? (<p className="font-semibold">For Free</p>) : (<p className="font-semibold">Price: {event.price}</p>)}
                <button className='py-2 text-[#FBBF24] rounded-lg cursor-pointer flex items-center justify-between gap-2.5'>Book Event <ArrowRight /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
