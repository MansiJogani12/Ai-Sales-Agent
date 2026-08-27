import React from "react";
import { LineChart, Users, DollarSign, Activity } from "lucide-react";

export function MarketIntelView() {
  return (
    <div className="p-8 max-w-7xl mx-auto h-full flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <LineChart className="w-8 h-8 text-[var(--accent-coral)]" />
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Market Intelligence</h1>
      </div>
      <p className="text-gray-500 max-w-2xl text-lg">
        AI-powered insights into funding, hiring signals, technology stacks, and competitor activity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {[
          { label: "Active Signals Detected", value: "1,245", icon: Activity, color: "text-blue-500" },
          { label: "Recent Funding Events", value: "34", icon: DollarSign, color: "text-emerald-500" },
          { label: "Key Hiring Roles", value: "128", icon: Users, color: "text-purple-500" },
          { label: "New Tech Adoptions", value: "56", icon: LineChart, color: "text-amber-500" },
        ].map((stat, i) => (
          <div key={i} className="card p-6 flex flex-col gap-2 relative overflow-hidden group hover:border-[var(--accent-coral)] transition-colors cursor-pointer">
            <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold text-gray-500 mt-2">{stat.label}</span>
            <span className="text-3xl font-black text-gray-900 tracking-tight">{stat.value}</span>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--accent-coral)]/5 rounded-full blur-2xl group-hover:bg-[var(--accent-coral)]/10 transition-colors" />
          </div>
        ))}
      </div>

      <div className="flex-1 card p-8 flex flex-col items-center justify-center text-center mt-4 border-dashed border-2 border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Intelligence Coming Soon</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We are currently integrating with multiple public sources (LinkedIn, X, Web) to automatically enrich and score leads based on intent signals.
        </p>
      </div>
    </div>
  );
}
