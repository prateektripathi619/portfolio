"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formType, setFormType] = useState<
    "general" | "project" | "contract" | "partnership"
  >("general");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tech: "",
    company: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name || "N/A",
          email: formData.email || "N/A",
          message: formData.message || "No message provided.",
          tech: formData.tech || "N/A",
          company: formData.company || "N/A",
          inquiry_type: formType || "N/A",
          subject: `${formData.name} - ${formType} Inquiry`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSuccessMessage("Thank you! I’ll get back to you soon.");
          setFormData({
            name: "",
            email: "",
            message: "",
            tech: "",
            company: "",
          });
          setTimeout(() => setSuccessMessage(""), 5000);
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Contact Me
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300">
              Passionate about solving real-world problems through clean,
              efficient code — I’m a software developer based in India, open to
              freelance gigs, contract roles, or full-time collaborations. Let’s
              connect and create impactful digital experiences together!
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="valioux-card p-6 text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-bold mb-2">Email Me</h3>
            <p className="text-zinc-300">prateekdevtripathi@gmail.com</p>
          </div>
          <div className="valioux-card p-6 text-center">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-bold mb-2">Based In</h3>
            <p className="text-zinc-300">India</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Let’s Talk</h2>
            <p className="text-zinc-300 mb-6">
              Select the nature of your inquiry so I can better assist you.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { label: "General Inquiry", value: "general" },
                { label: "Project Discussion", value: "project" },
                { label: "Hire on Contract", value: "contract" },
                { label: "Tech Partnership", value: "partnership" },
              ].map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setFormType(value as any)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    formType === value
                      ? "bg-purple-600 text-white"
                      : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <form className="valioux-card p-8" onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold mb-6 capitalize">
              {formType === "general" && "General Inquiry"}
              {formType === "project" && "Project Discussion"}
              {formType === "contract" && "Contract Hiring Request"}
              {formType === "partnership" && "Partnership Proposal"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
                  required
                />
              </div>
            </div>

            {(formType === "project" || formType === "contract") && (
              <div className="mb-6">
                <label
                  htmlFor="tech"
                  className="block text-sm font-medium text-zinc-300 mb-1"
                >
                  Technologies / Skills Needed
                </label>
                <input
                  type="text"
                  id="tech"
                  value={formData.tech}
                  onChange={handleChange}
                  placeholder="e.g., React, Node.js, AWS"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
                  required
                />
              </div>
            )}

            {formType === "partnership" && (
              <div className="mb-6">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-zinc-300 mb-1"
                >
                  Organization / Startup Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
                  required
                />
              </div>
            )}

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="valioux-button-primary flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit
            </button>

            {successMessage && (
              <p className="text-green-400 mt-4">{successMessage}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
