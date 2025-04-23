import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  DollarSign,
  Target,
  Briefcase,
  UserCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SupportedPlatforms } from "@/components/supported-platforms"
import { Logo } from "@/components/logo"

export default function InvestorPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">We're not building hype. We're building revenue.</h1>
              <p className="text-xl text-white/80 mb-8">
                EchoScore is a revenue-first product solving a high-stakes reputational risk problem. Our customers need
                this — and they'll pay for it.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Pricing Breakdown (No Free Tier)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-[#0087C7]/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>One-time Scan</CardTitle>
                  </div>
                  <div className="text-3xl font-bold">$25</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0087C7] font-bold">•</span>
                      <span>Comprehensive scan of all connected accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0087C7] font-bold">•</span>
                      <span>Detailed risk report with AI analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0087C7] font-bold">•</span>
                      <span>Actionable recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#0087C7]/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>Monthly Monitoring</CardTitle>
                  </div>
                  <div className="text-3xl font-bold">
                    $20<span className="text-lg font-normal">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0087C7] font-bold">•</span>
                      <span>1 monitored account per platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0087C7] font-bold">•</span>
                      <span>Real-time alerts for new risk content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0087C7] font-bold">•</span>
                      <span>Monthly risk assessment updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#0087C7]/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>Corporate</CardTitle>
                  </div>
                  <div className="text-3xl font-bold">
                    $500<span className="text-lg font-normal">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0087C7] font-bold">•</span>
                      <span>100 individual scans/month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0087C7] font-bold">•</span>
                      <span>No monitoring included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0087C7] font-bold">•</span>
                      <span>Results go to each individual's account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0087C7] font-bold">•</span>
                      <span>Admin dashboard for HR/management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Supported Platforms Section */}
        <SupportedPlatforms />

        {/* What We're Raising For Section */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">What We're Raising For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>Finalize GPT-powered MVP</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete development of our AI-powered scanning and analysis engine to deliver accurate risk
                    assessments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>Launch Scalable Onboarding</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Build seamless onboarding and reporting systems that can scale from individual users to enterprise
                    clients.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#0087C7]" />
                    </div>
                    <CardTitle>Activate B2B Partnerships</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Establish strategic partnerships with VCs, PR firms, and HR organizations to accelerate market
                    penetration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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

        {/* Investor Fit Section */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Investor Fit</h2>
              <p className="text-xl mb-12">
                You understand the speed of reputation damage — and the value of proactive protection.
              </p>
              <Button
                size="lg"
                className="gap-2 text-xl px-10 py-8 bg-[#0087C7] hover:bg-[#0087C7]/90 text-white"
                asChild
              >
                <Link href="/contact">
                  Request the Deck <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
