import CodeAnimations from "@/components/CodeAnimations";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1a1a1a] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      aria-labelledby="contact-heading"
    >
      {/* Background gradient mesh */}
     
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Contact Me
          </h2>
        </div>

        {/* Two Column Layout - Equal Width & Height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch justify-items-center">
          {/* Left - Code Animation Card */}
          <div className="relative order-2 lg:order-1 w-full max-w-md">
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/15 via-violet-500/15 to-indigo-500/15 rounded-3xl blur-xl opacity-70" />
            
            {/* Glassmorphism Card */}
            <div className="relative h-full bg-[#1e1e2e]/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/30 flex items-center justify-center overflow-hidden">
              <CodeAnimations />
            </div>
          </div>

          {/* Right - Contact Form Card */}
          <div className="relative order-1 lg:order-2 w-full max-w-md">
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/15 via-violet-500/15 to-indigo-500/15 rounded-3xl blur-xl opacity-70" />
            
            {/* Glassmorphism Card */}
            <div className="relative h-full bg-[#1e1e2e]/70 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/30 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                Envoyez-moi un message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}