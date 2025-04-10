"use client"

import type React from "react"

import { useState } from "react"
import { Camera } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    username: "ValiPlayer123",
    fullName: "Alex Johnson",
    bio: "Competitive Fortnite player since 2018. Passionate about esports and gaming.",
    location: "Berlin, Germany",
    discord: "valiPlayer#1234",
    twitter: "@valiPlayer",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the profile to your backend
    setIsEditing(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="valioux-card p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile picture */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-400 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold">{profile.username.charAt(0)}</span>
            </div>
            <button className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors">
              <Camera size={16} />
              <span className="sr-only">Change profile picture</span>
            </button>
          </div>

          {/* Profile info */}
          <div className="flex-1">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-zinc-300 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={profile.username}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-zinc-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-zinc-300 mb-1">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    value={profile.bio}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-zinc-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="flex gap-4">
                  <button type="submit" className="valioux-button-primary">
                    Save Changes
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="valioux-button-secondary">
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-2">{profile.username}</h2>
                <p className="text-zinc-300 mb-4">{profile.fullName}</p>
                <p className="text-zinc-400 mb-6">{profile.bio}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-zinc-400">
                    <span className="font-medium text-zinc-300">Location:</span> {profile.location}
                  </p>
                  <p className="text-zinc-400">
                    <span className="font-medium text-zinc-300">Discord:</span> {profile.discord}
                  </p>
                  <p className="text-zinc-400">
                    <span className="font-medium text-zinc-300">Twitter:</span> {profile.twitter}
                  </p>
                </div>
                <button onClick={() => setIsEditing(true)} className="valioux-button-primary">
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="valioux-card p-8">
        <h2 className="text-xl font-bold mb-4">Gaming Information</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Fortnite</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-zinc-400">Epic Games Username</p>
                <p className="font-medium">ValiPlayer123</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Region</p>
                <p className="font-medium">Europe</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">PR Points</p>
                <p className="font-medium">4,500</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Team Division</p>
                <p className="font-medium">Academy Team</p>
              </div>
            </div>
          </div>
          <button className="valioux-button-secondary">Edit Gaming Information</button>
        </div>
      </div>
    </div>
  )
}
