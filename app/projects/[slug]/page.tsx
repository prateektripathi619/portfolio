import Link from "next/link";
import { Check } from "lucide-react";
import CallToAction from "@/components/shared/call-to-action";

const benefits = [
  "Collaborate with top software engineering talent in India",
  "Showcase your brand at tech events, meetups, and hackathons",
  "Access to curated developer communities and talent pools",
  "Co-branded content with engineering teams and creators",
  "Sponsor coding bootcamps and workshops",
  "Custom integration and outreach strategies for your brand",
];

const partnershipTypes = [
  {
    title: "Tech Sponsorship",
    description:
      "Join as a sponsor for our developer events, coding sprints, and engineering conferences in India.",
    features: [
      "Booth and branding at live events",
      "Logo on banners and digital assets",
      "Speaker slots and workshop access",
      "Recognition across all event promotions",
      "Meetup co-hosting opportunities",
    ],
  },
  {
    title: "University Collaboration",
    description:
      "Partner with our academic programs to bridge the gap between industry and student developers.",
    features: [
      "Industry project mentorship",
      "Student hackathon sponsorship",
      "Internship and job placement tie-ups",
      "Guest lectures and webinars",
      "Recognition across campus partners",
    ],
  },
  {
    title: "Engineering Content Partner",
    description:
      "Create value-driven content such as tutorials, webinars, and newsletters with our developer community.",
    features: [
      "Developer outreach via newsletters",
      "Product showcases with engineers",
      "Joint open-source initiatives",
      "YouTube and blog features",
      "Cross-promotion via tech influencers",
    ],
  },
];

const currentPartners = [
  "NIT Raipur - JRF Project: Financial Tracking & Automation (Node.js, Express, Next.js, Docker, Kubernetes, AWS)",
  "Nagar Nigam Raipur - City Cleaning App (React Native, YOLO, Next.js, Express, AWS)",
  "SAIL Bhilai Plant - Automated Ticket Raising System",
  
];

export default function PartnersPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-800/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Partner with India's Software Talent
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300">
              Explore opportunities to collaborate with developers, engineering
              colleges, and tech leaders across India.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Why Collaborate With Us?</h2>
            <p className="text-zinc-300 mb-6">
              India is a rising global tech innovation hub. Through our
              platform, you can build meaningful relationships with software
              engineers, universities, and development communities.
            </p>
            <p className="text-zinc-300 mb-8">
              We enable custom partnership strategies—whether you’re looking to
              hire, market, or build products.
            </p>
            <Link href="/contact?type=partnership" className="btn-primary">
              Get in Touch
            </Link>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Benefits of Partnership
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <span className="text-zinc-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container bg-zinc-950">
        <h2 className="section-title text-center">Collaboration Models</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {partnershipTypes.map((type, index) => (
            <div key={index} className="valioux-card flex flex-col">
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                <p className="text-zinc-300 mb-6">{type.description}</p>
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                      <span className="text-zinc-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-zinc-800">
                <Link
                  href="/contact?type=partnership"
                  className="btn-secondary w-full text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title text-center">Current Collaborators</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {currentPartners.map((partner, idx) => (
            <div
              key={idx}
              className="h-32 bg-zinc-900 rounded-md flex items-center justify-center border border-zinc-800"
            >
              <div className="text-zinc-500 font-medium text-center px-4">
                {partner}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-300 max-w-2xl mx-auto">
          Join these tech leaders in building the future of engineering and
          innovation in India.
        </p>
      </section>

      <CallToAction
        title="Ready to Build Together?"
        description="Let’s explore how we can collaborate on events, recruitment, or research-led engineering initiatives."
        buttonText="Contact Us"
        buttonLink="/contact?type=partnership"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />
    </div>
  );
}
