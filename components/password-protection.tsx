"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

// You can change this to any password you want
const SITE_PASSWORD = "optumnow"

export function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  // Check if the user is already authenticated (using localStorage)
  useEffect(() => {
    const authenticated = localStorage.getItem("optum-authenticated") === "true"
    setIsAuthenticated(authenticated)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === SITE_PASSWORD) {
      localStorage.setItem("optum-authenticated", "true")
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-2xl font-bold text-[#FF5F00]">Optum</span>
            <span className="text-2xl font-bold text-gray-800">Now</span>
          </div>
          <CardTitle className="text-xl">Password Protected</CardTitle>
          <CardDescription>This site is password protected. Please enter the password to continue.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={error ? "border-red-500" : ""}
                />
                {error && <p className="text-sm text-red-500">Incorrect password. Please try again.</p>}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-[#FF5F00] hover:bg-[#E55500] text-white">
              Access Site
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
