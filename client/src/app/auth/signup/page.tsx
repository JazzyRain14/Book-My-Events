'use client'
import React, { useState } from 'react'
import axios from "axios"
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const content = (
  <h2 className=" text-[200px] uncopiedText flex items-center text-gray-300/25">Turning Events Into Experiences <Dot size={200} /></h2>
)

export default function SignUp() {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [role, setRole] = useState("attendee")

  const handleRoleChange = (valueString: string) => {
    setRole(valueString);
    console.log("Selected Role (string):", valueString);
    // If you needed a boolean from this, you'd convert here:
    // const isCreator = valueString === 'creator';
    // console.log("Is Creator (boolean):", isCreator);
  };


  const handleSubmit = async (event:any) => {
    event.preventDefault()
    const UserDetails = {
      userName,
      userEmail,
      userPassword,
      role
    }
      
    const userdb = "http://localhost:5000/auth/signup/"


    const PostUsers = await axios.post(userdb, UserDetails)

    console.log(PostUsers.data.message)
    
  }

  return (
    <main>
      <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
        <div className="w-full h-full absolute top-0 flex justify-center items-center left-0 bg-[#FBBF24]/20 z-50">
        </div>
        <Image
          src="/rachel-coyne-U7HLzMO4SIY-unsplash.jpg"
          alt="Picture of the author"
          fill
          className="object-cover"
        />
        <div className='absolute w-full flex flex-col justify-center items-center h-full z-[200]'>
          <form
            action=""
            className='w-[500px] flex flex-col gap-3'
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />

            <RadioGroup
              defaultValue="option-one"
              value={role}
              onValueChange={handleRoleChange}
            >
              <Label htmlFor="option-one">Are you either a ?</Label>
              <div className='flex justify-between items-center w-full'>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="attendee"
                    id="event-attendee"
                  />
                  <Label htmlFor="option-one">Event Attendee</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="creator"
                    id="event-creator" />
                  <Label htmlFor="option-two">Event Creator</Label>
                </div>
              </div>
            </RadioGroup>

            <button
              type='submit'
              className='px-10 py-2 text-[#111827] bg-[#FBBF24] rounded-lg cursor-pointer'>Sign Up</button>
          </form>
        </div>
      </div>
    </main>
  )
}
