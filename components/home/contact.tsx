"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSuccessMessage(
            `Thank you, ${formData.name}! I’ll reach out to you regarding "${formData.subject}".`
          );
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSuccessMessage(""), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title text-center">Get In Touch</h2>
      <p className="text-zinc-300 text-center max-w-2xl mx-auto mb-12">
        Have a project in mind or want to discuss potential opportunities? Feel
        free to reach out!
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="portfolio-card p-6 mb-6">
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 text-purple-400 mr-3" />
              <h3 className="text-lg font-bold">Email</h3>
            </div>
            <p className="text-zinc-300">prateekdevtripathi@gmail.com</p>
          </div>

          <div className="portfolio-card p-6 mb-6">
            <div className="flex items-center mb-4">
              <Phone className="h-5 w-5 text-purple-400 mr-3" />
              <h3 className="text-lg font-bold">Phone</h3>
            </div>
            <p className="text-zinc-300">+91 7208124621</p>
          </div>

          <div className="portfolio-card p-6 mb-6">
            <div className="flex items-center mb-4">
              <FaWhatsapp className="h-5 w-5 text-purple-400 mr-3" />
              <h3 className="text-lg font-bold">WhatsApp</h3>
            </div>
            <p className="text-zinc-300">+91 8808394438</p>
          </div>

          <div className="portfolio-card p-6">
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-purple-400 mr-3" />
              <h3 className="text-lg font-bold">Location</h3>
            </div>
            <p className="text-zinc-300">India</p>
          </div>
        </div>

        <div className="portfolio-card p-6">
          <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="portfolio-button-primary flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </button>

            {successMessage && (
              <p className="text-green-400 mt-4">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
