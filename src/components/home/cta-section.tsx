import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

export default function FreeTrialCTA() {
  return (
    <section className="w-full py-16 bg-[#f8f3ee]">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-3">Start your 30-day free trial.</h2>
        <p className="text-lg text-muted-foreground mb-8">Join over 2,500+ startups already growing with Lexend.</p>

        <div className="flex flex-col gap-4 max-w-md ">
          <Button variant="outline" size="lg" className=" w-2xl bg-white hover:bg-gray-50 h-14 text-base font-medium" asChild>
            <Link href="#">
              <Play className="mr-2 h-5 w-5" />
              View demo
            </Link>
          </Button>

          <Button size="lg" className=" bg-[#0e7c5b] w-2xl hover:bg-[#0a6349] h-14 text-base font-medium" asChild>
            <Link href="#">Start free trial</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
