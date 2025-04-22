import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Filter, Search, ShoppingCart, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlanFinder() {
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
              <Link href="#" className="text-sm font-medium hover:text-[#FF5F00]">
                Medicare Plans
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-[#FF5F00]">
                Find Providers
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-[#FF5F00]">
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

          <div className="grid gap-6 md:grid-cols-[300px_1fr] lg:gap-12">
            <div className="space-y-6">
              <Card className="border-0 shadow-sm overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-4 text-gray-800">Filter Plans</h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-800">Plan Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="advantage" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="advantage"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Medicare Advantage (12)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="supplement" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="supplement"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Medicare Supplement (8)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="drug" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="drug"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Prescription Drug (10)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-800">Insurance Carrier</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="uhc" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="uhc"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            UnitedHealthcare (5)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="aetna" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="aetna"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Aetna (4)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="humana" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="humana"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Humana (3)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cigna" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="cigna"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Cigna (3)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="bcbs" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="bcbs"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Blue Cross Blue Shield (5)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-800">Monthly Premium</h3>
                      <div className="space-y-4">
                        <Slider defaultValue={[150]} max={500} step={10} className="[&>span]:bg-[#FF5F00]" />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">$0</span>
                          <span className="text-sm font-medium text-gray-800">$150</span>
                          <span className="text-sm text-gray-600">$500+</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-800">Star Rating</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="5star" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="5star"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                          >
                            <div className="flex mr-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            5 Stars (3)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="4star" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="4star"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                          >
                            <div className="flex mr-1">
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                              <Star className="h-4 w-4 fill-gray-200 text-gray-200" />
                            </div>
                            4+ Stars (8)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="3star" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="3star"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                          >
                            <div className="flex mr-1">
                              {[...Array(3)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                              {[...Array(2)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-gray-200 text-gray-200" />
                              ))}
                            </div>
                            3+ Stars (12)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-800">Additional Benefits</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="dental" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="dental"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Dental Coverage (10)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="vision" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="vision"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Vision Coverage (9)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hearing" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="hearing"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Hearing Coverage (8)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fitness" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="fitness"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Fitness Benefits (7)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="transportation" className="text-[#FF5F00] border-gray-300" />
                          <label
                            htmlFor="transportation"
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Transportation (5)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <Button className="w-full bg-[#FF5F00] hover:bg-[#E55500] text-white">Apply Filters</Button>
                      <Button variant="outline" className="w-full border-gray-300 text-gray-700">
                        Reset All
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* New Prescription Savings Card */}
              <Card className="border-0 shadow-sm overflow-hidden bg-gradient-to-br from-[#FFF0E6] to-white">
                <CardContent className="p-6">
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
                    <h2 className="text-lg font-bold text-gray-800">Prescription Savings</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Medicare Advantage plans with integrated prescription coverage can save you up to 80% on medication
                    costs.
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-gray-100 mb-4">
                    <div className="text-2xl font-bold text-[#FF5F00]">$4,500+</div>
                    <div className="text-xs text-gray-600">Average annual savings</div>
                  </div>
                  <Button className="w-full bg-[#FF5F00] hover:bg-[#E55500] text-white">Find Rx Plans</Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-4 text-gray-800">Need Help?</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Our licensed Medicare advisors can help you find the right plan for your needs.
                  </p>
                  <Button className="w-full bg-[#FF5F00] hover:bg-[#E55500] text-white">Call 1-800-555-1234</Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-800">Medicare Plans in Phoenix, AZ 85001</h1>
                      <p className="text-gray-600">20 plans available in your area</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 border-gray-300 text-gray-700"
                      >
                        <Filter className="h-4 w-4" />
                        <span className="hidden md:inline">Filters</span>
                      </Button>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                          type="search"
                          placeholder="Search plans..."
                          className="w-full md:w-[200px] pl-8 border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm overflow-hidden">
                <CardContent className="p-6">
                  <Tabs defaultValue="advantage">
                    <TabsList className="grid w-full grid-cols-3 bg-[#F5F7F9] p-1">
                      <TabsTrigger
                        value="advantage"
                        className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                      >
                        Medicare Advantage
                      </TabsTrigger>
                      <TabsTrigger
                        value="supplement"
                        className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                      >
                        Medicare Supplement
                      </TabsTrigger>
                      <TabsTrigger
                        value="drug"
                        className="data-[state=active]:bg-white data-[state=active]:text-[#FF5F00] data-[state=active]:shadow-sm"
                      >
                        Prescription Drug
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="advantage" className="space-y-4 mt-6">
                      {[1, 2, 3].map((i) => (
                        <Card key={i} className="border border-gray-200 overflow-hidden">
                          <div className="md:flex">
                            <div className="border-b md:border-b-0 md:border-r p-4 md:p-6 md:w-64 flex flex-col items-center justify-center text-center bg-white">
                              <Image
                                src="/placeholder.svg?height=60&width=120"
                                alt="UnitedHealthcare"
                                width={120}
                                height={60}
                                className="mb-2"
                              />
                              <h3 className="font-bold text-gray-800">UnitedHealthcare</h3>
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
                                  <h3 className="text-xl font-bold text-gray-800">AARP Medicare Advantage Choice</h3>
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
                                    Available in Phoenix, AZ 85001
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
                                    <div className="text-gray-800">Included</div>
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-600">Out-of-Pocket Max</div>
                                    <div className="text-gray-800">$5,900</div>
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
                                  </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                  <Button className="sm:flex-1 bg-[#FF5F00] hover:bg-[#E55500] text-white">
                                    View Plan Details
                                  </Button>
                                  <Button variant="outline" className="sm:flex-1 border-gray-300 text-gray-700">
                                    Compare
                                  </Button>
                                  <Button
                                    variant="secondary"
                                    className="sm:flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800"
                                  >
                                    Enroll Now
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))}

                      <div className="flex justify-center mt-8">
                        <Button
                          variant="outline"
                          className="mx-auto border-[#FF5F00] text-[#FF5F00] hover:bg-[#FFF0E6]"
                        >
                          Load More Plans
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="supplement" className="space-y-4 mt-6">
                      <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-800">Medicare Supplement Plans</h3>
                        <p className="text-gray-600 mt-2">
                          Compare Medicare Supplement plans to find coverage that works with Original Medicare.
                        </p>
                        <Button className="mt-4 bg-[#FF5F00] hover:bg-[#E55500] text-white">
                          View Medicare Supplement Plans
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="drug" className="space-y-4 mt-6">
                      <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-800">Prescription Drug Plans</h3>
                        <p className="text-gray-600 mt-2">
                          Find Part D plans that cover your medications at the lowest cost.
                        </p>
                        <Button className="mt-4 bg-[#FF5F00] hover:bg-[#E55500] text-white">
                          View Prescription Drug Plans
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
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
