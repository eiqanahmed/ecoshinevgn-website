import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/latestecoshinelogo.png"
              alt="Ecoshine Vaughan Logo"
              width={128}
              height={128}
              className="h-24 w-24"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-navy font-medium hover:text-brandRed">
              HOME
            </Link>
            <Link href="/about-us" className="text-navy hover:text-brandRed">
              ABOUT US
            </Link>
            {/* <Link href="#" className="text-gray-700 hover:text-[#0a0d3a]">
              AREA WE SERVE
            </Link> */}
            <Link href="/services" className="text-navy hover:text-brandRed">
              SERVICES
            </Link>
            <Link href="/quote" className="text-navy hover:text-brandRed">
              GET A QUOTE
            </Link>
            <Link href="/contact-us" className="text-navy hover:text-brandRed">
              CONTACT US
            </Link>
          </nav>

          <div className="w-32"></div>
        </div>
      </div>
    </header>
  )
}