"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience to create a tailored strategy.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Our team develops a comprehensive plan with timelines, deliverables, and key milestones.",
  },
  {
    step: "03",
    title: "Design",
    description: "We create intuitive, engaging designs that align with your brand and meet user needs.",
  },
  {
    step: "04",
    title: "Development",
    description: "Our developers build robust, scalable solutions using the latest technologies and best practices.",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Rigorous testing ensures your product is bug-free, secure, and performs optimally across all devices.",
  },
  {
    step: "06",
    title: "Launch",
    description: "We handle the deployment process and provide ongoing support to ensure a successful launch.",
  },
]

export function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground text-lg">
            We follow a structured approach to ensure every project is delivered on time, on budget, and exceeds
            expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

