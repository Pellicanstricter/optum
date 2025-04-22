import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Download, Search, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Resources() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-6">
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Menu</span>
            </button>
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[#FF5F00]">FindMedicare</span>
              <span className="text-2xl font-bold text-gray-800"> by OptumNow</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/find-plans" className="text-sm font-medium hover:text-[#FF5F00]">
                Medicare Plans
              </Link>
              <Link href="/resources" className="text-sm font-medium hover:text-[#FF5F00]">
                Resources
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
            <button className="hidden md:flex items-center gap-2 text-sm font-medium">
              <User className="h-5 w-5" />
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-[#F5F7F9]">
        <div className="container px-4 py-6 md:px-6">
          <div className="flex items-center gap-2 mb-6">
            <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-[#FF5F00]">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Medicare Resources</h1>
                <p className="text-gray-600 mb-6">
                  Access helpful information and tools to better understand Medicare and make informed decisions about
                  your healthcare coverage.
                </p>
              </div>
            </div>

            <Tabs defaultValue="guides" className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <TabsList className="grid w-full grid-cols-4 bg-[#F5F7F9] p-1">
                  <TabsTrigger
                    value="guides"
                    className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                  >
                    Guides
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                  >
                    Videos
                  </TabsTrigger>
                  <TabsTrigger
                    value="tools"
                    className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                  >
                    Tools
                  </TabsTrigger>
                  <TabsTrigger
                    value="faq"
                    className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                  >
                    FAQ
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="guides" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Medicare 101: Understanding the Basics",
                      description:
                        "A comprehensive guide to Medicare Parts A, B, C, and D, eligibility requirements, and enrollment periods.",
                      image: "/images/doctor-patient-meeting.jpeg",
                      downloadable: true,
                    },
                    {
                      title: "Medicare Advantage vs. Original Medicare",
                      description:
                        "Compare the benefits, costs, and coverage options between Medicare Advantage and Original Medicare.",
                      image: "/images/healthcare-professionals.jpeg",
                      downloadable: true,
                    },
                    {
                      title: "Prescription Drug Coverage Guide",
                      description:
                        "Learn about Medicare Part D, formularies, the donut hole, and how to save on prescription medications.",
                      image: "/images/doctor-patient-consultation.webp",
                      downloadable: true,
                    },
                    {
                      title: "Medicare Enrollment Periods Explained",
                      description:
                        "Understand Initial Enrollment, Annual Enrollment, and Special Enrollment Periods for Medicare.",
                      image: "/images/optum-healthcare-provider.png",
                      downloadable: true,
                    },
                    {
                      title: "Medicare Costs & Coverage",
                      description:
                        "A detailed breakdown of premiums, deductibles, copayments, and coinsurance for Medicare plans.",
                      image: "/images/doctor-patient-meeting.jpeg",
                      downloadable: true,
                    },
                    {
                      title: "Medicare for Those with Chronic Conditions",
                      description:
                        "Special considerations and plan options for beneficiaries managing chronic health conditions.",
                      image: "/images/healthcare-professionals.jpeg",
                      downloadable: true,
                    },
                  ].map((guide, i) => (
                    <Card key={i} className="overflow-hidden border-0 shadow-sm">
                      <div className="relative h-48">
                        <Image
                          src={guide.image || "/placeholder.svg"}
                          alt={guide.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{guide.title}</h3>
                        <p className="text-gray-600 mb-4">{guide.description}</p>
                        <div className="flex gap-2">
                          <Button className="bg-[#FF5F00] hover:bg-[#E55500] text-white">Read Guide</Button>
                          {guide.downloadable && (
                            <Button variant="outline" className="border-gray-300">
                              <Download className="h-4 w-4 mr-2" />
                              PDF
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Medicare Explained in 5 Minutes",
                      description: "A quick overview of Medicare and its different parts.",
                      duration: "5:12",
                    },
                    {
                      title: "How to Choose the Right Medicare Plan",
                      description: "Step-by-step guidance on selecting a Medicare plan that fits your needs.",
                      duration: "8:45",
                    },
                    {
                      title: "Medicare Advantage Benefits Explained",
                      description: "Learn about the extra benefits available with Medicare Advantage plans.",
                      duration: "6:30",
                    },
                    {
                      title: "Understanding Medicare Prescription Coverage",
                      description: "A detailed explanation of how Medicare Part D works.",
                      duration: "7:15",
                    },
                    {
                      title: "Medicare Enrollment: When and How to Sign Up",
                      description: "Important deadlines and processes for Medicare enrollment.",
                      duration: "9:20",
                    },
                    {
                      title: "Medicare Costs Breakdown",
                      description: "Understanding premiums, deductibles, and out-of-pocket costs.",
                      duration: "4:55",
                    },
                  ].map((video, i) => (
                    <Card key={i} className="overflow-hidden border-0 shadow-sm">
                      <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-white/80 p-4 shadow-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#FF5F00"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-8 w-8"
                            >
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
                        <p className="text-gray-600 mb-4">{video.description}</p>
                        <Button className="w-full bg-[#FF5F00] hover:bg-[#E55500] text-white">Watch Video</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tools" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="rounded-full bg-[#FFF0E6] p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF5F00"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Medicare Plan Comparison Tool</h3>
                      <p className="text-gray-600 mb-4">
                        Compare Medicare Advantage, Medicare Supplement, and Prescription Drug plans side by side to
                        find the best option for your needs.
                      </p>
                      <Button className="bg-[#FF5F00] hover:bg-[#E55500] text-white">
                        Compare Plans
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="rounded-full bg-[#FFF0E6] p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF5F00"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8"
                        >
                          <path d="m9 9-2 2" />
                          <path d="M13 13 A 1 1 0 0 0 13 13 A 1 1 0 0 0 13 13" />
                          <path d="M10 13 A 1 1 0 0 0 10 13 A 1 1 0 0 0 10 13" />
                          <rect width="13" height="13" x="5.5" y="5.5" rx="2" />
                          <path d="M13.5 10.5c1-1 2.5-1 2.5-1v4c0 1-1 2-2 2" />
                          <path d="M13.5 10.5V15" />
                          <path d="M9.5 10.5c-1-1-2.5-1-2.5-1v4c0 1 1 2 2 2" />
                          <path d="M9.5 10.5V15" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Prescription Drug Coverage Checker</h3>
                      <p className="text-gray-600 mb-4">
                        Enter your medications to see which Medicare plans cover them and at what cost. Find the most
                        affordable option for your prescriptions.
                      </p>
                      <Button className="bg-[#FF5F00] hover:bg-[#E55500] text-white">
                        Check Drug Coverage
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="rounded-full bg-[#FFF0E6] p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF5F00"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8"
                        >
                          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Medicare Cost Calculator</h3>
                      <p className="text-gray-600 mb-4">
                        Estimate your annual Medicare costs based on your healthcare needs, including premiums,
                        deductibles, and out-of-pocket expenses.
                      </p>
                      <Button className="bg-[#FF5F00] hover:bg-[#E55500] text-white">
                        Calculate Costs
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="rounded-full bg-[#FFF0E6] p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF5F00"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8"
                        >
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                          <path d="M8 14h.01" />
                          <path d="M12 14h.01" />
                          <path d="M16 14h.01" />
                          <path d="M8 18h.01" />
                          <path d="M12 18h.01" />
                          <path d="M16 18h.01" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Enrollment Period Reminder</h3>
                      <p className="text-gray-600 mb-4">
                        Sign up for personalized reminders about your Medicare enrollment periods so you never miss an
                        important deadline.
                      </p>
                      <Button className="bg-[#FF5F00] hover:bg-[#E55500] text-white">
                        Set Reminders
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {[
                        {
                          q: "What is Medicare?",
                          a: "Medicare is the federal health insurance program for people who are 65 or older, certain younger people with disabilities, and people with End-Stage Renal Disease. It consists of Part A (Hospital Insurance), Part B (Medical Insurance), Part C (Medicare Advantage), and Part D (Prescription Drug Coverage).",
                        },
                        {
                          q: "When can I enroll in Medicare?",
                          a: "You can enroll in Medicare during your Initial Enrollment Period (IEP), which is a 7-month period that begins 3 months before the month you turn 65, includes the month you turn 65, and ends 3 months after the month you turn 65. You can also enroll during the Annual Enrollment Period (October 15–December 7) or during a Special Enrollment Period if you qualify.",
                        },
                        {
                          q: "What's the difference between Original Medicare and Medicare Advantage?",
                          a: "Original Medicare consists of Part A (Hospital Insurance) and Part B (Medical Insurance) and is provided by the federal government. Medicare Advantage (Part C) plans are offered by private insurance companies approved by Medicare and typically include Part A, Part B, and often Part D coverage, plus additional benefits like dental, vision, and hearing coverage.",
                        },
                        {
                          q: "Do I need to sign up for Medicare if I'm still working and have employer coverage?",
                          a: "It depends on the size of your employer. If your employer has 20 or more employees, you can delay enrolling in Medicare without penalty as long as you're covered by the employer plan. If your employer has fewer than 20 employees, Medicare generally becomes your primary insurance, and you should enroll when first eligible to avoid gaps in coverage and late enrollment penalties.",
                        },
                        {
                          q: "What is the Medicare Part D 'donut hole' or coverage gap?",
                          a: "The Medicare Part D 'donut hole' or coverage gap is a temporary limit on what your drug plan will cover. In 2023, once you and your plan have spent $4,660 on covered drugs, you're in the coverage gap. While in the gap, you'll pay no more than 25% of the cost for covered brand-name and generic drugs. You exit the gap when your out-of-pocket costs reach $7,400.",
                        },
                        {
                          q: "Can I change my Medicare plan after I've enrolled?",
                          a: "Yes, you can change your Medicare plan during the Annual Enrollment Period (October 15–December 7) each year. If you have a Medicare Advantage plan, you can also make one change during the Medicare Advantage Open Enrollment Period (January 1–March 31). Additionally, you may qualify for a Special Enrollment Period to change plans if you experience certain life events.",
                        },
                        {
                          q: "What is Medigap or Medicare Supplement Insurance?",
                          a: "Medigap, or Medicare Supplement Insurance, is private insurance that helps pay some of the healthcare costs that Original Medicare doesn't cover, such as copayments, coinsurance, and deductibles. Medigap policies are standardized and must follow federal and state laws. They're identified by letters A through N, and each standardized policy must offer the same basic benefits, regardless of which insurance company sells it.",
                        },
                        {
                          q: "Is Optum affiliated with UnitedHealthcare?",
                          a: "Yes, both Optum and UnitedHealthcare are part of UnitedHealth Group. While UnitedHealthcare focuses on health benefits and insurance, Optum provides health services, technology, and insights to help improve healthcare.",
                        },
                      ].map((faq, i) => (
                        <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                          <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.q}</h3>
                          <p className="text-gray-600">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Still have questions?</h3>
                  <p className="text-gray-600 mb-4">
                    Our licensed Medicare advisors are ready to help you understand your options and find the right
                    plan.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-[#FF5F00] hover:bg-[#E55500] text-white">Call 1-800-555-1234</Button>
                    <Button variant="outline" className="border-gray-300">
                      Email Us
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="container px-4 py-6 md:px-6">
          <div className="text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} OptumNow. All rights reserved.</p>
            <p className="mt-2">
              OptumNow is a non-government website operated by Optum, a part of UnitedHealth Group. Medicare has neither
              reviewed nor endorsed the information on this site.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
