"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              We're hiring! Join our team
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas Into
              <span className="gradient-text"> Digital Experiences</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              We're a creative digital agency that helps businesses grow by crafting innovative digital solutions that
              drive results and create meaningful connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://form.jotform.com/250588647204058"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button size="lg" className="group">
                  Hire Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>

            <div className="flex items-center pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-background">
                    <Image src={`/placeholder.svg?text=User${i}`} alt={`User ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="font-medium">Trusted by 50+ clients</div>
                <div className="text-sm text-muted-foreground">Across The country</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="MirionX Agency Team"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-10 -right-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center space-x-4"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Fast Delivery</div>
                <div className="text-xs text-muted-foreground">2x faster than industry average</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-10 left-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center space-x-4"
            >
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">98% Success Rate</div>
                <div className="text-xs text-muted-foreground">Based on client feedback</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-16">
          <Link
            href="#services"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}

