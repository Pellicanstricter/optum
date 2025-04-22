import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, ChevronDown, Filter, Search, ShoppingCart, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function FindPlans() {
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
              <Link href="/about" className="text-sm font-medium hover:text-[#FF5F00]">
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
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Medicare Advantage Plans</h1>
                <p className="text-gray-600 mb-6">
                  Compare Medicare Advantage plans with integrated prescription coverage to find the right fit for your
                  healthcare needs.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#FFF0E6] rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-[#FF5F00] p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
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
                      <h2 className="text-lg font-bold text-gray-800">Integrated Prescription Coverage</h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Medicare Advantage plans with integrated prescription coverage can save you up to 80% on
                      medication costs.
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="text-2xl font-bold text-[#FF5F00]">$4,500+</div>
                        <div className="text-xs text-gray-600">Average annual savings</div>
                      </div>
                      <div className="flex-1 text-sm text-gray-700">
                        Compared to Original Medicare without drug coverage
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#E6F2F8] rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-[#0078D4] p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <h2 className="text-lg font-bold text-gray-800">Need Help Choosing?</h2>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our licensed Medicare advisors can help you find the right plan for your specific needs.
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="text-lg font-bold text-[#0078D4]">1-800-555-1234</div>
                        <div className="text-xs text-gray-600">TTY: 711</div>
                      </div>
                      <div className="flex-1 text-sm text-gray-700">Mon-Fri, 8am-8pm</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="search"
                        placeholder="Search plans..."
                        className="w-full md:w-[250px] pl-8 border-gray-300"
                      />
                    </div>
                    <div className="relative">
                      <Input type="text" placeholder="Enter ZIP code" className="w-full md:w-[150px] border-gray-300" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-gray-300 text-gray-700"
                    >
                      <Filter className="h-4 w-4" />
                      <span>Filter Plans</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-gray-300 text-gray-700"
                    >
                      <span>Sort By</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="all" className="mb-6">
                  <TabsList className="bg-[#F5F7F9] p-1">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                    >
                      All Plans
                    </TabsTrigger>
                    <TabsTrigger
                      value="zero"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                    >
                      $0 Premium
                    </TabsTrigger>
                    <TabsTrigger
                      value="rx"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                    >
                      With Rx Coverage
                    </TabsTrigger>
                    <TabsTrigger
                      value="dental"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                    >
                      With Dental
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <div className="space-y-6">
              {/* Plan 1 */}
              <Card className="border-0 shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="border-b md:border-b-0 md:border-r p-4 md:p-6 md:w-64 flex flex-col items-center justify-center text-center bg-white">
                    <Badge className="mb-3 bg-[#FF5F00]">Most Popular</Badge>
                    <div className="flex items-center justify-center mb-2">
                      <Image
                        src="/images/optum-healthcare-provider.png"
                        alt="UnitedHealthcare"
                        width={120}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-800">UnitedHealthcare</h3>
                    <div className="flex items-center justify-center my-2">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-5 w-5 ${j < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">5.0 out of 5 stars</div>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-[#FF5F00]">$0</div>
                      <div className="text-sm text-gray-600">monthly premium</div>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6 flex-1 bg-white">
                    <div className="grid gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">AARP Medicare Advantage Choice Premier</h3>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
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
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          Available nationwide
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-600">Plan Type</div>
                          <div className="text-gray-800">PPO</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Medical Deductible</div>
                          <div className="text-gray-800">$0</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Drug Coverage</div>
                          <div className="text-gray-800 flex items-center">
                            <Check className="h-4 w-4 text-[#FF5F00] mr-1" />
                            Included
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Out-of-Pocket Max</div>
                          <div className="text-gray-800">$4,500</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-600 mb-2">Additional Benefits</div>
                        <div className="flex flex-wrap gap-2">
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Dental
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Vision
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Hearing
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Fitness
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            OTC Allowance
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Telehealth
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#FFF0E6] p-3 rounded-lg">
                        <div className="flex items-center">
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
                            className="h-5 w-5 mr-2"
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
                          <div className="text-sm font-medium text-gray-800">
                            Integrated prescription coverage with $0 deductible and low copays
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button className="sm:flex-1 bg-[#FF5F00] hover:bg-[#E55500] text-white">
                          View Plan Details
                        </Button>
                        <Button variant="outline" className="sm:flex-1 border-gray-300 text-gray-700">
                          Compare
                        </Button>
                        <Button variant="secondary" className="sm:flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800">
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Plan 2 */}
              <Card className="border-0 shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="border-b md:border-b-0 md:border-r p-4 md:p-6 md:w-64 flex flex-col items-center justify-center text-center bg-white">
                    <Badge className="mb-3 bg-[#0078D4]">Best Value</Badge>
                    <div className="flex items-center justify-center mb-2">
                      <Image
                        src="/images/aetna-healthcare-provider.png"
                        alt="Aetna"
                        width={120}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-800">Aetna</h3>
                    <div className="flex items-center justify-center my-2">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-5 w-5 ${j < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">4.0 out of 5 stars</div>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-[#FF5F00]">$0</div>
                      <div className="text-sm text-gray-600">monthly premium</div>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6 flex-1 bg-white">
                    <div className="grid gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Aetna Medicare Elite Plan</h3>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
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
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          Available in 42 states
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-600">Plan Type</div>
                          <div className="text-gray-800">HMO-POS</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Medical Deductible</div>
                          <div className="text-gray-800">$0</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Drug Coverage</div>
                          <div className="text-gray-800 flex items-center">
                            <Check className="h-4 w-4 text-[#FF5F00] mr-1" />
                            Included
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Out-of-Pocket Max</div>
                          <div className="text-gray-800">$5,200</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-600 mb-2">Additional Benefits</div>
                        <div className="flex flex-wrap gap-2">
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Dental
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Vision
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Hearing
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Fitness
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Transportation
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#FFF0E6] p-3 rounded-lg">
                        <div className="flex items-center">
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
                            className="h-5 w-5 mr-2"
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
                          <div className="text-sm font-medium text-gray-800">
                            $200 quarterly allowance for over-the-counter medications
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button className="sm:flex-1 bg-[#FF5F00] hover:bg-[#E55500] text-white">
                          View Plan Details
                        </Button>
                        <Button variant="outline" className="sm:flex-1 border-gray-300 text-gray-700">
                          Compare
                        </Button>
                        <Button variant="secondary" className="sm:flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800">
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Plan 3 */}
              <Card className="border-0 shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="border-b md:border-b-0 md:border-r p-4 md:p-6 md:w-64 flex flex-col items-center justify-center text-center bg-white">
                    <Badge className="mb-3 bg-green-600">Best Benefits</Badge>
                    <div className="flex items-center justify-center mb-2">
                      <Image
                        src="/images/humana-healthcare-provider.png"
                        alt="Humana"
                        width={120}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-800">Humana</h3>
                    <div className="flex items-center justify-center my-2">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-5 w-5 ${j < 4.5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">4.5 out of 5 stars</div>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-[#FF5F00]">$15</div>
                      <div className="text-sm text-gray-600">monthly premium</div>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6 flex-1 bg-white">
                    <div className="grid gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Humana Gold Plus Enhanced</h3>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
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
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          Available in 36 states
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-600">Plan Type</div>
                          <div className="text-gray-800">HMO</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Medical Deductible</div>
                          <div className="text-gray-800">$0</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Drug Coverage</div>
                          <div className="text-gray-800 flex items-center">
                            <Check className="h-4 w-4 text-[#FF5F00] mr-1" />
                            Included
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-600">Out-of-Pocket Max</div>
                          <div className="text-gray-800">$3,900</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-600 mb-2">Additional Benefits</div>
                        <div className="flex flex-wrap gap-2">
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Dental
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Vision
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Hearing
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Fitness
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Meal Delivery
                          </div>
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                            <Check className="mr-1 h-3 w-3 text-[#FF5F00]" />
                            Transportation
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#FFF0E6] p-3 rounded-lg">
                        <div className="flex items-center">
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
                            className="h-5 w-5 mr-2"
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
                          <div className="text-sm font-medium text-gray-800">
                            Premium prescription coverage with $0 copays for Tier 1 drugs
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button className="sm:flex-1 bg-[#FF5F00] hover:bg-[#E55500] text-white">
                          View Plan Details
                        </Button>
                        <Button variant="outline" className="sm:flex-1 border-gray-300 text-gray-700">
                          Compare
                        </Button>
                        <Button variant="secondary" className="sm:flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800">
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>

              <div className="flex justify-center mt-8">
                <Button variant="outline" className="mx-auto border-[#FF5F00] text-[#FF5F00] hover:bg-[#FFF0E6]">
                  Load More Plans
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
