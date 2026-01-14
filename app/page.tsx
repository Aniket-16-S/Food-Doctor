"use client";

import { Search, Camera, ScanLine, Info, AlertTriangle, ChevronRight } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
                    <div className="flex items-center gap-2">
                        <ScanLine className="h-6 w-6 text-primary" />
                        <span className="text-lg font-bold tracking-tight">Food Doctor</span>
                    </div>
                    <nav className="ml-auto flex items-center gap-4">
                        <button className="text-sm font-medium hover:text-primary">History</button>
                        <button className="text-sm font-medium hover:text-primary">Profile</button>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden flex flex-1 flex-col items-center justify-center space-y-6 py-12 text-center md:py-24 lg:py-32 px-4">
                {/* Decorative Gradient */}
                <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

                <div className="space-y-4 max-w-[800px]">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Know exactly what you <span className="text-primary">eat</span>.
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Scan barcodes or ingredients to detect allergens, understand additives, and make healthier choices instantly.
                    </p>
                </div>

                {/* Action Area */}
                <div className="mx-auto flex w-full max-w-sm flex-col space-y-4 sm:max-w-md md:space-x-4 md:space-y-0 md:flex-row">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search products..."
                            className="flex h-10 w-full rounded-md border border-input bg-background/80 backdrop-blur px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2">
                        <Camera className="h-4 w-4" />
                        Scan Label
                    </button>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24 lg:py-32 bg-secondary/20 rounded-t-3xl border-t border-border/50">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <FeatureCard
                        icon={<Info className="h-8 w-8 text-blue-500" />}
                        title="Clean Labels"
                        description="Decode complex ingredient lists into simple, understandable terms."
                    />
                    <FeatureCard
                        icon={<AlertTriangle className="h-8 w-8 text-orange-500" />}
                        title="Allergen Watch"
                        description="Set your preferences and get instant alerts for ingredients you avoid."
                    />
                    <FeatureCard
                        icon={<ScanLine className="h-8 w-8 text-green-500" />}
                        title="Smart Analysis"
                        description="Powered by AI to give you a health score for every product you scan."
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 md:px-8 md:py-0 border-t">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        &copy; 2024 Food Doctor. Built for transparency.
                    </p>
                </div>
            </footer>
        </main>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex flex-col items-start space-y-3 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-secondary p-3">
                {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            <div className="pt-2">
                <button className="flex items-center text-sm font-medium text-primary hover:underline">
                    Learn more <ChevronRight className="ml-1 h-3 w-3" />
                </button>
            </div>
        </div>
    );
}
