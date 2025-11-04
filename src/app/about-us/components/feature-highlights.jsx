"use client"

import { Users, Heart, Phone, Clock, Calendar } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Trusted Professionals",
    description: "Our team is dedicated, trained, and committed to excellence in every detail.",
  },
  {
    icon: Heart,
    title: "We Care",
    description: "Your satisfaction is our priority. We treat your space like our own.",
  },
  {
    icon: Phone,
    title: "Customer Service",
    description: "Available by phone, online, chat, text or email whenever you need us.",
  },
  {
    icon: Clock,
    title: "Simple Process",
    description: "Get an instant quote and book online. All quotes are based on requirements.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Update your booking online anytime. Change dates free of charge up to 72 hours.",
  },
]

export function FeatureHighlights() {
  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#c83232" }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#0a0d3a" }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}