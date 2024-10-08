"use client"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"

export function Alert({ text, close }: { text: any; close?: any }) {
  const [open, setOpen] = useState(false)

  setTimeout(() => setOpen(false), 3000)

  useEffect(() => {
    setOpen(() => true)
    setTimeout(close, 4000)
  }, [])

  return (
    <div
      className={`fixed z-[50] w-[400px] bg-zinc-800 rounded-xl top-[62px] right-2 ease-in-out text-center
             shadow-md  shadow-black/40 dark:shadow-black overflow-hidden transition-all duration-1000 ${
               open ? "max-h-full" : "max-h-0"
             }`}
    >
      <div className="px-4 py-3 flex space-x-2 items-center">
        <Check className="size-5" />
        <p>{text}</p>
      </div>
    </div>
  )
}
