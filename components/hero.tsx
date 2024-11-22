import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-40 pb-32 md:pt-52 md:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-8">
            Welcome to Kainite
          </h1>
          <p className="mt-6 max-w-[700px] text-xl text-muted-foreground mb-12">
          AI development platform designed to empower developers, businesses, and creators to build, deploy, and manage intelligent agents with ease.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

