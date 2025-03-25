"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
    const [email, setEmail] = useState("")

    return (
        <section className="w-full overflow-hidden bg-[#faf9f7] py-12 md:py-20 lg:py-24">
            <div className="container mx-auto">
                <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    {/* Left Column - Content */}
                    <div className="flex flex-col px-8 space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:leading-[1.1]">
                                Tools that cover <span className="text-[#0e8a6e]">all aspects</span> of your{" "}
                                <br className="hidden sm:inline" />
                                growing <br className="hidden sm:inline" />
                                business.
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                                Say goodbye to the hassle of managing multiple software and tools for different tasks. Lexend offers a
                                comprehensive suite of tools that cover all aspects of your business.
                            </p>
                        </div>
                        <div className="flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <div className="flex-1">
                                <Input
                                    type="email"
                                    placeholder="Your email.."
                                    className="h-12 rounded-md border-gray-300 bg-white px-4 text-base"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <Button className="h-12 rounded-md bg-[#0e8a6e] px-8 text-base font-medium text-white hover:bg-[#0e8a6e]/90">
                                Try it out for free
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            We care about your data in our{" "}
                            <Link href="#" className="text-[#0e8a6e] underline underline-offset-4">
                                privacy policy
                            </Link>
                            .
                        </p>
                    </div>


                    <div className="relative mx-auto flex w-full items-center justify-center lg:justify-end">
                        <div className="relative w-full ">
                            <Image
                                src="/Home/hero-mockup.png"
                                alt="Dashboard interface showing desktop and mobile views of Lexend analytics platform"
                                width={600}
                                height={600}
                                className="w-full object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}