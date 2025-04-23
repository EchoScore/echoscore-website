import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Code, Database, Zap, FileText, Server, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SupportedPlatforms } from "@/components/supported-platforms"
import { Logo } from "@/components/logo"

export default function DeveloperPage() {
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
            <div className="max-w-3xl -mt-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                You won't be coding every day. You'll be building something that matters.
              </h1>
              <p className="text-xl text-white/80 mb-8">
                We're looking for a product-minded technical partner who can lead and manage the build using a
                low-code/no-code MVP strategy — and step in to code when necessary.
              </p>
            </div>
          </div>
        </section>

        {/* Build Strategy Section */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Build Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-[#0087C7]/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Code className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>Frontend</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">React + Tailwind via V0.dev</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">V0.dev</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#0087C7]/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>AI Layer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">OpenAI GPT-4</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">OpenAI API</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">GPT-4</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Prompt Engineering</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#0087C7]/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Server className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>Automations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Zapier, n8n, or Retool</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Zapier</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">n8n</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Retool</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Workflow Automation</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#0087C7]/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <FileText className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>Reports</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">PDF + web output</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">PDF Generation</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Data Visualization</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Interactive Reports</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#0087C7]/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Database className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>Data</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Social exports, APIs, .zip uploads, scraping</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Social APIs</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Web Scraping</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Data Processing</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Dev Profile Section */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Ideal Fit</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  <Code className="h-5 w-5 text-[#0087C7]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Product-minded builder</h3>
                  <p className="text-muted-foreground">
                    You understand the business context of technical decisions and can prioritize features based on user
                    value and business impact. You're comfortable with the pace and uncertainty of startup development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-[#0087C7]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Familiar with GPTs, data scraping, low-code orchestration
                  </h3>
                  <p className="text-muted-foreground">
                    You've worked with AI APIs before and understand how to structure prompts for consistent results.
                    You know how to build systems that can scale from prototype to production.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  <Server className="h-5 w-5 text-[#0087C7]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Can lead execution and manage contractors if needed</h3>
                  <p className="text-muted-foreground">
                    You're pragmatic about development and know when to use no-code/low-code tools versus custom code.
                    You can stitch together services to create functional systems quickly and manage additional
                    resources when needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SupportedPlatforms />

        {/* Team Section */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Who's building EchoScore?</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="mb-12">
                <CardHeader className="md:flex md:flex-row md:items-center md:gap-6">
                  <div className="mx-auto md:mx-0 mb-4 md:mb-0 overflow-hidden rounded-full w-24 h-24 border-4 border-white shadow-md shrink-0 bg-gray-100">
                    <Image
                      src="/images/walter-nishimura.jpg"
                      alt="Walter Nishimura"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-center md:text-left">Walter Nishimura</CardTitle>
                    <CardDescription className="text-center md:text-left">Founder & CEO</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Walter Nishimura is a serial entrepreneur and investor with a proven track record of building
                    profitable companies and advising multimillion-dollar ventures. Currently Director of Marketing &
                    Sales at Atlanta's largest residential architecture firm. He's building EchoScore to MVP — fast.
                    Backed by conviction, not just code.
                  </p>
                </CardContent>
              </Card>

              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6 text-center">We're looking for:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <UserCheck className="h-6 w-6 text-[#0087C7] shrink-0 mt-1" />
                    <p>A technical partner or GPT-savvy builder</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserCheck className="h-6 w-6 text-[#0087C7] shrink-0 mt-1" />
                    <p>Strategic partners in AI, PR, and trust tech</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserCheck className="h-6 w-6 text-[#0087C7] shrink-0 mt-1" />
                    <p>Early investors and partners who understand the stakes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to make an impact?</h2>
              <p className="text-xl mb-12">
                Join us in building a product that helps people protect their reputations and careers.
              </p>
              <Button
                size="lg"
                className="gap-2 text-xl px-10 py-8 bg-[#0087C7] hover:bg-[#0087C7]/90 text-white"
                asChild
              >
                <Link href="/contact">
                  Let's Build It Together <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
