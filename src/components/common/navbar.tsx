"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from 'lucide-react'


const featuresData = [
    {
        title: "Feature 1",
        description: "Description for feature 1",
        href: "/features/feature-1",
    },
    {
        title: "Feature 2",
        description: "Description for feature 2",
        href: "/features/feature-2",
    },
    {
        title: "Feature 3",
        description: "Description for feature 3",
        href: "/features/feature-3",
    },
]

const productsData = [
    {
        title: "Product 1",
        description: "Description for product 1",
        href: "/products/product-1",
    },
    {
        title: "Product 2",
        description: "Description for product 2",
        href: "/products/product-2",
    },
    {
        title: "Product 3",
        description: "Description for product 3",
        href: "/products/product-3",
    },
]

const resourcesData = [
    {
        title: "Resource 1",
        description: "Description for resource 1",
        href: "/resources/resource-1",
    },
    {
        title: "Resource 2",
        description: "Description for resource 2",
        href: "/resources/resource-2",
    },
    {
        title: "Resource 3",
        description: "Description for resource 3",
        href: "/resources/resource-3",
    },
]

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    const handleMouseEnter = (dropdown: string) => {
        setActiveDropdown(dropdown)
    }

    const handleMouseLeave = () => {
        setActiveDropdown(null)
    }

    return (
        <nav className="border-b border-gray-100 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <div className="relative h-10 w-10 rounded-md bg-emerald-500">
                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 4V20M4 12H20"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <span className="ml-2 text-xl font-semibold text-gray-900">lexend</span>
                    </Link>
                </div>

                <div className="hidden items-center space-x-8 md:flex">
                    <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("features")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="flex items-center space-x-1 font-medium text-gray-800">
                            <span>Features</span>
                            <ChevronDown className="h-4 w-4" />
                        </button>
                        {activeDropdown === "features" && (
                            <div className="absolute left-0 top-full z-10 mt-2 w-64 rounded-md bg-white p-4 shadow-lg">
                                <div className="grid gap-4">
                                    {featuresData.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="block rounded-md p-2 hover:bg-gray-50"
                                        >
                                            <div className="font-medium text-gray-900">{item.title}</div>
                                            <div className="text-sm text-gray-500">{item.description}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("products")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="flex items-center space-x-1 font-medium text-gray-800">
                            <span>Products</span>
                            <ChevronDown className="h-4 w-4" />
                        </button>
                        {activeDropdown === "products" && (
                            <div className="absolute left-0 top-full z-10 mt-2 w-64 rounded-md bg-white p-4 shadow-lg">
                                <div className="grid gap-4">
                                    {productsData.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="block rounded-md p-2 hover:bg-gray-50"
                                        >
                                            <div className="font-medium text-gray-900">{item.title}</div>
                                            <div className="text-sm text-gray-500">{item.description}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("resources")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="flex items-center space-x-1 font-medium text-gray-800">
                            <span>Resources</span>
                            <ChevronDown className="h-4 w-4" />
                        </button>
                        {activeDropdown === "resources" && (
                            <div className="absolute left-0 top-full z-10 mt-2 w-64 rounded-md bg-white p-4 shadow-lg">
                                <div className="grid gap-4">
                                    {resourcesData.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="block rounded-md p-2 hover:bg-gray-50"
                                        >
                                            <div className="font-medium text-gray-900">{item.title}</div>
                                            <div className="text-sm text-gray-500">{item.description}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/pricing" className="font-medium text-gray-800">
                        Pricing
                    </Link>

                    <div className="relative">
                        <button className="flex items-center space-x-1 font-medium text-gray-800">
                            <span>More</span>
                        </button>
                    </div>
                </div>

                <div className="hidden items-center space-x-4 md:flex">
                    <Link
                        href="/demo"
                        className="font-medium text-gray-800 hover:text-gray-900"
                    >
                        Request a demo
                    </Link>
                    <Link
                        href="/trial"
                        className="rounded-md bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
                    >
                        Start free trial
                    </Link>
                </div>

                <button className="md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    )
}