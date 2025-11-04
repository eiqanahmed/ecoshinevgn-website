"use client"
import React from 'react'
import { useState } from 'react'

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      const [submitted, setSubmitted] = useState(false)
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setSubmitted(true)
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          })
          setSubmitted(false)
        }, 2000)
      }

    return (
    <div>
        <section className="bg-gradient-to-r from-[#0a0d3a] to-[#0a0d3a] py-16">
            <h1 className="text-4xl font-bold text-white text-center">Contact
                <span className="text-brandRed"> Us</span>
            </h1>
        </section>
        <div style={{ borderTop: "4px solid #c83232" }} />

        <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              {/* <h1 className="text-5xl font-bold mb-8" style={{ color: "#0a0d3a" }}>
                Contact us
              </h1> */}

              <div className="space-y-8">
                <p className="text-lg leading-relaxed" style={{ color: "#000000" }}>
                  In addition, if you would like to speak with us directly regarding office cleaning, you can call us at
                  +1 (647) 655-3526. Our customer service representatives are available 9am- 9pm to assist you.
                </p>

                <p className="text-lg leading-relaxed font-semibold" style={{ color: "#0a0d3a" }}>
                  As we are currently experiencing a high volume of bookings, there may be instances where our
                  representatives are unable to answer your call. If this happens, we kindly request that you send us an
                  email at ecoshinevaughan@gmail.com or fill out the contact form provided here. This will ensure that
                  we receive your message and can promptly assist you with your needs.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name*"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition"
                    style={{ borderColor: "#ddd" }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Active email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition"
                    style={{ borderColor: "#ddd" }}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition"
                    style={{ borderColor: "#ddd" }}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition"
                    style={{ borderColor: "#ddd" }}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message*"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition resize-none"
                    style={{ borderColor: "#ddd" }}
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full font-semibold text-white bg-brandRed hover:bg-navy"
                    
                  >
                    {submitted ? "Message Sent!" : "Send Request"}
                  </button>
                  <span className="text-sm" style={{ color: "#666" }}>
                    * Required Fields
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <div style={{ borderTop: "4px solid #c83232" }} /> */}
      </main>
    </div>
      )
}

