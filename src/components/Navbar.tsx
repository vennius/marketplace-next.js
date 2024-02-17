"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { create } from "zustand"
import { Product } from "@/types";

const useCount = create((set: void) => ({
  products: [],
  setProduct: (newProduct: Product) => set((state) => ([...state.products, newProduct]))
}))

export default function Navbar() {
  const [products, setProduct] = useCount((state) => ([state.products, state.setProduct]))
  return (
    <nav className="backdrop-blur-sm fixed w-full z-50 top-0 border-gray-50 border-b-[0.25px]">
      <div className="p-2 flex justify-between items-center">
        <Image src="/favicon.ico" width="50" height="50" />
        <Drawer>
          <DrawerTrigger>
            <Button>
              <ShoppingCart />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              {products.map((el: Product) => {
                return `========
${el.title}`
              })}
            </DrawerHeader>
            <DrawerFooter>
              <Button onClick={() => setProduct({
                title: "testjajajaks",
                image: "jskalala",
                description: "jamalqpwpw",
                price: "111"
              })}>Add</Button>
              <DrawerClose>
                <Button>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
