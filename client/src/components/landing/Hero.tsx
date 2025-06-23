import React from 'react'

import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const content = (
    <h2 className=" text-[200px] uncopiedText flex items-center text-gray-300/25">Turning Events Into Experiences <Dot size={200} /></h2>
)
export default function Hero() {
    return (
        <>
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
                <div className="w-full h-full absolute top-0 flex justify-center items-center left-0 bg-[#FBBF24]/30 z-50">

                    <div className="w-[600px] h-full bgGradient bg-[#FBBF24]" style={{ background: "radial-gradient(circle,rgba(251, 191, 36, 0.5) 0%, rgba(251, 191, 36, 0) 50%, rgba(251, 191, 36, 0) 100%)" }}></div>
                </div>
                <div className="absolute w-full h-full top-0 left-0 z-[100] flex justify-center items-center font-bold">
                    <Marquee
                        speed={200}
                        gradient
                        gradientWidth={20}
                        gradientColor="#ba9e56"
                        // className="flex items-center justify-between"
                        className="relative whitespace-nowrap overflow-hidden w-full"
                    >
                        {content}
                    </Marquee>
                </div>
                <Image
                    src="/rachel-coyne-U7HLzMO4SIY-unsplash.jpg"
                    alt="Picture of the author"
                    fill
                    className="object-cover"
                />
            </div>
        </>
    )
}
