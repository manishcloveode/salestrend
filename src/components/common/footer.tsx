"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronUp } from "lucide-react"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className="w-full">
            <div className="w-6xl mx-auto bg-[#f8f3ee] py-8 rounded-2xl px-6 sm:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center gap-2 mb-4 sm:mb-0">
                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold">lexend</span>
                    </div>

                    <div className="flex gap-2">
                        <Link href="#" className="h-10">
                            <Image
                                src="/Home/playstore.svg?height=40&width=135"
                                alt="Get it on Google Play"
                                width={135}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <Link href="#" className="h-10">
                            <Image
                                src="/Home/playstore.svg?height=40&width=135"
                                alt="Download on the App Store"
                                width={135}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-12 px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {/* INNER PAGES */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="hover:text-emerald-600 transition-colors">
                                    Why SalesTrendz
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* BLOG */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Customers</h3>
                        <ul className="space-y-3">
                        </ul>
                    </div>

                    {/* SHOP */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Request A Demo</h3>
                        <ul className="space-y-3">

                        </ul>
                    </div>

                    {/* OTHER */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="hover:text-emerald-600 transition-colors">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-emerald-600 transition-colors">
                                    News & Events
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-emerald-600 transition-colors">
                                    Partners
                                </Link>
                            </li>   <li>
                                <Link href="#" className="hover:text-emerald-600 transition-colors">
                                    Find A Partner
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* MEMBERSHIP */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Resource</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="hover:text-emerald-600 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-emerald-600 transition-colors">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-emerald-600 transition-colors">
                                    Vedioes
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-emerald-600 transition-colors">
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-emerald-600 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright, legal links and social media */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center mb-6">
                        <p className="text-gray-600">Lexend Â© 2025. All rights reserved.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                        <div className="flex gap-6">
                            <Link href="#" className="text-gray-600 hover:text-gray-900">
                                Privacy notice
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900">
                                Legal
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-900">
                                Cookie settings
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 md:ml-12">
                            <Link href="#" aria-label="LinkedIn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5 text-gray-600 hover:text-gray-900"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </Link>
                            <Link href="https://www.facebook.com/salestrendz1/" aria-label="Facebook">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5 text-gray-600 hover:text-gray-900"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Twitter">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5 text-gray-600 hover:text-gray-900"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5 text-gray-600 hover:text-gray-900"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </Link>
                            <Link href="#" aria-label="YouTube">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5 text-gray-600 hover:text-gray-900"
                                >
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </Link>

                            <div className="border-l border-gray-300 h-6 mx-4 hidden md:block"></div>

                            <div className="relative group">
                                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                    <span>English</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4"
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom line with back to top button */}
                <div className="relative">
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-5 right-5 p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
                        aria-label="Back to top"
                    >
                        <ChevronUp className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </footer>
    )
}