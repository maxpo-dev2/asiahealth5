import { Suspense } from "react"
import RegistrationForm from "@/app/components/registration-form"

function FormWrapper() {
  return <RegistrationForm />
}

export default function RegisterPage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="p-8 text-center">Loading form...</div>}>
        <FormWrapper />
      </Suspense>
    </main>
  )
}
