"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    quote:
      "Working with MirionX was a game-changer for our business. Their team delivered a website that exceeded our expectations and has significantly improved our online presence.",
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthLabs",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    quote:
      "The team at MirionX is incredibly talented and professional. They took the time to understand our needs and delivered a solution that perfectly aligned with our brand vision.",
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, EcoWare",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    quote:
      "MirionX helped us transform our digital strategy. Their expertise in both design and development resulted in a platform that has dramatically increased our customer engagement.",
  },
  {
    name: "David Kim",
    position: "CTO, FinanceFlow",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    quote:
      "The attention to detail and technical expertise of the MirionX team is outstanding. They built a secure, scalable solution that has streamlined our operations.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = () => {
    // For mobile, show only the current testimonial
    // For larger screens, show 2 testimonials
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    if (isMobile) {
      return [testimonials[currentIndex]]
    }

    // For desktop, show 2 testimonials
    const secondIndex = (currentIndex + 1) % testimonials.length
    return [testimonials[currentIndex], testimonials[secondIndex]]
  }

  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {visibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex-1"
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-blue-500/20 mb-4" />
                    <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

