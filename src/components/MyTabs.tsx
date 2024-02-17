"use client"
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useWSR from "swr"
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";
import { type Product } from "../types"

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json()
}


export default function MyTabs() {
  const { data, error, isLoading } = useWSR("https://fakestoreapi.com/products", fetcher)

  return (
    <Tabs defaultValue="recomendation" className="px-12">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="recomendation">Recomendation</TabsTrigger>
        <TabsTrigger value="popular">Popular</TabsTrigger>
      </TabsList>
      <TabsContent value="recomendation" className="space-y-3">
        {isLoading ?
          <ProductSkeleton />
          :
          error ? <h1>Error has occured...</h1> :
            data.map((product: Product, i: number) => {
              return (
                <ProductCard key={i} {...product} />
              )
            })
        }
      </TabsContent>
      <TabsContent value="popular">
        Popular
      </TabsContent>
    </Tabs>
  )
}
