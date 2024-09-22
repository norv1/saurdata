"use client"
import { ProfileType } from "@/types/profileType"
import { Circle, LogOut, Moon, StarIcon } from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface props {
  click: any
  user: ProfileType
  opened: boolean
}

export function NavSigned({ user, click, opened }: props) {
  const [open, setOpen] = useState(false)
  const [Lights, setLights] = useState("")
  const doc = document.documentElement.classList
  const toggleTheme = () => {
    doc.toggle("dark")
    doc.value.includes("dark") ? setLights("translate-x-3") : setLights("translate-x-0")
  }
  useEffect(() => {
    doc.value.includes("dark") ? setLights("translate-x-3") : setLights("translate-x-0")
    setOpen(() => opened)
  }, [])

  return (
    <div className="fixed z-[10] select-none ">
      <div
        className={`fixed z-[20] w-fit top-[56px] right-4 bg-zinc-800 text-white text-sm rounded-xl transition-[max-height]
           duration-1000 overflow-hidden shadow-md shadow-black ${open ? "max-h-full" : "max-h-0"}`}
      >
        {user.image && (
          <div className="grid grid-cols-1 my-2">
            <Link
              href={"/profile"}
              className="flex px-4 py-3 items-center space-x-2 hover:bg-zinc-700/50 ease-in-out duration-500"
            >
              <img src={user.image} className="h-12 w-12 rounded-full" />
              <div className="grid  grid-rows-2 text-justify items-center">
                <div className="flex space-x-1 items-center">
                  <p>{user.name}</p>
                  {user.role === "ADMIN" && (
                    <StarIcon className="text-[#ffb514] size-4 fill-current animate-pulse" />
                  )}
                </div>
                <p className="text-xs text-zinc-400 ">View Profile</p>
              </div>
            </Link>

            <div
              onClick={toggleTheme}
              className="flex relative items-center space-x-[20px] py-3 px-[28px] hover:bg-zinc-700/50 ease-in-out duration-500 cursor-pointer"
            >
              <Moon className="size-6" />
              <p>Dark Mode</p>
              <div
                className={` flex h-6 w-9 rounded-2xl transition-colors ${
                  Lights === "translate-x-3" ? "bg-teal-500" : "bg-zinc-400 "
                } `}
              >
                <Circle className={`size-6 fill-current duration-500 ${Lights} `} />
              </div>
            </div>

            <button
              onClick={() => signOut()}
              type="submit"
              className="flex w-full items-center space-x-[20px] py-3 px-[28px] hover:bg-zinc-700/50 ease-in-out duration-500"
            >
              <LogOut />
              <p>Log Out</p>
            </button>
          </div>
        )}
      </div>
      <div className="fixed w-full h-full top-0 left-0" onClick={click}></div>
    </div>
  )
}
