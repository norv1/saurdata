"use client"
import { Logo4 } from "@/components/global/Logo"
import { Menu } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoginButton } from "./LoginButton"
import { NavMenu } from "./NavMenu"
import { NavNotSigned } from "./NavNotSigned"
import { NavSearch } from "./NavSearch"
import { Profile } from "./Profile"

export function NavBar() {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const [notSigned, setNotSigned] = useState(false)
  const { data: session, status } = useSession()

  return (
    <div
      className="sticky top-0 z-50 grid grid-cols-4 gap-3 px-4 bg-white size-xl text-white justify-center text-center items-center
      shadow-md shadow-black hover:duration-300 duration-300 dark:bg-[#111316] text-xl w-[100%] h-[52px] "
    >
      <div className="flex items-center space-x-4 ">
        <button className="p-2 hover:bg-zinc-700/50 rounded-full ease-in-out duration-300">
          <Menu onClick={() => setMenu(!menu)} />
        </button>
        <button className="flex items-center text-4xl text-white" onClick={() => router.push("/")}>
          <div className="space-x-2 flex items-center">
            <Logo4 classN={"h-9 w-9 text-teal-500 fill-current"} />
            <div className="">
              <p className="text-2xl font-bold ">saurdata</p>
            </div>
          </div>
        </button>
      </div>
      <div className="col-span-2">
        <NavSearch />
      </div>

      {status === "authenticated" && session.user !== undefined ? (
        <Profile />
      ) : (
        <LoginButton click={() => setNotSigned(() => !notSigned)} />
      )}

      {menu === true && <NavMenu click={() => setMenu(() => false)} opened={true} />}
      {notSigned === true && <NavNotSigned click={() => setNotSigned(() => false)} />}
    </div>
  )
}
