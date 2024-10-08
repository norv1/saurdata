import { SaurMap } from "@/components/gallery/saurMap"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "gallery | saurdata",
}

function Page() {
  return (
    <div className="w-fit m-auto">
      <SaurMap />
    </div>
  )
}
export default Page
