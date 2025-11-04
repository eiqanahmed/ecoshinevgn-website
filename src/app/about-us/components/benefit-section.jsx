"use client"

import Image from "next/image"

// interface BenefitSectionProps {
//   title: string
//   subtitle?: string
//   description: string
//   image: string
//   imagePosition: "left" | "right"
// }

export function BenefitSection({ title, subtitle, description, image, imagePosition }) {
  const isImageLeft = imagePosition === "left"

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white" >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={isImageLeft ? "order-1" : "order-2"}>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className={isImageLeft ? "order-2" : "order-1"}>
            <h2 className="text-4xl font-bold mb-2" style={{ color: "#0a0d3a" }}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg mb-6" style={{ color: "#c83232" }}>
                {subtitle}
              </p>
            )}
            <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
