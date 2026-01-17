import CodeAnimations from "@/components/CodeAnimations";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen border-t border-[#2d2d2d] flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 lg:mb-16">
         Contactez-moi
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <CodeAnimations />
        <ContactForm />



      </div>
    </section>
  );
}
