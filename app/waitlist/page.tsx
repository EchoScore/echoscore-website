import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/components/logo"
import { WaitlistForm } from "./waitlist-form"
import { Instagram } from "lucide-react"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-[#0087C7] text-white py-24">
          <div className="container pt-16">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-white/80 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </div>
            <div className="flex flex-col items-center mb-6 -mt-12">
              <Logo width={1050} height={420} className="max-w-full h-auto" />
            </div>
            <div className="max-w-3xl mx-auto text-center -mt-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the EchoScore Waitlist</h1>
              <p className="text-xl text-white/80 mb-8">
                Be among the first to know when we launch and get early access to our social media risk assessment tool.
              </p>
            </div>
          </div>
        </section>

        {/* Waitlist Form Section */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Reserve Your Spot</h2>
                  <p className="text-muted-foreground mb-8 text-center">
                    Fill out the form below to join our waitlist. We'll notify you as soon as EchoScore is ready for
                    you.
                  </p>

                  <WaitlistForm />
                </div>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-4">Why Join Our Waitlist?</h3>
                <ul className="space-y-4 text-left max-w-md mx-auto">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0087C7] font-bold text-xl">•</span>
                    <span>Early access to our platform before public launch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0087C7] font-bold text-xl">•</span>
                    <span>Special founding member pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0087C7] font-bold text-xl">•</span>
                    <span>Opportunity to provide feedback and shape the product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0087C7] font-bold text-xl">•</span>
                    <span>Priority support when we launch</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Instagram className="h-6 w-6 text-[#0087C7]" />
                  <h3 className="text-xl font-semibold">Follow Us on Instagram</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Follow us for immediate invites and exclusive news on Instagram at{" "}
                  <a
                    href="https://instagram.com/echoscore.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0087C7] font-medium hover:underline"
                  >
                    @echoscore.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
