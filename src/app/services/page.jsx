"use client"

import { useState } from "react"

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        <span className="text-2xl text-[#c83232]">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="px-6 py-4 bg-gray-50 text-gray-700">{answer}</div>}
    </div>
  )
}

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "House Cleaning",
      image: "/house-cleaning.jpg",
      description:
        "We offer routine cleaning services for frequently used areas of your home. Our house cleaning service goes beyond the basics to give you a pristine home. Our standard package services are easy to use and provide quick results. Learn more about what is included.",
    },
    {
      id: 2,
      title: "Office Cleaning",
      image: "/office-cleaning.jpg",
      description:
        "We offer professional office cleaning service that encompasses all areas of your workspace. Our office cleaning services include dusting and mopping of all surfaces to ensure your office environment is immaculate for your employees and visitors. Contact us for a quote.",
    },
    {
      id: 3,
      title: "Move In/Out Cleaning",
      image: "/move-cleaning.jpg",
      description:
        "We provide a comprehensive cleaning service that covers all areas of the home. From bathrooms and kitchens to bedrooms and living areas, we ensure thorough cleaning of all surfaces to provide you with a fully cleaned home. Our service is designed to meet your unique needs.",
    },
    {
      id: 4,
      title: "After Renovation Cleaning",
      image: "/renovation-cleaning.jpg",
      description:
        "After renovation cleaning is a thorough and efficient service that removes dust and debris left after construction work. Our after-renovation cleaning service is designed to prepare your space for a new beginning. Learn how our team can tackle your space.",
    },
  ]

  const faqs = [
    {
      question: "DO WE SERVICE MY AREA?",
      answer:
        "Booking our cleaning services is a breeze. Visit our booking page and enter your details, once done take a look at the rates to see what we have to offer. You can also call us or chat to further assist you.",
    },
    {
      question: "HOW DO I BOOK A CLEANING SERVICE?",
      answer:
        "Booking our cleaning services is a breeze. Visit our booking page and enter your details, once done take a look at the rates to see what we have to offer. You can also call us or chat to further assist you.",
    },
    {
      question: "DO YOU BRING YOUR OWN TOOLS AND SUPPLIES?",
      answer:
        "Yes, we bring all our own professional-grade cleaning equipment and supplies to every appointment. We are fully stocked with everything needed to ensure your space is cleaned to the highest standards.",
    },
    {
      question: "DO WE HAVE TO BE IN-HOUSE DURING CLEANING?",
      answer:
        "You do not need to be home during our cleaning service. Many of our clients provide access codes or keys for our team to complete the work.",
    },
    {
      question: "WHAT SERVICES ARE NOT OFFERED?",
      answer:
        "We focus on standard residential and commercial cleaning services. For specialized services or unique requests, please contact us directly to discuss your needs.",
    },
    {
      question: "WHAT IS THE NUMBER OF PEOPLE THAT WILL COME FOR THE CLEANING?",
      answer:
        "The number of team members varies based on the size and scope of your cleaning project. We will discuss this with you when you book.",
    },
    {
      question: "WHAT TIME CAN WE EXPECT A PROFESSIONAL TO ARRIVE?",
      answer:
        "Arrival times depend on your booking and scheduling preferences. We will confirm a specific time window when you schedule your service.",
    },
    {
      question: "WHAT ARE THE PAYMENT OPTIONS AVAILABLE FOR THE SERVICE?",
      answer:
        "We accept multiple payment methods including credit cards, bank transfers, and cash. We will discuss payment options when you book your service.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Services Header */}
      <section className="bg-gradient-to-r from-[#0a0d3a] to-[#0a0d3a] py-16">
        <h1 className="text-4xl font-bold text-white text-center">Services</h1>
      </section>
      <div style={{ borderTop: "4px solid #c83232" }} />

      {/* Services Packages Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#0a0d3a]">Our Cleaning Services Packages</h2>
          <div className="h-1 w-20 bg-[#c83232] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0a0d3a] mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <button className="w-full bg-[#c83232] hover:bg-red-700 text-white font-semibold py-2 rounded transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0a0d3a]">FAQs</h2>

          <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy w-3/4 mx-auto rounded-xl shadow-2xl mb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Flex container: text block + button */}
          <div className="flex items-center justify-between gap-8 flex-wrap">
            
            {/* Left side: heading + paragraph */}
            <div className="flex-1 min-w-[250px]">
              <h2 className="text-3xl font-bold text-white mb-2">
                Try out our Cleaning Services
              </h2>
              <p className="text-white">
                If you are looking for one specific cleaning package, we can certainly
                match all your requirements.
              </p>
            </div>

            {/* Right side: button */}
            <button className="bg-[#c83232] hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors whitespace-nowrap">
              BOOK ONLINE
            </button>
          </div>
        </div>
      </section>



    </div>
  )
}
