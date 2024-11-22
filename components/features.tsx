import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, BarChart, Users } from 'lucide-react'

const miniFeatures = [
  { title: "Fast", description: "Lightning-quick performance", icon: Zap },
  { title: "Secure", description: "Top-notch security measures", icon: Shield },
  { title: "Scalable", description: "Grows with your business", icon: BarChart },
  { title: "24/7 Support", description: "Always here to help", icon: Users },
]

const mainFeatures = [
  { 
    title: "Easy Integration", 
    description: "Seamlessly integrate with your existing tools and workflows. Our platform is designed to work harmoniously with your current tech stack, minimizing disruption and maximizing productivity.",
    badge: "Popular"
  },
  { 
    title: "Advanced Analytics", 
    description: "Gain valuable insights with our powerful analytics dashboard. Visualize your data, track key metrics, and make data-driven decisions to propel your business forward.",
    badge: "New"
  },
  { 
    title: "Customizable Workflows", 
    description: "Tailor the platform to fit your unique business needs. Create custom workflows, automate repetitive tasks, and streamline your processes for maximum efficiency.",
    badge: "Flexible"
  },
  { 
    title: "Collaborative Environment", 
    description: "Foster teamwork with our built-in collaboration tools. Share projects, communicate in real-time, and work together seamlessly, no matter where your team members are located.",
    badge: "Team-friendly"
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {miniFeatures.map((feature, index) => (
            <Card key={index} className="bg-card border-2 border-primary/10 hover:border-primary/20 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center space-x-2">
                <feature.icon className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Features</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="bg-card border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300 overflow-hidden group">
              <CardHeader className="relative">
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{feature.badge}</Badge>
                <CardTitle className="text-2xl text-primary group-hover:text-accent-foreground transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="flex items-center text-primary group-hover:text-accent-foreground transition-colors duration-300">
                  <span className="text-sm font-medium mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

