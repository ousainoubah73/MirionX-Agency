"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Palette,
  Globe,
  Share2,
  CreditCard,
  Megaphone,
  Smartphone,
  RefreshCwIcon as Refresh,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const services = [
  {
    icon: <Palette className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Brand Identity Design",
    description: "Logo creation, brand color palettes, typography, and visual identity development.",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Website Design & Development",
    description: "Professional, responsive, and SEO-friendly websites.",
  },
  {
    icon: <Share2 className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Social Media Branding",
    description:
      "Profile optimization, content templates, and branding strategy for platforms like Instagram, TikTok, and YouTube.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Business Card & Print Design",
    description: "High-quality business cards, flyers, and marketing materials.",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Marketing & Ad Creatives",
    description: "Eye-catching graphics and animations for ads, promotions, and campaigns.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "UI/UX Design",
    description: "Creating sleek, user-friendly interfaces for websites and apps.",
  },
  {
    icon: <Refresh className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    title: "Rebranding Services",
    description: "Refreshing old brand visuals to align with modern trends and business goals.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of creative and digital services to help your business stand out and succeed.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto group" size="sm">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  )
}

