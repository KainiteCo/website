"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image' // Import the Image component from next/image
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes" // Import useTheme

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme() // Get the current theme

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="mr-auto">
            {/* Conditionally render logos based on the theme */}
            {theme === "dark" ? (
              <Image 
                src="/white.png" 
                alt="Logo" 
                width={40} 
                height={10} // Adjust width and height as needed
              />
            ) : (
              <Image 
                src="/black.png" 
                alt="Logo" 
                width={40} 
                height={10} // Adjust width and height as needed
              />
            )}
          </Link>

          <div className="hidden md:flex items-center ml-12 flex-grow">
            <Link href="#features" className="text-sm font-medium hover:text-primary mx-4">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary mx-4">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary mx-4">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary mx-4">
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Sign Up
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden ml-auto">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="#features" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                  Features
                </Link>
                <Link href="#pricing" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
                <Link href="#testimonials" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                  Testimonials
                </Link>
                <Link href="#faq" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                  FAQ
                </Link>
                <ThemeToggle />
                <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
