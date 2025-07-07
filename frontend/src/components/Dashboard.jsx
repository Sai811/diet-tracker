import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Activity, Target, Droplets, Zap, Car } from "lucide-react";

export default function Dashboard(){


    return (
      <section id="dashboard" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Personal{" "}
              <span className="text-primary">Health Dashboard</span>
            </h2>
            <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
              Get insights at a glance with our intuitive dashboard designed for
              your success
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="h-full border-border/50 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Activity className="w-5 h-5 text-primary" />
                      Today's Overview
                    </CardTitle>
                    <CardDescription>
                      Track Your Daily Nutrition Goals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/*calorie*/}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Calories</span>
                        <span className="font-medium">1,000 / 2,000</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          125g
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Protein
                        </div>
                        <Progress value={78} className="h-1" />
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          230g
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Carbs
                        </div>
                        <Progress value={85} className="h-1" />
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-bold text-primary">
                          65g
                        </div>
                        <div className="text-sm text-muted-foreground">Fat</div>
                        <Progress value={72} className="h-1" />
                      </div>
                    </div>
                    <Button className="w-full cursor-pointer">
                      Log New Meal
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/*Side stats*/}
              <div>
                <Card className="border-border/50 shadow-soft">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Droplets className="w-5 h-5 text-blue-500"></Droplets>
                      Water Intake
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-blue-500">
                        1.8L
                      </div>
                      <div className="text-sm text-muted-foreground">
                        of 2.5L
                      </div>
                      <Progress value={80} className="h-2"></Progress>
                      <Button size="sm" className="w-full mt-3">
                        Add Glass
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/*Streak*/}
                <Card className="mt-2 border-border/50 shadow-soft">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="w-5 h-5 text-primary" />
                      Current Streak
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-primary">15</div>
                      <div className="text-sm text-muted-foreground">
                        days strong!
                      </div>
                      <div className="flex justify-center space-x-1 mt-3"></div>
                    </div>
                  </CardContent>
                </Card>

                {/*Goals*/}
                <Card className="mt-2 border-border/50 shadow-soft">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Target className="w-5 h-5 text-primary" />
                      Weekly Goal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-primary">5/7</div>
                      <div className="text-sm text-muted-foreground">
                        days completed
                      </div>
                      <Progress value={71} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                {/*Recent Meals*/}
                <Card className="mt-6 border-border/50 shadow-soft">
                  <CardHeader>
                    <CardTitle>Recent Meals</CardTitle>
                    <CardDescription>
                      Your nutrition history at a glance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          meal: "Grilled Chicken Salad",
                          time: "12:30 PM",
                          calories: "420",
                        },
                        {
                          meal: "Greek Yogurt with Berries",
                          time: "9:15 AM",
                          calories: "180",
                        },
                        {
                          meal: "Quinoa Buddha Bowl",
                          time: "Yesterday 7:00 PM",
                          calories: "520",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 border-b border-border/30 last:border-b-0"
                        >
                          <div>
                            <div className="font-medium text-foreground">
                              {item.meal}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {item.time}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-primary">
                              {item.calories} cal
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}