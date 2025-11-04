import { Search, Sun, Album as Vacuum, Sparkles, Home, CheckCircle, Droplets, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThreeEasySteps } from "./three-easy-steps"

export default function LandingPage() {
  return (
    <div className="min-h-screen  bg-white">

      {/* Hero Section */}
      <section className="relative bg-[#0a0d3a] overflow-hidden">
        <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Best Cleaning Service in
              <br />
              <span className="text-white">Ontario</span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the magic of a sparkling clean home or office with Ecoshine Vaughan! Take the next
              step towards a happy, fresh space and hire us today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <button className="bg-[#c83232] hover:bg-[#c83232]/90 text-white px-8 py-3 text-lg font-medium rounded-md transition-colors duration-200">
                Our Services
              </button>
            </Link>
              <Link href="/quote">
                <button className="border-2 border-gray-400 text-white bg-transparent hover:bg-white hover:text-[#0a0d3a] px-8 py-3 text-lg font-medium rounded-md transition-colors duration-200">
                  GET A QUOTE
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top Left - Cleaning Supplies */}
          <div className="absolute top-20 left-10 opacity-20">
            <div className="bg-[#c83232] rounded-lg p-4 transform rotate-12">
              <Droplets className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Top Right - Checklist */}
          <div className="absolute top-16 right-16 opacity-20">
            <div className="bg-[#c83232] rounded-lg p-4 transform -rotate-12">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Middle Left - Vacuum */}
          <div className="absolute top-1/2 left-8 opacity-15">
            <div className="bg-[#c83232] rounded-lg p-6 transform rotate-45">
              <Vacuum className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Middle Right - House */}
          <div className="absolute top-1/2 right-12 opacity-15">
            <div className="bg-[#c83232] rounded-lg p-6 transform -rotate-45">
              <Home className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Bottom Left - Sparkles */}
          <div className="absolute bottom-20 left-16 opacity-20">
            <div className="bg-[#c83232] rounded-lg p-4 transform rotate-12">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Bottom Right - Lightning */}
          <div className="absolute bottom-24 right-8 opacity-20">
            <div className="bg-[#c83232] rounded-lg p-4 transform -rotate-12">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Additional scattered elements */}
          <div className="absolute top-32 left-1/3 opacity-10">
            <div className="w-3 h-3 bg-[#c83232] rounded-full"></div>
          </div>
          <div className="absolute top-40 right-1/4 opacity-10">
            <div className="w-2 h-2 bg-[#c83232] rounded-full"></div>
          </div>
          <div className="absolute bottom-32 left-1/4 opacity-10">
            <div className="w-4 h-4 bg-[#c83232] rounded-full"></div>
          </div>
          <div className="absolute bottom-40 right-1/3 opacity-10">
            <div className="w-2 h-2 bg-[#c83232] rounded-full"></div>
          </div>
        </div>
      </section>
      <div className="mb-16" style={{ borderTop: "4px solid #c83232" }} />

      <ThreeEasySteps />

      <section className="py-16 md:py-20 w-3/4 mx-auto">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-navy tracking-wide mb-2">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">
            The Benefits of Hiring Professional Cleaners
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Image and Description */}
          <div>
            <img
              src="/professional-cleaning-team.jpg"
              alt="Professional cleaning team"
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <p className="text-foreground leading-relaxed mb-4">
              Our team members are handpicked cleaning professionals that have superior attention to detail and years of
              experience. We deliver spotless results tailored to each neighborhood. We offer expert deep cleaning with
              uniformed, professional cleaners who use the highest-quality products. All jobs are fully insured at no
              additional cost to you. Your experience is important to us, and it is our goal to take care of all of your
              cleaning needs.
            </p>
          </div>

          {/* Right Column - Description and Features */}
          <div>
            <p className="text-foreground leading-relaxed mb-8">
              At our company, we offer spectacular home and office cleaning services across the region. Our customers
              trust our reputable, reliable, and local family-owned deep cleaning company. This is why we have more than
              700+ Google reviews. When it comes down to it, we are your one-stop-shop for all of your cleaning service
              needs. Reach out to us today for a free quote in seconds!
            </p>

            <Link href="/quote">
              <button className="mb-12 px-8 py-3 bg-navy hover:bg-brandRed text-white font-semibold rounded-full transition-colors">
                Book a service now
              </button>
            </Link>

            {/* Feature Boxes Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-4xl mb-2">💰</div>
                <h3 className="font-semibold text-primary mb-2">No Gas Fee</h3>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-4xl mb-2">✓</div>
                <h3 className="font-semibold text-primary mb-2">No Hidden Fees</h3>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-4xl mb-2">🛠</div>
                <h3 className="font-semibold text-primary mb-2">No Cleaning Equipment Fee</h3>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-4xl mb-2">🛡</div>
                <h3 className="font-semibold text-primary mb-2">Free Insurance Included</h3>
              </div>
            </div>

            {/* Living Wage Commitment */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-3">Living Wage Commitment</h3>
              <p className="text-foreground text-sm leading-relaxed">
                We believe in valuing our team members as essential partners in our success. As a proud living wage
                provider, we are committed to fair pay and making a meaningful impact in the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
