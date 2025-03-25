import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"

export default function Demo() {
    return (
        <main className="container flex flex-col items-center justify-center p-4 md:p-8">
            <section className="max-w-4xl w-full mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    No long-term contracts. No catches. Simple.
                </h1>
                <p className="text-lg text-muted-foreground mb-8">Start your 30-day free trial. Cancel anytime.</p>

                <div className="flex items-center justify-center mb-6">
                    <Toggle aria-label="Toggle feature">Enable advanced features</Toggle>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button variant="outline" className="flex items-center gap-2" size="lg">
                        <Play className="h-4 w-4" />
                        View demo
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" size="lg">
                        Start free trial
                    </Button>
                </div>

                <p className="text-sm text-muted-foreground">14-day trial, no credit card required.</p>
            </section>
        </main>
    )
}