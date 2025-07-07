import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Pricing(){

    return(
        <section className="grid grid-cols-3">
            <Card className="col-span-1">
                <CardHeader>
                    <CardTitle>
                        normal

                    </CardTitle>
                </CardHeader>
                <CardContent>
                    contents

                </CardContent>
 

            </Card>
            
            <Card className="col-span-1">
                 <CardHeader>
                    <CardTitle>
                        plus
                        
                    </CardTitle>
                </CardHeader>
                 <CardContent>
                    content
                    
                </CardContent>


            </Card>

            <Card className="col-span-1">
                 <CardHeader>
                    <CardTitle>
                        pro
                        
                    </CardTitle>
                </CardHeader>
                 <CardContent>
                    content
                </CardContent>

            </Card>

            
        </section>
    )
}