import React from 'react'
import StatsCard from './StatsCard'

export default function Goals() {
  return (
    <main className="px-5 flex flex-col gap-16">
      <div className='flex justify-between items-center gap-48'>
        <h1 className='text-[60px] font-bold w-[50%]'>Turning Events Into Experiences</h1>
        <aside className='flex-1'>
          <p className='text-lg text-justify leading-relaxed text-[#111827]/80'>
            At <strong>Book My Event</strong>, our mission is to transform how people experience events by making planning and discovery not just easy but inspiring. We believe events are more than just dates and venues; they’re opportunities to create lasting memories, build community, and celebrate creativity. Whether it's a small local gathering or a large-scale cultural festival, our goal is to provide an intuitive platform that empowers organizers to bring their ideas to life and helps attendees find experiences that truly resonate. By combining simplicity, innovation, and inclusivity, we strive to make every event, big or small, impactful and unforgettable.
          </p>
        </aside>
      </div>
      <StatsCard />
    </main>
  )
}

