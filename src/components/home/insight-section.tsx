
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpRight } from "lucide-react"

export default function InsightsSection() {
    const posts = [
        {
            id: 1,
            category: "Design",
            title: "UX review presentations",
            description:
                "Join the thousands of satisfied users and take your business to the next level today and the power of streamlined business operations.",
            image: "/Home/img-01.jpg",
            author: {
                name: "David",
                avatar: "/Home/01.png",
                date: "Apr 26, 2024",
            },
        },
        {
            id: 2,
            category: "Business",
            title: "Migrating to Linear 101",
            description:
                "Help you keep track of leads, contacts, and deals, making it easier to nurture and convert prospects into loyal customers.",
            image: "/Home/img-02.jpg",
            author: {
                name: "Kevin",
                avatar: "/Home/02.png",
                date: "Apr 24, 2024",
            },
        },
        {
            id: 3,
            category: "Product",
            title: "Building your API stack",
            description:
                "You can personalize it to display the most relevant information and metrics for your business, giving you performance.",
            image: "/Home/img-03.jpg",
            author: {
                name: "Sarah",
                avatar: "/Home/03.png",
                date: "Apr 22, 2024",
            },
        },
    ]

    return (
        <section className="w-full py-12 bg-[#f8f5f2] px-6">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-medium text-emerald-700">Our insights</h3>
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                Latest posts and updates
                            </h2>
                            <Button className="hidden sm:flex bg-emerald-700 hover:bg-emerald-800">View all posts</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 h-[550px] gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Card key={post.id} className="overflow-hidden border-none rounded-xl">
                                <div className="relative h-96 w-full overflow-hidden">
                                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                                </div>
                                <CardContent className="p-2">
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-emerald-700">{post.category}</p>
                                        <Link href="#" className="group flex items-center justify-between">
                                            <h3 className="text-xl font-bold">{post.title}</h3>
                                            <ArrowUpRight className="h-6 text-end w-6  transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </Link>
                                        <p className="text-muted-foreground">{post.description}</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">{post.author.name}</span>
                                            <span className="text-xs text-muted-foreground">{post.author.date}</span>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <Button className="sm:hidden self-center bg-emerald-700 hover:bg-emerald-800">View all posts</Button>
                </div>
            </div>
        </section>
    )
}