import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
type CardTileProps = {
    info: string
    stats: number
    num: number
  }

export function CardTile({ info, stats ,num}: CardTileProps) {
  return (
    <Card className="w-full max-w-lg w-150 mt-25 pt-25">
      <CardHeader>
        <CardDescription>
        {info}
        </CardDescription>
        <CardTitle>
            {num}
        </CardTitle>
        
      </CardHeader>
      
      
      <CardContent>
      {stats} since last week 
      </CardContent>
      
    </Card>
  )
}
