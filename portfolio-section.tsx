"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Brand Identity", "Web Design", "Social Media", "Marketing", "UI/UX", "Print Design"]

const projects = [
  {
    title: "Tech Startup Branding",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    description: "Modern logo and brand identity for an innovative tech startup.",
  },
  {
    title: "Clothing Brand Website",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Clean and professional website design for a trendy clothing brand.",
  },
  {
    title: "Fitness Influencer Instagram",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Stylish Instagram feed design and templates for a fitness influencer.",
  },
  {
    title: "Local Business Facebook Ad",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "High-quality Facebook ad campaign for a local business.",
  },
  {
    title: "E-commerce Website",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    description: "Sleek website design for an e-commerce platform.",
  },
  {
    title: "Luxury Consultant Business Card",
    category: "Print Design",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Elegant business card design for a high-end consultant.",
  },
  {
    title: "Eco-friendly Brand Identity",
    category: "Brand Identity",
    image: "/placeholder.svg?text=Eco+Brand+Identity",
    description: "Sustainable brand identity design for an eco-friendly company.",
  },
  {
    title: "Travel Blog Website",
    category: "Web Design",
    image: "/placeholder.svg?text=Travel+Blog",
    description: "Engaging and responsive website design for a popular travel blog.",
  },
  {
    title: "Beauty Brand TikTok Content",
    category: "Social Media",
    image: "/placeholder.svg?text=TikTok+Content",
    description: "Creative TikTok content strategy and design for a beauty brand.",
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

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Portfolio</h2>
          <p className="text-muted-foreground text-lg">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden card-hover group art-deco-border">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-primary/20 backdrop-blur-sm text-white border-primary/20 hover:bg-primary/30"
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
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
        ></motion.div>
      </div>
    </section>
  )
}

