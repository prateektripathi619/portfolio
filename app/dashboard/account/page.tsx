"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function AccountSettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("alex.johnson@example.com")
  const [isChangingEmail, setIsChangingEmail] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

      <div className="space-y-8">
        {/* Email Settings */}
        <div className="valioux-card p-8">
          <h2 className="text-xl font-bold mb-4">Email Address</h2>
          {isChangingEmail ? (
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                  New Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="current-password" className="block text-sm font-medium text-zinc-300 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="current-password"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-zinc-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-zinc-400" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="valioux-button-primary">
                  Update Email
                </button>
                <button type="button" onClick={() => setIsChangingEmail(false)} className="valioux-button-secondary">
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <p className="text-zinc-300 mb-4">Your current email address is: {email}</p>
              <button onClick={() => setIsChangingEmail(true)} className="valioux-button-primary">
                Change Email
              </button>
            </div>
          )}
        </div>

        {/* Password Settings */}
        <div className="valioux-card p-8">
          <h2 className="text-xl font-bold mb-4">Password</h2>
          {isChangingPassword ? (
            <form className="space-y-4">
              <div>
                <label htmlFor="current-password-2" className="block text-sm font-medium text-zinc-300 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="current-password-2"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-zinc-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-zinc-400" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-zinc-300 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="new-password"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-zinc-300 mb-1">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirm-password"
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="valioux-button-primary">
                  Update Password
                </button>
                <button type="button" onClick={() => setIsChangingPassword(false)} className="valioux-button-secondary">
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <p className="text-zinc-300 mb-4">For security reasons, we recommend changing your password regularly.</p>
              <button onClick={() => setIsChangingPassword(true)} className="valioux-button-primary">
                Change Password
              </button>
            </div>
          )}
        </div>

        {/* Address Settings */}
        <div className="valioux-card p-8">
          <h2 className="text-xl font-bold mb-4">Address Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="address-line1" className="block text-sm font-medium text-zinc-300 mb-1">
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="address-line1"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="address-line2" className="block text-sm font-medium text-zinc-300 mb-1">
                  Address Line 2 (Optional)
                </label>
                <input
                  type="text"
                  id="address-line2"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-zinc-300 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="postal-code" className="block text-sm font-medium text-zinc-300 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal-code"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-zinc-300 mb-1">
                  Country
                </label>
                <select
                  id="country"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a country</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <button type="submit" className="valioux-button-primary">
              Save Address
            </button>
          </form>
        </div>

        {/* Delete Account */}
        <div className="valioux-card p-8 border border-red-900">
          <h2 className="text-xl font-bold mb-4 text-red-500">Danger Zone</h2>
          <p className="text-zinc-300 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-200">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
