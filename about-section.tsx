"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = [
  "2+ years of industry experience",
  "Award-winning team of experts",
  "Tailored solutions for your business",
  "Transparent communication and process",
  "Ongoing support and maintenance",
  "Commitment to meeting deadlines",
]

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleLearnMore = () => {
    // Add functionality for Learn More button
    console.log("Learn More clicked")
  }

  const handleMeetTeam = () => {
    // Add functionality for Meet Our Team button
    console.log("Meet Our Team clicked")
  }

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250208-WA0022.jpg-OxhlNt1rMsuPyJPWGeAlak8rX8IQxL.jpeg"
                alt="MirionX Agency Team"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-primary/50 rounded-2xl transform -rotate-3 -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-10 -right-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Founded in 2025</div>
                  <div className="text-xs text-muted-foreground">Young & Innovative</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We're a team of creative minds and tech enthusiasts
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At MirionX, we combine creativity with technical expertise to deliver digital solutions that help
                businesses grow and succeed in the digital age. Our approach is collaborative, innovative, and focused
                on achieving measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="mr-4" onClick={handleLearnMore}>
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg" onClick={handleMeetTeam}>
                Meet Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

