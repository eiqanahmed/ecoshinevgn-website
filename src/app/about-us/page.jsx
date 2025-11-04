"use client"
import { FeatureHighlights } from "./components/feature-highlights"
import { BenefitSection } from "./components/benefit-section"

const AboutUs = () => {
    return (
        <div className="bg-white">
        {/* First Section - About Text */}
        <section className="bg-gradient-to-r from-[#0a0d3a] to-[#0a0d3a] py-16">
          <h1 className="text-4xl font-bold text-white text-center">About
            <span className="text-brandRed"> Us</span>
          </h1>
          
        </section>
        <div className="mb-16"style={{ borderTop: "4px solid #c83232" }} />
        <FeatureHighlights />
        <div style={{ borderTop: "4px solid #c83232" }} />

        <BenefitSection
        title="Why Choose Ecoshine?"
        subtitle="Get the job done right the first time!"
        description="We are dedicated to providing high-quality cleaning services with the utmost importance that a sparkling clean environment has on your mind, body and soul. From the moment you interact with our company, we strive to be straightforward and designed to ensure our cleaning is completed to the highest standard of cleanliness."
        image="/modern-living-room.jpg"
        imagePosition="left"
      />

      <BenefitSection
        title="Trusted Cleaning Professionals"
        description="Our Ecoshine Cleaners are handpicked cleaning professionals that have superior attention to detail and years of experience working with the same group of amazing cleaners for many years and stand behind the quality of their work. Our cleaners are friendly, hard working and extremely detail-oriented."
        image="/professional-cleaning-team.jpg"
        imagePosition="right"
      />

      <BenefitSection
        title="Simple Booking Process"
        description="Generate an instant quote and book online based on a recommended number of cleaning hours. All our quotes are based on the number of rooms in your home and the hours spent cleaning. The total cleaning time required will depend on the condition of the property and what you need done during the appointment."
        image="/booking-calendar-interface.png"
        imagePosition="left"
      />

      <BenefitSection
        title="Flexible Scheduling"
        description="All you need to do is let us know when you need your cleaning and if something needs to change, update your booking online. Make your booking free of charge right until 72 hours of your scheduled appointment."
        image="/flexible-scheduling.png"
        imagePosition="right"
      />

      <BenefitSection
        title="High Quality Results"
        description="Completing your cleaning to the highest standard of cleanliness is our top priority. At the time of booking, we take detailed notes of everything you could like done. On the day of your appointment we will get right to work doing a detailed cleaning of everything required. If we missed anything we can stay longer and add extra time to guarantee high-quality results."
        image="/spotless-clean-home.jpg"
        imagePosition="left"
      />
      </div>
    )
  }
  
  export default AboutUs
  