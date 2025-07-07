import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, PieChart, Target, Trophy, Smartphone, Users } from "lucide-react";

export default function FeatureSection(){

const features = [
  {
    icon: Search,
    title: "Smart Food Search",
    description: "Instantly find nutrition info for millions of foods with our comprehensive database and barcode scanner."
  },
  {
    icon: PieChart,
    title: "Advanced Analytics",
    description: "Visualize your nutrition patterns with detailed charts and insights to optimize your health journey."
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description: "Set custom calorie and macro targets based on your unique health objectives and lifestyle."
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Stay motivated with streaks, badges, and milestones that celebrate your progress."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Track on-the-go with our responsive design that works seamlessly across all devices."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with like-minded individuals and share your journey with our supportive community."
  }
];

    return(
        <section id="features" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Everything You Need to <span className="text-primary">Succeed</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                         Powerful features designed to make nutrition tracking effortless and effective
                    </p>
                </div>

                <div>
                    {features.map((feature,index)=>(
                    <Card key={index} 
                    className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
                    style={{animationDelay:`${index*0.1}s`}}
                    >
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                             <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                           <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-center text-muted-foreground text-base leading-relaxed">
                                {feature.description}
                            </CardDescription>
                         </CardContent>
                    </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}