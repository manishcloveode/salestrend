import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, Bell, ArrowRight, Diamond } from "lucide-react"
import Link from "next/link"

export default function LexendDashboard() {
  const subscriptions = [
    { name: "Phoenix Baker", username: "@phoenix", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Olivia Rhye", username: "@olivia", avatar: "/placeholder.svg?height=32&width=32", highlighted: true },
    { name: "Lana Steiner", username: "@lana", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Demi Wilkinson", username: "@demi", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Candice Wu", username: "@candice", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Natali Craig", username: "@natali", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Drew Cano", username: "@drew", avatar: "/placeholder.svg?height=32&width=32" },
  ]

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 p-12 flex flex-col justify-center max-w-xl">
        <div className="mb-8">
          <div className="w-16 h-16 bg-[#0e7c5b] rounded-lg flex items-center justify-center">
            <Diamond className="h-8 w-8 text-white"/>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-6">Collaboration is made seamless with Lexend</h1>

        <p className="text-lg text-gray-600 mb-8">
          Get real-time access to approvals, comments and version tracking. Smart features like variables and
          conditional logic help you eliminate Tool errors.
        </p>

        <Link href="#" className="text-[#0e7c5b] font-medium flex items-center hover:underline w-fit">
          Let's find out <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-[450px] bg-[#f8f3ee] p-6">
        <div className="flex justify-between items-center mb-8">
          <Button variant="outline" size="icon" className="rounded-full bg-white h-8 w-8">
            <PlusCircle className="h-5 w-5 text-[#0e7c5b]" />
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Jason Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">Jason Doe</div>
                <div className="text-xs text-gray-500">jason@studio.co</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0 pb-2">
              <CardTitle className="text-base font-semibold">Recent subscriptions</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm font-medium mb-3">Recent</div>
                <div className="space-y-4">
                  {subscriptions.map((subscription, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 ${subscription.highlighted ? "bg-[#f8f3ee] -mx-3 p-3 rounded-lg" : ""}`}
                    >
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={subscription.avatar} alt={subscription.name} />
                        <AvatarFallback>{subscription.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <span className="font-medium">{subscription.name}</span>
                        <span className="text-gray-500 ml-1">{subscription.username}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0 pb-2 flex flex-row justify-between items-center">
              <CardTitle className="text-base font-semibold">Total subscriptions</CardTitle>
              <div className="text-xs bg-white px-2 py-1 rounded-full">18/20 seats</div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-4">
                  Manage your subscriptions members and their account permissions here.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                  <Button size="sm" className="bg-[#0e7c5b] hover:bg-[#0a6349]">
                    Upgrade now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

