import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    function handleClick(){
        navigate("/signin")

    }

    function handleClickSignup(){
        navigate("/signup")
    }

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
          <span className="text-xl font-bold text-foreground">Diet Tracker</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to={"/features"} className="text-foreground hover:text-primary transition-colors">Features</Link>
          <Link to={"/dashboard"} className="text-foreground hover:text-primary transition-colors">Dashboard</Link>
          <Link to={"/pricing"} className="text-foreground hover:text-primary transition-colors">Pricing</Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" onClick={handleClick}>Sign In</Button>
          <Button variant="hero" onClick={handleClickSignup}>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;