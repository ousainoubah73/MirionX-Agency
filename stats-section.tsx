"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const stats = [
  { value: 150, label: "Projects Completed", prefix: "", suffix: "+" },
  { value: 1.5, label: "Years of Experience", prefix: "", suffix: "+" },
  { value: 95, label: "Client Satisfaction", prefix: "", suffix: "%" },
  { value: 10, label: "Team Members", prefix: "", suffix: "" },
]

export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-black">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" ref={ref}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black border-primary/20 art-deco-border overflow-hidden">
                <CardContent className="p-6 text-center relative">
                  <div className="art-deco-pattern absolute inset-0 opacity-10"></div>
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-bold mb-2 gradient-text"
                  />
                  <p className="text-primary/80">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, prefix = "", suffix = "", className = "" }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    let startTime
    let animationFrame
    const duration = 2000 // 2 seconds

    if (inView) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [end, inView])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

