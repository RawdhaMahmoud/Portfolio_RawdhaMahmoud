"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import InputField from "./ui/InputField";
import TextAreaField from "./ui/TextAreaField";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center  p-10  overflow-hidden bg-[#1e1e1e] border border-white/10 sm:p-8 rounded-lg shadow-lg">
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 lg:mb-8">
        Envoyez-moi un message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex  gap-4">
        <InputField
          label="Prénom"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="John"
          required
        />
        <InputField
          label="Nom"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Doe"
          required
        />
        </div>

        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
          required
        />

        <InputField
          label="Téléphone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+33 6 12 34 56 78"
        />

        <TextAreaField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Décrivez votre projet ou posez-moi une question..."
          required
        />
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-blue-400 bg-gradient-to-br from-primary to-secondary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-intense disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
