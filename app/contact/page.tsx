"use client"

import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formType, setFormType] = useState<"general" | "player" | "creator" | "partner">("general")

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300">
              Get in touch with Team Valioux for inquiries, applications, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="valioux-card p-6 text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-bold mb-2">Email Us</h3>
            <p className="text-zinc-300">info.valioux@gmail.com</p>
          </div>
          <div className="valioux-card p-6 text-center">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-zinc-300">Berlin, Germany</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-zinc-300 mb-6">
              Select the appropriate form based on your inquiry. We'll get back to you as soon as possible.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setFormType("general")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  formType === "general" ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                General Inquiry
              </button>
              <button
                onClick={() => setFormType("player")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  formType === "player" ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                Player Application
              </button>
              <button
                onClick={() => setFormType("creator")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  formType === "creator" ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                Content Creator
              </button>
              <button
                onClick={() => setFormType("partner")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  formType === "partner" ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                Partnership
              </button>
            </div>
          </div>

          <form className="valioux-card p-8">
            <h3 className="text-xl font-bold mb-6">
              {formType === "general" && "General Inquiry"}
              {formType === "player" && "Player Application"}
              {formType === "creator" && "Content Creator Application"}
              {formType === "partner" && "Partnership Inquiry"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            {formType === "player" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="game" className="block text-sm font-medium text-zinc-300 mb-1">
                    Game
                  </label>
                  <select
                    id="game"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select a game</option>
                    <option value="fortnite">Fortnite</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-zinc-300 mb-1">
                    Role/Position
                  </label>
                  <input
                    type="text"
                    id="role"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
            )}

            {formType === "creator" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="content-type" className="block text-sm font-medium text-zinc-300 mb-1">
                    Content Type
                  </label>
                  <select
                    id="content-type"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select content type</option>
                    <option value="streaming">Streaming</option>
                    <option value="video">Video Content</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="platform" className="block text-sm font-medium text-zinc-300 mb-1">
                    Platform/Portfolio
                  </label>
                  <input
                    type="text"
                    id="platform"
                    placeholder="URL to your channel/portfolio"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
            )}

            {formType === "partner" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-1">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="partnership-type" className="block text-sm font-medium text-zinc-300 mb-1">
                    Partnership Type
                  </label>
                  <select
                    id="partnership-type"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select partnership type</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="event">Event Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            <button type="submit" className="valioux-button-primary flex items-center">
              <Send className="h-4 w-4 mr-2" />
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
