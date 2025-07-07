import { Button } from "./button"

export default function HeroSection(){

    return(
         <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/bg.jpg"
          alt="Fresh healthy foods" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Track Your Journey to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Better Health</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Effortlessly log meals, track nutrition, and achieve your health goals with our intelligent diet tracking platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Tracking Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary">500K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-primary">2M+</div>
              <div className="text-muted-foreground">Meals Tracked</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}