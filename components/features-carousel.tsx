import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Card, CardContent } from "@/components/ui/card"
  
  const features = [
    { title: "Easy Integration", description: "Seamlessly integrate with your existing tools and workflows." },
    { title: "Advanced Analytics", description: "Gain valuable insights with our powerful analytics dashboard." },
    { title: "24/7 Support", description: "Our dedicated team is always here to help you succeed." },
    { title: "Customizable", description: "Tailor the platform to fit your unique business needs." },
  ]
  
  export function FeaturesCarousel() {
    return (
      <section id="features" className="py-28 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
          <Carousel className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 h-[200px]">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-center text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    )
  }
  
  