"use client"
import React from 'react'
import { useState } from 'react'

export default function QuoteRequest() {

    const [formData, setFormData] = useState({
        areaToClean: "",
        name: "",
        email: "",
        phone: "",
        hearAboutUs: "",
        appointmentDate: "",
        address: "",
        city: "",
        province: "",
        postalCode: "",
        serviceType: "",
        houseType: "",
        condition: "",
        mainFloorBedrooms: "",
        mainFloorBathrooms: "",
        mainFloorCarpetCleaning: "",
        bedrooms: "",
        carpetCleaning: "",
        bathrooms: "",
        livingArea: "",
        kitchen: "",
        appliance: "",
        pets: "",
        comments: "",
        disclaimer: false,
      })
    
      const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }))
      }
    
      const handleCheckboxChange = (e) => {
        const { name, checked } = e.target
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }))
      }
    
      // const handleSubmit = (e) => {
      //   e.preventDefault()
      //   console.log("Form submitted:", formData)
      //   alert("Thank you for your quotation request! We will be in touch soon.")
      // }
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch("../api/quotes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          const json = await res.json();
          if (!res.ok) {
            alert(`Failed: ${json.error || "Unknown error"}`);
            return;
          }
          alert("Thank you! We received your request.");
          // Optionally clear form
          // setFormData(prev => ({ ...prev, name:"", email:"", ... }))
        } catch (e) {
          alert("Network error. Please try again.");
        }
      };
      
    
      const showSteps = formData.areaToClean !== ""

  return (
    <div className='text-navy'>
        <section className="bg-gradient-to-r from-[#0a0d3a] to-[#0a0d3a] py-16">
            <h1 className="text-4xl font-bold text-white text-center">Quote
            <span className="text-brandRed"> Request</span>
            </h1>
        </section>
        
        <div className="mb-16" style={{ borderTop: "4px solid #c83232" }} />
        

        <section>
            <p className='font-bold flex items-center justify-center pb-12'>
            Welcome to Ecoshine Vaughan! Kindly find the booking form below to proceed. 
            Based on your requirements, we will be pleased to send you a quotation.
            </p>
        </section>

        <div style={{ borderTop: "4px solid #c83232" }} />

        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="rounded-lg p-8 shadow-md bg-white">
            <h1 className="text-4xl font-bold mb-8" style={{ color: "#0a0d3a" }}>
              Quotation Form
            </h1>

            <form onSubmit={handleSubmit}>
              {/* Initial Question */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-3" style={{ color: "#0a0d3a" }}>
                  Which areas of your home would you like us to clean?
                </label>
                <select
                  name="areaToClean"
                  value={formData.areaToClean}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  style={{ borderColor: "#e0e0e0" }}
                >
                  <option value="">Select an area</option>
                  <option value="basement">Basement Only</option>
                  <option value="mainFloor">Top and Main Floor</option>
                  <option value="wholeHouse">Whole House</option>
                  {/* <option value="office">Office</option> */}
                </select>
              </div>

              {/* Conditional Rendering - Show after first question */}
              {showSteps && (
                <>
                  {/* STEP 1: WHO YOU ARE */}
                  <div className="mb-8 pb-8 border-b" style={{ borderColor: "#e0e0e0" }}>
                    <h2 className="text-xl font-bold mb-2" style={{ color: "#0a0d3a" }}>
                      STEP 1: WHO YOU ARE
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                      This information will be used to contact you about your service
                    </p>

                    {/* Name Field */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                        Name <span style={{ color: "#c83232" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded"
                        style={{ borderColor: "#e0e0e0" }}
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                          Email <span style={{ color: "#c83232" }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded"
                          style={{ borderColor: "#e0e0e0" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                          Phone Number <span style={{ color: "#c83232" }}>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded"
                          style={{ borderColor: "#e0e0e0" }}
                        />
                      </div>
                    </div>

                    {/* How did you hear about us */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                        How did you hear about us? <span style={{ color: "#c83232" }}>*</span>
                      </label>
                      <select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded"
                        style={{ borderColor: "#e0e0e0" }}
                      >
                        <option value="">Select</option>
                        <option value="google">Google</option>
                        <option value="facebook">Facebook</option>
                        <option value="friend">Friend/Family</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Appointment Date */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                        Please select your approximate date and time for us to visit your house for cleaning:
                      </label>
                      <input
                        type="datetime-local"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded"
                        style={{ borderColor: "#e0e0e0" }}
                      />
                    </div>
                  </div>

                  {/* STEP 2: YOUR HOME */}
                  <div className="mb-8 pb-8 border-b" style={{ borderColor: "#e0e0e0" }}>
                    <h2 className="text-xl font-bold mb-4" style={{ color: "#0a0d3a" }}>
                      STEP 2: YOUR HOME
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">Where would you like us to clean?</p>

                    {/* Address */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded"
                          style={{ borderColor: "#e0e0e0" }}
                        />
                      </div>
                    </div>

                    {/* City, Province, Zip Code */}
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                          City <span style={{ color: "#c83232" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded"
                          style={{ borderColor: "#e0e0e0" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                          Province
                        </label>
                        <input
                          type="text"
                          name="province"
                          value={formData.province}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded"
                          style={{ borderColor: "#e0e0e0" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                          Postal Code
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded"
                          style={{ borderColor: "#e0e0e0" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* STEP 3: PLEASE FILL UP THE DETAILS */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4" style={{ color: "#0a0d3a" }}>
                      STEP 3: PLEASE FILL OUT THE DETAILS
                    </h2>

                    {/* <p className="text-sm text-gray-700 mb-6">
                      If you're cleaning your house for the first time or after a long time, it's better to opt for deep
                      cleaning rather than standard cleaning. Standard cleaning is ideal for regular maintenance, as it
                      focuses on everyday dirt on surfaces, floors, and furniture.
                    </p> */}

                    {/* Service Type */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                        What type of cleaning service you would like? <span style={{ color: "#c83232" }}>*</span>
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded"
                        style={{ borderColor: "#e0e0e0" }}
                      >
                        <option value="">Select</option>
                        <option value="standard">Move In/Out Cleaning</option>
                        <option value="standard">After Renovation Cleaning</option>
                        <option value="deep">After Painting Cleaning</option>
                        <option value="maintenance">After Renovation + Painting Cleaning</option>
                        <option value="maintenance">Standard Cleaning</option>
                      </select>
                    </div>

                    {/* House-specific questions */}
                    {(formData.areaToClean === "wholeHouse" || formData.areaToClean === "mainFloor") && (
                      <>
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                          What type of house do you have? <span style={{ color: "#c83232" }}>*</span>
                        </label>
                        <select
                          name="houseType"
                          value={formData.houseType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded"
                          style={{ borderColor: "#e0e0e0" }}
                        >
                          <option value="">Select</option>
                          <option value="condo">Condo/Apartment</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="bungalow">Bungalow</option>
                          <option value="detached">Detached</option>
                          <option value="semi">Semi-Detached</option>
                        </select>
                      </div>


                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                        What is the condition of the house, especially the bathroom and kitchen? Please rate them on a scale of 1 to 10 (1 being very dirty and 10 being very clean). <span style={{ color: "#c83232" }}>*</span>
                        </label>
                        <select
                          name="condition"
                          value={formData.condition}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded"
                          style={{ borderColor: "#e0e0e0" }}
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>

                      <div className="mb-4">
                          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                            How many Bedrooms?
                          </label>
                          <select
                            name="mainFloorBedrooms"
                            value={formData.mainFloorBedrooms}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            style={{ borderColor: "#e0e0e0" }}
                          >
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="5+">5+</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                            How many Bathrooms?
                          </label>
                          <select
                            name="mainFloorBathrooms"
                            value={formData.mainFloorBathrooms}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            style={{ borderColor: "#e0e0e0" }}
                          >
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3+</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                            What kind of carpet cleaning would you like?
                          </label>
                          <select
                            name="mainFloorCarpetCleaning"
                            value={formData.mainFloorCarpetCleaning}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            style={{ borderColor: "#e0e0e0" }}
                          >
                            <option value="">Select</option>
                            <option value="vacuum">Carpet Wash Cleaning</option>
                            <option value="washcleaning">Carpet Dry Vacuum</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* Basement-specific questions */}
                    {formData.areaToClean === "basement" && (
                      <>
                        <p className="text-sm font-semibold mb-4" style={{ color: "#0a0d3a" }}>
                          Please select the details for Basement Cleaning Service
                        </p>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                            How many Bedrooms in Basement?
                          </label>
                          <select
                            name="bedrooms"
                            value={formData.bedrooms}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            style={{ borderColor: "#e0e0e0" }}
                          >
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3+</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                            What kind of carpet cleaning do you want for the basement?
                          </label>
                          <select
                            name="carpetCleaning"
                            value={formData.carpetCleaning}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            style={{ borderColor: "#e0e0e0" }}
                          >
                            <option value="">Select</option>
                            <option value="steam">Steam Cleaning</option>
                            <option value="dry">Dry Cleaning</option>
                            <option value="both">Both</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                            How many Bathrooms in Basement?
                          </label>
                          <select
                            name="bathrooms"
                            value={formData.bathrooms}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            style={{ borderColor: "#e0e0e0" }}
                          >
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3+</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                            Do you want to clean living area in basement?
                          </label>
                          <select
                            name="livingArea"
                            value={formData.livingArea}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            style={{ borderColor: "#e0e0e0" }}
                          >
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                            Do you want to clean kitchen in basement?
                          </label>
                          <select
                            name="kitchen"
                            value={formData.kitchen}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            style={{ borderColor: "#e0e0e0" }}
                          >
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                            Please Choose the Appliance for Cleaning Basement
                          </label>
                          <select
                            name="appliance"
                            value={formData.appliance}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            style={{ borderColor: "#e0e0e0" }}
                          >
                            <option value="">Select</option>
                            <option value="inside">Appliance Inside</option>
                            <option value="outside">Appliance Outside</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                        Do you have any pets?
                      </label>
                      <select
                        name="pets"
                        value={formData.pets}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded"
                        style={{ borderColor: "#e0e0e0" }}
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    {/* Comments */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-2" style={{ color: "#0a0d3a" }}>
                        Any Comments
                      </label>
                      <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-2 border rounded"
                        style={{ borderColor: "#e0e0e0" }}
                      />
                    </div>

                    {/* Disclaimer */}
                    <div className="mb-6 flex items-start">
                      <input
                        type="checkbox"
                        name="disclaimer"
                        checked={formData.disclaimer}
                        onChange={handleCheckboxChange}
                        className="mt-1 mr-3"
                      />
                      <label className="text-sm text-gray-700">I have read and agree to the disclaimer page</label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full font-semibold text-white transition bg-brandRed hover:bg-navy"
                      
                    >
                      Submit Form
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </main>
      
    </div>
  )
}

