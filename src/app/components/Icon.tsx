import { LucideIcon } from "lucide-react"
import Link from "next/link"

export interface IconProps {
  IconTag: LucideIcon
  link: string
  name: string
}

export function Icon({ IconTag, link, name }: IconProps) {
  return (
    <Link href={link}>
      <IconTag className="transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white size-8" />
    </Link>
  )
}
export function IconName({ IconTag, link, name }: IconProps) {
  return (
    <Link href={link} className="flex space-x-2 p-2 text-xl items-center">
      <IconTag className="transition ease-in-out hover:scale-125 duration-300 hover:text-black dark:hover:text-white size-8" />
      <p>{name}</p>
    </Link>
  )
}
