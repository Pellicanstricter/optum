import Link from "next/link"
import { ArrowLeft, ArrowRight, Search, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
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
              <Link href="/about" className="text-sm font-medium text-[#FF5F00]">
                About Us
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
                <h1 className="text-3xl font-bold text-gray-800 mb-4">About FindMedicare by OptumNow</h1>
                <p className="text-gray-600 mb-6 text-lg">
                  FindMedicare by OptumNow is a multi-carrier broker platform that takes a digital-first approach to
                  Medicare Advantage enrollment while focusing on nurturing customer relationships beyond the initial
                  enrollment period.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Core Concept</h2>
                <p className="text-gray-600 mb-6">
                  Our platform centers around <span className="font-bold text-[#FF5F00]">Pathfinder</span>, the first
                  native AI-powered, omnichannel Medicare shopping experience in the market. This comprehensive solution
                  aims to simplify the Medicare enrollment process through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>AI-powered copilot for digital enrollment</li>
                  <li>Personalized plan recommendations</li>
                  <li>Seamless integration between online and offline experiences</li>
                  <li>Support from both AI agents and human agents</li>
                </ul>
                <div className="bg-[#FFF0E6] p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Why We're Different</h3>
                  <p className="text-gray-700">
                    Unlike traditional Medicare brokers that focus solely on enrollment, FindMedicare by OptumNow stays
                    with you throughout your Medicare journey, providing ongoing support, personalized recommendations,
                    and valuable resources to help you make the most of your healthcare benefits.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-sm overflow-hidden">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Multi-Modal Enrollment Engine</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                    <li>Works year-round, not just during open enrollment periods</li>
                    <li>Potential to be offered as a SaaS model on other websites to increase scale</li>
                    <li>Includes authentication experiences to encourage users to return for enrollment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm overflow-hidden">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">First 3-Month Retention Focus</h3>
                  <p className="text-gray-600 mb-4">
                    We place special emphasis on the critical first three months after enrollment with four key tenants:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">ON Member Discounts</span> - Exclusive savings on prescriptions,
                      medical supplies, and everyday health products
                    </li>
                    <li>
                      <span className="font-medium">Auto-schedule Visits</span> - We'll help you schedule doctor visits
                      and send reminders for important appointments
                    </li>
                    <li>
                      <span className="font-medium">Prescription Delivery</span> - Get your medications delivered right
                      to your door with our convenient service
                    </li>
                    <li>
                      <span className="font-medium">OTC Reminders</span> - Smart reminders for OTC benefits and regular
                      plan check-ins to maximize your coverage
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-sm overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ongoing Engagement Strategy</h3>
                <p className="text-gray-600 mb-4">
                  To maintain engagement beyond initial enrollment, our platform includes:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-[#F5F7F9] p-4 rounded-lg">
                    <div className="rounded-full bg-[#FFF0E6] p-3 w-12 h-12 flex items-center justify-center mb-3">
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
                        className="h-6 w-6"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Quarterly Engagement Points</h4>
                    <p className="text-gray-600">Regular reminders about benefits like OTC credits</p>
                  </div>
                  <div className="bg-[#F5F7F9] p-4 rounded-lg">
                    <div className="rounded-full bg-[#FFF0E6] p-3 w-12 h-12 flex items-center justify-center mb-3">
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
                        className="h-6 w-6"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Personalized Content</h4>
                    <p className="text-gray-600">Tailored information based on member needs and preferences</p>
                  </div>
                  <div className="bg-[#F5F7F9] p-4 rounded-lg">
                    <div className="rounded-full bg-[#FFF0E6] p-3 w-12 h-12 flex items-center justify-center mb-3">
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
                        className="h-6 w-6"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Proactive Outreach</h4>
                    <p className="text-gray-600">
                      Communications about new plans or recommendations to stay with current plans
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Customer Journey</h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#FF5F00] hidden md:block"></div>
                  <div className="space-y-8 relative">
                    <div className="md:pl-12 relative">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#FF5F00] text-white flex items-center justify-center hidden md:flex">
                        1
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">GUIDE</h3>
                      <p className="text-gray-600">
                        We help you navigate the complex world of Medicare through educational content, personalized
                        recommendations, and expert guidance from both AI and human advisors.
                      </p>
                    </div>
                    <div className="md:pl-12 relative">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#FF5F00] text-white flex items-center justify-center hidden md:flex">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">DECIDE</h3>
                      <p className="text-gray-600">
                        Our efficient omni-channel enrollment engine helps you make informed decisions about your
                        Medicare coverage, with support available whenever and however you need it.
                      </p>
                    </div>
                    <div className="md:pl-12 relative">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#FF5F00] text-white flex items-center justify-center hidden md:flex">
                        3
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">TREATMENT</h3>
                      <p className="text-gray-600">
                        During the critical first three months, we focus on integrated member onboarding to ensure you
                        get the most from your plan, including help with doctor appointments, prescriptions, and
                        exclusive discounts.
                      </p>
                    </div>
                    <div className="md:pl-12 relative">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#FF5F00] text-white flex items-center justify-center hidden md:flex">
                        4
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">TRANSFORMATION</h3>
                      <p className="text-gray-600">
                        We maintain a relationship with you throughout the year with proactive check-ins, personalized
                        content, and timely reminders about benefits and upcoming enrollment periods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF0E6] rounded-lg shadow-sm p-6 md:p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to experience the FindMedicare difference?
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Start your journey with us today and discover how we're reimagining Medicare enrollment and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#FF5F00] hover:bg-[#E55500] text-white" asChild>
                  <Link href="/find-plans">
                    Find a Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-[#FF5F00] text-[#FF5F00] hover:bg-[#FFF0E6]">
                  Contact Us
                </Button>
              </div>
            </div>
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
