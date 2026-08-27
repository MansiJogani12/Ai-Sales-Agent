import React from "react";
import { CreditCard, CheckCircle2 } from "lucide-react";

export function BillingView() {
  return (
    <div className="p-8 max-w-5xl mx-auto h-full flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <CreditCard className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Billing & Subscriptions</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Starter", price: "$49", type: "/mo", desc: "For solo founders.", features: ["500 AI Voice Minutes", "Basic Lead Discovery", "1 Active Campaign"] },
          { name: "Growth", price: "$149", type: "/mo", desc: "For growing teams.", features: ["2000 AI Voice Minutes", "Advanced Market Intel", "5 Active Campaigns", "CRM Integrations"], popular: true },
          { name: "Enterprise", price: "Custom", type: "", desc: "For sales organizations.", features: ["Unlimited Minutes", "Custom AI Models", "Unlimited Campaigns", "Dedicated Support"] },
        ].map((plan, i) => (
          <div key={i} className={`card p-8 flex flex-col relative ${plan.popular ? 'border-2 border-blue-500 shadow-[0_12px_40px_-12px_rgba(59,130,246,0.3)]' : ''}`}>
            {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</div>}
            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{plan.desc}</p>
            <div className="mt-6 mb-6 flex items-baseline gap-1">
              <span className="text-4xl font-black tracking-tighter text-gray-900">{plan.price}</span>
              <span className="text-gray-500 font-medium">{plan.type}</span>
            </div>
            <ul className="flex flex-col gap-3 flex-1 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
              {plan.price === "Custom" ? "Contact Sales" : "Upgrade"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
