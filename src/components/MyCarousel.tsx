"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
export default function MyCarousel() {
  return (
    <Carousel opts={{
      loop: true
    }} className="w-full max-w-xs mx-auto" plugins={[
      Autoplay({
        delay: 2000
      })
    ]}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <Card className="h-40 flex justify-center items-center">
                <span className="text-4xl font-semibold">Ad</span>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
