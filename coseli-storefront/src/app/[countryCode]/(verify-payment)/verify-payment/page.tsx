"use client"

import { useState, useEffect } from "react"
import { useSearchParams, redirect } from "next/navigation"
import { placeOrder } from "@lib/data/cart"
import Link from "next/link"
import {
  CheckCircle2,
  XOctagon,
  XCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"

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

  if (submitting) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="bg-white border border-zinc-200 rounded-lg p-8 w-full max-w-md mx-4">
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="w-12 h-12 text-zinc-600 animate-spin" />
            <h2 className="text-xl font-semibold text-zinc-900">
              Verifying Payment
            </h2>
            <p className="text-zinc-600 text-center">
              Please wait while we verify your payment with the payment
              provider...
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (status == "User canceled") {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
        <div className="bg-white border border-zinc-200 rounded-lg p-8 w-full max-w-md">
          <div className="flex flex-col items-center space-y-6">
            {/* Icon */}
            <div className="rounded-full bg-zinc-100 p-3">
              <XOctagon className="w-12 h-12 text-zinc-600" />
            </div>

            {/* Status */}
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold text-zinc-900">
                Payment Canceled
              </h2>
              <p className="text-zinc-600">
                Payment canceled at your request. Your cart items are still
                saved if you&apos;d like to complete your purchase.
              </p>
            </div>

            {/* Actions */}
            <div className="w-full space-y-3">
              <Link
                href="/cart"
                className="w-full inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition-colors"
              >
                Return to Cart
              </Link>
              <Link
                href="/"
                className="w-full inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
      <div className="bg-white border border-zinc-200 rounded-lg p-8 w-full max-w-md mx-4">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-12 h-12 text-zinc-600 animate-spin" />
          <h2 className="text-xl font-semibold text-zinc-900">
            Verifying Payment
          </h2>
          <p className="text-zinc-600 text-center">
            Please wait while we verify your payment with the payment
            provider...
          </p>
        </div>
      </div>
    </div>
  )
}
