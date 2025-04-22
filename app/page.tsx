import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Search, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
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
              <span className="text-2xl font-bold text-[#FF5F00]">Optum</span>
              <span className="text-2xl font-bold text-gray-800">Now</span>
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F7F9] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent z-0"></div>
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-center hidden lg:block"
            style={{ backgroundImage: "url('/images/hero_img.png')" }}
          ></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-800">
                    Medicare <span className="text-[#FF5F00]">Advantage</span>
                    <br />
                    now
                  </h1>
                  <p className="text-gray-600 md:text-xl max-w-[600px]">
                    We make Medicare Advantage simple, clear, and personalized to your needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#FF5F00] hover:bg-[#E55500] text-white" asChild>
                    <Link href="/find-plans">
                      Find a plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:hidden">
                <Image
                  src="/images/hero_img.png"
                  alt="Healthcare provider with stethoscope"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 bg-[#E6F2F8]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white border-0 shadow-sm overflow-hidden">
                <Link href="/plan-finder" className="flex items-center p-6 h-full group">
                  <div className="rounded-full bg-[#FFF0E6] p-4 mr-4">
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
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">Compare Medicare plans</h3>
                    <p className="text-gray-600 text-sm">Find the right coverage for your needs</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#FF5F00] transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>

              <Card className="bg-white border-0 shadow-sm overflow-hidden">
                <Link href="/find-plans" className="flex items-center p-6 h-full group">
                  <div className="rounded-full bg-[#FFF0E6] p-4 mr-4">
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
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">Search for providers</h3>
                    <p className="text-gray-600 text-sm">Find doctors in your network</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#FF5F00] transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>

              <Card className="bg-white border-0 shadow-sm overflow-hidden">
                <Link href="/resources" className="flex items-center p-6 h-full group">
                  <div className="rounded-full bg-[#FFF0E6] p-4 mr-4">
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
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">Understand Medicare</h3>
                    <p className="text-gray-600 text-sm">Learn about your coverage options</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#FF5F00] transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* New Prescription Savings Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/healthcare-professionals.jpeg"
                  alt="Healthcare professionals reviewing prescription information"
                  width={600}
                  height={500}
                  className="rounded-lg object-cover mx-auto"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center rounded-full bg-[#FFF0E6] px-3 py-1 text-sm font-medium text-[#FF5F00]">
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
                    className="h-4 w-4 mr-1"
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
                  Save on Prescriptions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
                  Integrated Prescription Coverage Saves You More
                </h2>
                <p className="text-gray-600 text-lg">
                  Medicare Advantage plans with integrated prescription coverage can save you up to 80% on medication
                  costs compared to paying out-of-pocket.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#FFF0E6] p-2 mt-1">
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
                        className="h-4 w-4"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">One Card Simplicity</h3>
                      <p className="text-gray-600">Use a single card for both medical and prescription benefits</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#FFF0E6] p-2 mt-1">
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
                        className="h-4 w-4"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">$0 Premium Options</h3>
                      <p className="text-gray-600">
                        Many Medicare Advantage plans include prescription coverage at no additional premium
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#FFF0E6] p-2 mt-1">
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
                        className="h-4 w-4"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Coordinated Care</h3>
                      <p className="text-gray-600">
                        Your doctors and pharmacists work together to optimize your medication regimen
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex items-center p-4 bg-[#F5F7F9] rounded-lg border border-gray-100">
                    <div className="mr-4">
                      <div className="text-3xl font-bold text-[#FF5F00]">$4,500+</div>
                      <div className="text-sm text-gray-600">Average annual savings</div>
                    </div>
                    <div className="flex-1 text-gray-600">
                      The average Medicare beneficiary can save over $4,500 annually with an integrated Medicare
                      Advantage prescription plan compared to Original Medicare without drug coverage.
                    </div>
                  </div>
                </div>
                <Button className="bg-[#FF5F00] hover:bg-[#E55500] text-white" asChild>
                  <Link href="/find-plans">
                    Find plans with prescription coverage
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#F5F7F9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
                  Why Choose Medicare Advantage with Optum<span className="text-[#FF5F00]">Now</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  We make finding the right Medicare plan simple, personalized, and stress-free.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-[#FFF0E6] p-4 mb-4 w-16 h-16 flex items-center justify-center">
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
                <h3 className="text-xl font-bold text-gray-800">Personalized Guidance</h3>
                <p className="mt-2 text-gray-600">
                  Get personalized recommendations based on your healthcare needs, medications, and preferred doctors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-[#FFF0E6] p-4 mb-4 w-16 h-16 flex items-center justify-center">
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
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Trusted Experience</h3>
                <p className="mt-2 text-gray-600">
                  Backed by UnitedHealth Group's decades of healthcare experience and commitment to quality care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-[#FFF0E6] p-4 mb-4 w-16 h-16 flex items-center justify-center">
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
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Comprehensive Benefits</h3>
                <p className="mt-2 text-gray-600">
                  Access plans with additional benefits like dental, vision, hearing, fitness memberships, and more.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-[#FFF0E6] p-4 mb-4 w-16 h-16 flex items-center justify-center">
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
                <h3 className="text-xl font-bold text-gray-800">Educational Resources</h3>
                <p className="mt-2 text-gray-600">
                  Access clear, straightforward information to help you understand Medicare and make informed decisions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-[#FFF0E6] p-4 mb-4 w-16 h-16 flex items-center justify-center">
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
                <h3 className="text-xl font-bold text-gray-800">No-Cost Service</h3>
                <p className="mt-2 text-gray-600">
                  Our plan comparison and enrollment assistance services are available at no cost to you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-[#FFF0E6] p-4 mb-4 w-16 h-16 flex items-center justify-center">
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
                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                    <path d="M12 8v4l2 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Time-Saving Tools</h3>
                <p className="mt-2 text-gray-600">
                  Our digital tools make it easy to compare plans, check if your doctors and prescriptions are covered,
                  and enroll online.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/doctor-patient-meeting.jpeg"
                  alt="Doctor consulting with patient about Medicare options"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover mx-auto"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
                    Find a Medicare plan that's right for you
                  </h2>
                  <p className="text-gray-600 md:text-xl">
                    Enter your ZIP code to see available Medicare Advantage plans in your area.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1">
                    <Input placeholder="Enter ZIP code" className="h-12 border-gray-300" />
                  </div>
                  <Button className="h-12 bg-[#FF5F00] hover:bg-[#E55500] text-white" asChild>
                    <Link href="/find-plans">
                      Find Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  Or call us at <span className="font-bold">1-800-555-1234</span> (TTY: 711)
                </p>
                <p className="text-sm text-gray-500">Licensed Medicare advisors available: Mon-Fri, 8am-8pm</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#F5F7F9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
                  Common Medicare Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Get answers to frequently asked questions about Medicare.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {[
                {
                  q: "What is Medicare Advantage?",
                  a: "Medicare Advantage (Part C) plans are an all-in-one alternative to Original Medicare offered by private insurance companies. These plans typically include Part A (hospital), Part B (medical), and usually Part D (prescription drug) coverage, plus additional benefits not covered by Original Medicare.",
                },
                {
                  q: "When can I enroll in a Medicare Advantage plan?",
                  a: "You can enroll during your Initial Enrollment Period (when you first become eligible for Medicare), during the Annual Enrollment Period (October 15–December 7 each year), or during a Special Enrollment Period if you qualify due to certain life events.",
                },
                {
                  q: "What's the difference between Medicare Advantage and Medicare Supplement?",
                  a: "Medicare Advantage replaces Original Medicare with coverage from a private insurer, often including prescription drugs and extra benefits. Medicare Supplement (Medigap) works alongside Original Medicare to help cover out-of-pocket costs but doesn't include drug coverage.",
                },
                {
                  q: "Is Optum affiliated with UnitedHealthcare?",
                  a: "Yes, both Optum and UnitedHealthcare are part of UnitedHealth Group. While UnitedHealthcare focuses on health benefits and insurance, Optum provides health services, technology, and insights to help improve healthcare.",
                },
              ].map((faq, i) => (
                <Card key={i} className="border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800">{faq.q}</h3>
                    <p className="mt-2 text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}

              <div className="pt-4 text-center">
                <Button variant="outline" className="border-[#FF5F00] text-[#FF5F00] hover:bg-[#FFF0E6]">
                  View All FAQs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-[#FF5F00]">Optum</span>
                <span className="text-2xl font-bold text-gray-800">Now</span>
              </div>
              <p className="text-sm text-gray-600">
                OptumNow helps you find the right Medicare plan for your needs. We offer free, no-obligation
                consultations with licensed Medicare advisors.
              </p>
              <div className="text-sm text-gray-600">Part of UnitedHealth Group</div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">Medicare Plans</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Medicare Advantage
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Medicare Supplement
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Prescription Drug Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Dental & Vision Plans
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">Resources</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Medicare Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Enrollment Periods
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Medicare Glossary
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Medicare Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">Contact Us</h3>
              <ul className="grid gap-2">
                <li className="text-sm text-gray-600">Phone: 1-800-555-1234 (TTY: 711)</li>
                <li className="text-sm text-gray-600">Hours: Mon-Fri, 8am-8pm</li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Email Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#FF5F00]">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
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
