export default function BillingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Billing & Subscriptions</h1>

      <div className="valioux-card p-8 mb-8">
        <h2 className="text-xl font-bold mb-6">Current Membership</h2>
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-lg mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Free Membership</h3>
              <p className="text-zinc-300">Basic access to Team Valioux community</p>
            </div>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Active</span>
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-2">Membership Benefits:</h3>
          <ul className="space-y-2 text-zinc-300 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
              <span>Access to community forums</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
              <span>Basic profile customization</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
              <span>Participation in community events</span>
            </li>
          </ul>
          <button className="valioux-button-primary">Upgrade Membership</button>
        </div>
      </div>

      <div className="valioux-card p-8 mb-8">
        <h2 className="text-xl font-bold mb-6">Premium Membership Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-zinc-800 rounded-lg p-6 hover:border-purple-500 transition-colors">
            <h3 className="text-lg font-bold mb-2">Pro Membership</h3>
            <p className="text-2xl font-bold mb-4">
              €4.99<span className="text-sm text-zinc-400">/month</span>
            </p>
            <ul className="space-y-2 text-zinc-300 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>All Free benefits</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>Exclusive Discord role</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>Early access to team news</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>10% off merchandise</span>
              </li>
            </ul>
            <button className="valioux-button-primary w-full">Subscribe</button>
          </div>

          <div className="border border-zinc-800 rounded-lg p-6 hover:border-purple-500 transition-colors">
            <h3 className="text-lg font-bold mb-2">Elite Membership</h3>
            <p className="text-2xl font-bold mb-4">
              €9.99<span className="text-sm text-zinc-400">/month</span>
            </p>
            <ul className="space-y-2 text-zinc-300 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>All Pro benefits</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>Monthly coaching session</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>Exclusive in-game items</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <span>25% off merchandise</span>
              </li>
            </ul>
            <button className="valioux-button-primary w-full">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="valioux-card p-8">
        <h2 className="text-xl font-bold mb-6">Payment Methods</h2>
        <p className="text-zinc-300 mb-6">No payment methods added yet.</p>
        <button className="valioux-button-primary">Add Payment Method</button>
      </div>
    </div>
  )
}
