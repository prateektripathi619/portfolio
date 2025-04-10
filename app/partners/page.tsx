import Link from "next/link"
import { Check } from "lucide-react"
import CallToAction from "@/components/shared/call-to-action"

const benefits = [
  "Brand exposure to our growing esports audience",
  "Logo placement on team jerseys and streams",
  "Social media promotion across our channels",
  "Collaborative content with our players and creators",
  "Access to exclusive events and tournaments",
  "Custom partnership activations tailored to your brand",
]

const partnershipTypes = [
  {
    title: "Official Sponsor",
    description: "Become an official sponsor of Team Valioux with premium brand placement and maximum exposure.",
    features: [
      "Logo on all team jerseys",
      "Featured on website and social media",
      "Regular content collaborations",
      "Event presence and activations",
      "Player appearances and endorsements",
    ],
  },
  {
    title: "Equipment Partner",
    description: "Provide your gaming hardware or peripherals to our players and receive authentic endorsements.",
    features: [
      "Product used by our pro players",
      "Authentic product reviews and showcases",
      "Unboxing and setup videos",
      "Social media mentions and tags",
      "Product placement in streams",
    ],
  },
  {
    title: "Content Collaboration",
    description: "Create engaging content with our players and creators to reach our audience in an authentic way.",
    features: [
      "Custom content series",
      "Stream integrations and overlays",
      "Social media takeovers",
      "Behind-the-scenes access",
      "Co-branded digital assets",
    ],
  },
]

export default function PartnersPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Partnership Opportunities</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300">
              Join forces with Team Valioux and connect your brand with our passionate esports community.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Why Partner With Us?</h2>
            <p className="text-zinc-300 mb-6">
              Team Valioux offers unique partnership opportunities for brands looking to connect with the growing
              esports audience. Our professional teams, content creators, and community provide multiple touchpoints for
              authentic brand integration.
            </p>
            <p className="text-zinc-300 mb-8">
              We work closely with our partners to create custom activations that align with your marketing objectives
              and resonate with our audience.
            </p>
            <Link href="/contact" className="valioux-button-primary">
              Become a Partner
            </Link>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Partnership Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                  <span className="text-zinc-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container bg-zinc-950">
        <h2 className="section-title text-center">Partnership Opportunities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {partnershipTypes.map((type, index) => (
            <div key={index} className="valioux-card flex flex-col">
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                <p className="text-zinc-300 mb-6">{type.description}</p>
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-purple-500 mr-2 mt-1" />
                      <span className="text-zinc-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-zinc-800">
                <Link href="/contact?type=partner" className="valioux-button-secondary w-full text-center">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title text-center">Current Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[1, 2, 3, 4].map((partner) => (
            <div
              key={partner}
              className="h-32 bg-zinc-900 rounded-md flex items-center justify-center border border-zinc-800"
            >
              <div className="text-zinc-500 font-medium">Partner {partner}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-300 max-w-2xl mx-auto">
          Join these leading brands in partnering with Team Valioux to connect with the passionate esports community.
        </p>
      </section>

      <CallToAction
        title="Ready to Partner With Us?"
        description="Contact our partnership team to discuss how we can create a custom collaboration that meets your marketing objectives."
        buttonText="Contact Us"
        buttonLink="/contact?type=partner"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />
    </div>
  )
}
