'use client'
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight, MoveRight } from "lucide-react";

export default function FeedBack() {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            {/* Main container with flex to place items in a row */}
            <div className="flex flex-col md:flex-row">
                {/* Text content div */}
                <div className="bg-[#f8f5f2] p-8 md:p-12 md:w-7/12 rounded-tl-lg rounded-bl-lg flex flex-col justify-center">
                    <div className="mb-6">
                        <img src="/Home/brand-08.svg" alt="Interlock" className="h-8" />
                    </div>

                    <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8">
                        "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers than comply with this regulation and as we look to create our website and this builder just outstanding!"
                    </blockquote>

                    <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Sarah Edrissi</h3>
                        <p className="text-gray-600">Lead Marketing</p>
                    </div>
                </div>

                {/* Right image/video section */}
                <div className="md:w-5/12 relative bg-[#f8f5f2] h-64 md:h-auto">
                    <div className="absolute inset-0 bg-cover bg-center rounded-tr-lg rounded-br-lg"
                        style={{
                            backgroundImage: "url('/Home/feedback.webp')",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-16 w-16 rounded-full bg-white/90 hover:bg-white shadow-md"
                        >
                            <PlayCircle className="h-8 w-8 text-emerald-600" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="my-16">
                <p className="text-center font-bold">
                    <a href="your-link-here" className="text-emerald-600 hover:underline">
                        See all Feedbacks
                    </a>
                    <MoveRight className="inline ml-2 text-emerald-600" />
                </p>
            </div>
        </div>


    );
}