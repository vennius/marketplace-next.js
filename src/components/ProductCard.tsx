import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import { type Product } from "../types"
import { toast } from "sonner"


export default function ProductCard({ title, description, image, price }: Product) {
  return (

    <Card className="">
      <CardHeader>
        <Image src={image} height={280} width={100} className="w-full h-50" alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardTitle>${price}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={() => toast(`${title} added to cart.`, {
          action: {
            label: "View",
            onClick: () => console.log("Undo"),
          }
        })}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}
