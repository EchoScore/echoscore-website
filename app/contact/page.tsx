import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Phone, Mail, Instagram } from "lucide-react"
import { Logo } from "@/components/logo"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function ContactPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-white/80 mb-8">
                Ready to learn more about EchoScore? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="mb-12 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-50 p-6 flex items-center justify-center">
                    <div className="overflow-hidden rounded-full w-32 h-32 border-4 border-white shadow-md shrink-0 bg-gray-100">
                      <Image
                        src="/images/walter-nishimura.jpg"
                        alt="Walter Nishimura"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">Walter Nishimura</CardTitle>
                      <CardDescription>Founder & CEO</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <p className="text-muted-foreground">
                        Serial entrepreneur and investor with a proven track record of building profitable companies and
                        advising multimillion-dollar ventures.
                      </p>
                      <div className="space-y-3 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                            <Phone className="h-5 w-5 text-[#0087C7]" />
                          </div>
                          <div>
                            <p className="font-medium">Phone</p>
                            <a href="tel:6784379825" className="text-[#0087C7] hover:underline">
                              (678) 437-9825
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                            <Mail className="h-5 w-5 text-[#0087C7]" />
                          </div>
                          <div>
                            <p className="font-medium">Email</p>
                            <a href="mailto:walter@echoscore.ai" className="text-[#0087C7] hover:underline">
                              walter@echoscore.ai
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                            <Instagram className="h-5 w-5 text-[#0087C7]" />
                          </div>
                          <div>
                            <p className="font-medium">Instagram</p>
                            <a
                              href="https://instagram.com/echoscore.ai"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0087C7] hover:underline"
                            >
                              @echoscore.ai
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to take the next step?</h2>
                <p className="text-muted-foreground mb-6">
                  Whether you're interested in investing, building with us, or just learning more about EchoScore, we're
                  here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/waitlist"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#0087C7] text-white hover:bg-[#0087C7]/90 transition-colors"
                  >
                    Join the Waitlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
