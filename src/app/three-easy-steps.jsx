export function ThreeEasySteps() {
    const steps = [
      {
        title: "RESERVE",
        description: "Easily select your desired date, time, and location for cleaning services.",
        image: "/reserve-step.jpg",
        icon: "📅",
      },
      {
        title: "SQUEAKY CLEAN",
        description: "A Squeaky Cleaning team member will clean your space.",
        image: "/squeaky-clean-step.jpg",
        icon: "✨",
      },
      {
        title: "ENJOY",
        description: "Relax and enjoy your Squeaky Clean home!",
        image: "/enjoy-step.jpg",
        icon: "🏠",
      },
    ]
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#0a0d3a" }}>
            3 Easy Steps to a Clean Home
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center border-2 border-navy hover:border-brandRed p-4 rounded-lg">
                {/* Image Container */}
                <div className="w-full h-64 rounded-lg overflow-hidden mb-4 ">
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                </div>
  
                {/* Icon Circle */}
                <div
                  className="flex items-center justify-center w-20 h-20 rounded-full mb-6 -mt-10 relative z-10 border-4 border-white shadow-lg"
                  style={{ backgroundColor: "#c83232" }}
                >
                  <span className="text-4xl">{step.icon}</span>
                </div>
  
                {/* Content */}
                <h3 className="text-lg font-bold text-center mb-3" style={{ color: "#0a0d3a" }}>
                  {step.title}
                </h3>
                <p className="text-center text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  