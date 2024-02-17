import { Card } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export default function ProductSkeleton() {
  return (
    <Card className="space-y-2 p-5">
      <Skeleton className="h-52 w-full" />
      <Skeleton className="h-10 w-40" />
      <Skeleton className="h-5 w-32" />
    </Card>
  )
}
