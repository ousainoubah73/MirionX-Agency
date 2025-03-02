"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const team = [
  {
    name: "Mirion Eve",
    position: "CEO & Founder",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250120-WA0026.jpg-BBTEZgJSkzrNiDrQ29hfOl3QR6zsI4.jpeg",
    bio: "With years of experience in digital innovation, Mirion leads our team with vision and expertise.",
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Ebirama Jarju",
    position: "Creative Director",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250208-WA0035.jpg-cch2JHUgraNmHz99kL4LNcu8xEJ7gH.jpeg",
    bio: "Ebirama brings creative excellence to every project, ensuring our designs are both beautiful and functional.",
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Junior Animashaun",
    position: "Technical Lead",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250208-WA0029.jpg-CJOoCmNYcwC8QCkhBHDldy2DBKunHy.jpeg",
    bio: "Junior's technical expertise drives our development process, creating robust and scalable solutions.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Modoulamin Sanneh",
    position: "Marketing Strategist",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0010.jpg-uIwb67PqU4DsznkQQ9kRG1JqSVuT6Y.jpeg",
    bio: "Lamin crafts data-driven marketing strategies that help our clients reach their target audience effectively.",
    social: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
    },
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

export function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="team" className="section-padding bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Our talented team of experts is passionate about creating exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden card-hover h-full">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">{member.position}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.social.twitter && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                    )}
                    {member.social.instagram && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-4 w-4" />
                          <span className="sr-only">Instagram</span>
                        </a>
                      </Button>
                    )}
                    {member.social.facebook && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-4 w-4" />
                          <span className="sr-only">Facebook</span>
                        </a>
                      </Button>
                    )}
                  </div>
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
          <a href="https://form.jotform.com/250582695641060" target="_blank" rel="noopener noreferrer">
            <Button size="lg">Join Our Team</Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

