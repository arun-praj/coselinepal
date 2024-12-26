"use client"

import { useState, useEffect } from "react"
import { useSearchParams, redirect } from "next/navigation"
import { placeOrder } from "@lib/data/cart"

export default function PaymentVerification() {
  const searchParams = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const txnId = searchParams.get("txnId")
  const status = searchParams.get("status")
  const purchase_order_name = searchParams.get("purchase_order_name")
  const purchase_order_id = searchParams.get("purchase_order_id")

  useEffect(() => {
    const handlePaymentStatus = async () => {
      if (status === "Completed") {
        setSubmitting(true)
        try {
          await placeOrder()
        } catch (err: any) {
          console.error("Error in placeOrder", err)
          setErrorMessage(err.toString())
        } finally {
          setSubmitting(false)
        }
      } else if (status === "User canceled") {
        setSubmitting(false)
        setErrorMessage("Payment failed")
      }
    }

    if (status) {
      handlePaymentStatus()
    }
  }, [status])
  return (
    <div>
      <h1>Please wait while we verify your payment</h1>
    </div>
  )
}
