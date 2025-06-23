"use client"
import React from 'react'
import CountUp from 'react-countup';
// import DrumBg from "/"
import Image from 'next/image';
export default function StatsCard() {
    return (
        <main className='flex justify-center items-center'>
            <div className='relative flex items-center justify-center gap-20 w-full h-[500px]'>
                <Image
                    src="/DrumBg.jpg"
                    fill
                    alt='Drum-Background'
                    className='absolute left-0 top-0 w-full h-auto -z-20 object-cover rounded-lg'
                />
                <div className="bg-slate-500/50 rounded-lg backdrop-blur text-center h-52 w-60 border border-slate-500 flex flex-col items-center justify-center gap-5">
                    <h2 className="text-8xl text-white font-semibold">
                        <CountUp start={0} end={400} duration={2.5} />
                    </h2>
                    <p className="text-sm text-white">Tickets Sold</p>
                </div>
                <div className="bg-slate-500/50 rounded-lg backdrop-blur text-center h-52 w-60 border border-slate-500 flex flex-col items-center justify-center gap-5">
                    <h2 className="text-8xl text-white font-semibold">
                        <CountUp start={0} end={680} duration={2.5} />
                    </h2>
                    <p className="text-sm text-white">Happy Customers</p>
                </div>
                <div className="bg-slate-500/50 rounded-lg backdrop-blur text-center h-52 w-60 border border-slate-500 flex flex-col items-center justify-center gap-5">
                    <h2 className="text-8xl text-white font-semibold">
                        <CountUp start={0} end={1200} duration={2.5} />
                    </h2>
                    <p className="text-sm text-white">Sold-Out Events</p>
                </div>
            </div>
        </main>
    );
}
