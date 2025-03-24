"use client"
import React, { useState } from 'react'
import { Plus, Minus, MoveRight } from 'lucide-react'
const processes = [
    {
        number: "01",
        title: "Consultation",
        content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        number: "02",
        title: "Research and Strategy Development",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit tempora eveniet magnam dolorem dolore eos vitae maxime odit adipisci?'
    },
    {
        number: "03",
        title: "Implementation",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit tempora eveniet magnam dolorem dolore eos vitae maxime odit adipisci?'
    },
    {
        number: "04",
        title: "Monitoring and Optimization",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit tempora eveniet magnam dolorem dolore eos vitae maxime odit adipisci?'
    }
    ,
    {
        number: "05",
        title: "Reporting and Communication",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit tempora eveniet magnam dolorem dolore eos vitae maxime odit adipisci?'
    }
    ,
    {
        number: "06",
        title: "Continual Improvement",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit tempora eveniet magnam dolorem dolore eos vitae maxime odit adipisci?'
    }
]
export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0)
    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index)
    };
    return (
        <>
            <div className={` md:flex-row p-[20px] md:p-[50px]`}>
                <div className="md:ml-6 text-center">
                    <p className="text-4xl font-bold text-center">
                        Frequently Asked Questions:
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                <div>
                    {processes.map((process, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-[#f8f3ee] max-w-3xl mx-auto mb-2 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleSection(index)}
                                className="w-full md:px-8 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between text-left"
                                aria-expanded={openIndex === index}
                            >
                                <div className="flex items-start md:items-center gap-4 md:gap-6">
                                    <span className="text-base  font-bold">{process.number}</span>
                                    <span className="text-base font-medium">{process.title}</span>
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
                                    <div className="rounded-full border border-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                        {openIndex === index ? (
                                            <Minus className="h-6 w-6 md:h-6 md:w-6 font-bold" />
                                        ) : (
                                            <Plus className="h-6 w-6 md:h-6 md:w-6" />
                                        )}
                                    </div>
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="px-4 md:px-8 pb-4 md:pb-6 text-sm sm:text-base leading-relaxed">
                                    {process.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-16">
                <p className="text-center font-bold">
                    <a href="your-link-here" className="text-emerald-600 hover:underline">
                        Still Have Questions?
                    </a>
                    <MoveRight className="inline ml-2 text-emerald-600" />
                </p>
            </div>
        </>
    )
}