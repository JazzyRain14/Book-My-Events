'use client'
import React, { useState } from 'react'
import axios from "axios"
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from 'next/navigation';

const content = (
  <h2 className=" text-[200px] uncopiedText flex items-center text-gray-300/25">Turning Events Into Experiences <Dot size={200} /></h2>
)

export default function Login() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null);


  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const userdb = "http://localhost:5000/auth/login/"

      const response = await axios.post(userdb, {
        userEmail,
        userPassword,
      })

      if (response.status === 200) {
        console.log('login succesful!');
        console.log(response.data.user);
        

        localStorage.setItem('authToken', response.data.token)
        localStorage.setItem('userInfo', JSON.stringify(response.data.user))

        const userRole = response.data.user.role

        if (userRole === 'attendee') {
          router.push('/event-attendee')
        } else if (userRole === 'creator') {
          router.push('/event-creator')
        } else {
          router.push('/');
        }
      }

    } catch (err: any) {
      console.error('Login error:', err);
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'An error occurred.');
      } else {
        setError('Network error or unexpected issue.');
      }
    } finally {
      setLoading(false);
    }
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
              type="email"
              placeholder="Email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />

            <button
              type='submit'
              className='px-10 py-2 text-[#111827] bg-[#FBBF24] rounded-lg cursor-pointer'>Sign Up</button>
          </form>
        </div>
      </div>
    </main>
  )
}
