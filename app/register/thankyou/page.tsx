import { Suspense } from "react"
import ThankYouClient from "./ThankYouClient"

export default function ThankYouPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ThankYouClient />
    </Suspense>
  )
}
