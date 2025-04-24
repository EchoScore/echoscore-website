import {
  AlertTriangle,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  ClipboardCheck,
  Clock,
  Database,
  MessageSquareWarning,
  Scan,
  Shield,
  User,
  Users,
  Zap,
  AlertCircle,
  Clock4,
  UserRound,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SupportedPlatforms } from "@/components/supported-platforms"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative flex min-h-screen flex-col items-center justify-center text-white py-12 md:py-24"
          style={{ backgroundColor: "#0087C7" }}
        >
          <div className="container flex flex-col items-center text-center z-10">
            <div className="mb-0 -mt-20">
              <Logo width={1400} height={560} className="max-w-full h-auto" />
            </div>
            <div className="-mt-16">
              <h1 className="text-3xl md:text-6xl font-bold tracking-tighter mb-4 max-w-3xl">
                See what your social media <span className="text-white/90">really</span> says about you.
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                We find red flags before they cost you a job, a deal, or a headline.
              </p>
              <Button
                size="lg"
                className="gap-2 bg-white text-[#0087C7] hover:bg-white/90 hover:text-[#0087C7]"
                asChild
              >
                <Link href="/waitlist">
                  Join the Waitlist <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16">
              Bad posts don't just go viral — they destroy momentum.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6">A Cautionary Tale</h3>
                <div className="prose max-w-none">
                  <p className="text-lg mb-4">
                    In 2025, the Oscar-nominated film <em>Emilia Pérez</em> was on track to sweep the Academy Awards —
                    until a single thread on X (formerly Twitter) changed everything.
                  </p>
                  <p className="text-lg mb-4">
                    Ten-year-old tweets surfaced from the film's lead actress containing transphobic jokes and racially
                    insensitive remarks. Within hours, backlash spread across every major outlet. The director, once a
                    shoo-in for Best Picture, was iced out of the awards circuit.
                  </p>
                  <p className="text-lg mb-4">
                    The fallout? The actress lost her career. The studio pulled international releases. Sponsors backed
                    out. Streaming deals fell apart.
                  </p>
                  <p className="text-lg font-bold">
                    Total estimated damage: over $180 million — all because no one scanned the cast's social media
                    before casting.
                  </p>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>The Ripple Effect</CardTitle>
                  <CardDescription>How quickly things unravel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">Career loss</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      From award frontrunner to persona non grata overnight
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquareWarning className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">Studio damage</span>
                    </div>
                    <p className="text-sm text-muted-foreground">$180M+ in lost revenue from pulled distribution</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">Missed red flags</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Content from a decade ago derails current success</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">No proactive scan in place</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A simple review could have prevented the entire crisis
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Know before it blows up.</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              EchoScore.ai uses advanced AI to analyze your social media history and identify potential risks before
              they become problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-[#0087C7]/20">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-[#0087C7]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <User className="h-6 w-6 text-[#0087C7]" />
                  </div>
                  <CardTitle>1. Connect Social Accounts</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Connect your social media accounts or upload archives for a comprehensive analysis.
                </CardContent>
              </Card>
              <Card className="border-[#0087C7]/20 relative">
                <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <ArrowRight className="h-8 w-8" />
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-[#0087C7]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Scan className="h-6 w-6 text-[#0087C7]" />
                  </div>
                  <CardTitle>2. AI scans posts</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Our proprietary AI analyzes text, images, and context to identify potential red flags.
                </CardContent>
              </Card>
              <Card className="border-[#0087C7]/20 relative">
                <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <ArrowRight className="h-8 w-8" />
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-[#0087C7]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <ClipboardCheck className="h-6 w-6 text-[#0087C7]" />
                  </div>
                  <CardTitle>3. Get a private, categorized risk report</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Receive a confidential report with identified risks and recommendations for remediation.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <SupportedPlatforms />

        {/* Market Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">Who Needs This?</h2>
            <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 md:mb-16 max-w-2xl mx-auto">
              EchoScore.ai helps anyone with a public profile protect their reputation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: User,
                  title: "Job Seekers",
                  description: "Don't lose the offer over a tweet.",
                },
                {
                  icon: BriefcaseBusiness,
                  title: "Founders",
                  description: "Protect your rep before you pitch.",
                },
                {
                  icon: Database,
                  title: "VCs",
                  description: "Avoid surprise headlines from portfolio companies.",
                },
                {
                  icon: Users,
                  title: "HR Teams",
                  description: "Add to background checks, quietly.",
                },
                {
                  icon: Shield,
                  title: "PR Firms",
                  description: "Do it faster, smarter, with AI.",
                },
                {
                  icon: UserRound,
                  title: "Public Figures",
                  description: "Your face is your business. Don't let Facebook ruin it.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-[#0087C7]" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Why Now?</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              The stakes for online reputation have never been higher.
            </p>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: MessageSquareWarning,
                  title: "Cancel Culture",
                  description:
                    "Public figures and everyday people alike are facing increased scrutiny for past statements.",
                },
                {
                  icon: Zap,
                  title: "AI Trust Gap",
                  description: "As AI becomes more prevalent, trust in digital content and authenticity is declining.",
                },
                {
                  icon: AlertCircle,
                  title: "Deepfakes + Impersonation",
                  description:
                    "Distinguishing real from fake content is increasingly difficult, raising the stakes for authentic posts.",
                },
                {
                  icon: Clock4,
                  title: "Manual Review is Slow",
                  description: "Manual review is tedious, slow, and shallow — we scan years of posts in minutes.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#0087C7]/10 w-10 h-10 rounded-full flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-[#0087C7]" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">Ready to protect your reputation?</h2>
              <Button
                size="lg"
                className="gap-2 text-lg md:text-xl px-6 md:px-10 py-6 md:py-8 bg-[#0087C7] hover:bg-[#0087C7]/90 text-white"
                asChild
              >
                <Link href="/waitlist">
                  Join the Waitlist <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
