import type React from "react"
import { Check, Layers, Building2, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PricingSection() {
    return (
        <div className="w-full bg-emerald-800 py-16 px-4">
            <div className="text-center mb-12">
                <p className=" font-medium text-white mb-2"> pricing</p>
                <h2 className="text-4xl text-white md:text-5xl font-bold tracking-tight">Simple, scalable pricing.</h2>
                <p className=" text-white pt-4">No extra charges. No hidden fees.</p>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
                {/* Basic Plan */}
                <PricingCard
                    title="Basic plan"
                    price="$49"
                    icon={<Layers className="h-6 w-6 text-emerald-700" />}
                    features={[
                        "Up to 10 individual users",
                        "Basic reporting and analytics",
                        "Project Management",
                        "20GB individual data each user",
                        "Basic chat and email support",
                    ]}
                    buttonText="Get started"
                    buttonVariant="primary"
                />

                {/* Business Plan */}
                <PricingCard
                    title="Business plan"
                    price="$79"
                    icon={<Building2 className="h-6 w-6 text-emerald-700" />}
                    features={[
                        "Access to all Basic features",
                        "200+ integrations",
                        "Unlimited team workspaces",
                        "Approval workflows",
                        "Salesforce integration*",
                    ]}
                    buttonText="Start a free trial"
                    buttonVariant="primary"
                    popular={true}
                />

                {/* Enterprise Plan */}
                <PricingCard
                    title="Enterprise plan"
                    price="$199"
                    icon={<BarChart3 className="h-6 w-6 text-emerald-700" />}
                    features={[
                        "Access to all Business features",
                        "Unlimited files uploads",
                        "Real-time team collaboration",
                        "SSO support and custom user roles",
                        "Bulk send & Forms",
                    ]}
                    buttonText="Book a demo"
                    buttonVariant="primary"
                />
            </div>
        </div>
    )
}

interface PricingCardProps {
    title: string
    price: string
    icon: React.ReactNode
    features: string[]
    buttonText: string
    buttonVariant: "primary" | "outline"
    popular?: boolean
}

function PricingCard({ title, price, icon, features, buttonText, buttonVariant, popular = false }: PricingCardProps) {
    return (
        <div className="bg-[#f8f5f1] rounded-lg overflow-hidden flex flex-col">
            {popular && <div className="bg-emerald-600 text-white py-1 px-4 text-center font-medium">POPULAR</div>}
            <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-center mb-4">
                    <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">{icon}</div>
                </div>
                <h3 className="text-emerald-700 text-xl font-medium text-center mb-6">{title}</h3>
                <div className="text-center mb-2">
                    <span className="text-5xl font-bold text-gray-800">{price}</span>
                    <span className="text-xl text-gray-800">/ mo</span>
                </div>
                <p className="text-center text-gray-600 mb-8">Billed annually.</p>
                <ul className="space-y-4 mb-8 flex-1">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                <Check className="h-3 w-3 text-emerald-700" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>
                <button
                    className={cn(
                        "w-full py-3 px-4 rounded-md font-medium transition-colors",
                        buttonVariant === "primary"
                            ? "bg-emerald-700 text-white hover:bg-emerald-800"
                            : "bg-white border border-emerald-700 text-emerald-700 hover:bg-emerald-50",
                    )}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    )
}