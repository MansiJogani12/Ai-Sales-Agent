import React, { useState } from "react";
import { Shield, Activity, Users, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export function AdminView() {
  const [approvals, setApprovals] = useState([
    { id: 1, company: "Acme Corp", product: "AI Sales Software", status: "Pending" },
    { id: 2, company: "TechGlobal", product: "Crypto Trading Bot", status: "Flagged" }
  ]);

  return (
    <div className="p-8 max-w-7xl mx-auto h-full flex flex-col gap-6 overflow-y-auto">
      <div className="flex items-center gap-3">
        <Shield className="w-8 h-8 text-purple-600" />
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Portal</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="card p-6 flex flex-col gap-4 border-l-4 border-purple-500 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-center gap-3 text-purple-700">
            <Users className="w-5 h-5" />
            <h3 className="font-bold">User Management</h3>
          </div>
          <p className="text-sm text-gray-600">Manage platform users, roles, and API access keys.</p>
        </div>
        
        <div className="card p-6 flex flex-col gap-4 border-l-4 border-blue-500 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-center gap-3 text-blue-700">
            <Activity className="w-5 h-5" />
            <h3 className="font-bold">Voice Usage Monitoring</h3>
          </div>
          <p className="text-sm text-gray-600">Track total AI minutes consumed across all tenants.</p>
        </div>
        
        <div className="card p-6 flex flex-col gap-4 border-l-4 border-red-500 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-center gap-3 text-red-700">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-bold">Fraud & Compliance</h3>
          </div>
          <p className="text-sm text-gray-600">Review AI product selling validation requests and anomaly detection.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="card flex flex-col overflow-hidden">
          <div className="p-5 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Product Approvals</h3>
            <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">Requires Action</span>
          </div>
          <div className="p-0">
            <table className="w-full text-sm text-left">
              <thead className="bg-white border-b border-gray-100 text-gray-500 text-xs">
                <tr>
                  <th className="px-5 py-3 font-medium">Company</th>
                  <th className="px-5 py-3 font-medium">Product / Service</th>
                  <th className="px-5 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {approvals.map(req => (
                  <tr key={req.id}>
                    <td className="px-5 py-4 font-semibold text-gray-900">{req.company}</td>
                    <td className="px-5 py-4 text-gray-600">{req.product}</td>
                    <td className="px-5 py-4 flex gap-2">
                      <button 
                        onClick={() => setApprovals(prev => prev.filter(p => p.id !== req.id))}
                        className="text-emerald-600 hover:bg-emerald-50 p-1.5 rounded transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setApprovals(prev => prev.filter(p => p.id !== req.id))}
                        className="text-red-600 hover:bg-red-50 p-1.5 rounded transition-colors"
                      >
                        <XCircle className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
                {approvals.length === 0 && (
                  <tr><td colSpan={3} className="px-5 py-8 text-center text-gray-500">No pending approvals.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card flex flex-col overflow-hidden">
          <div className="p-5 border-b border-gray-100 bg-gray-50">
            <h3 className="font-bold text-gray-900">System Audit Logs</h3>
          </div>
          <div className="p-5 font-mono text-xs text-gray-600 space-y-3 bg-gray-900 text-green-400 h-full">
            <div className="flex gap-4"><span className="text-gray-500">10:45:12</span><span>[AUTH] User login successful (ID: 9482)</span></div>
            <div className="flex gap-4"><span className="text-gray-500">10:47:03</span><span>[VOICE] Campaign triggered - 50 leads</span></div>
            <div className="flex gap-4"><span className="text-gray-500">10:47:15</span><span className="text-yellow-400">[WARN] Lead score below threshold (ID: 1102)</span></div>
            <div className="flex gap-4"><span className="text-gray-500">10:48:22</span><span>[CRM] Salesforce sync completed (24 changes)</span></div>
            <div className="flex gap-4"><span className="text-gray-500">10:50:01</span><span className="text-red-400">[FRAUD] Unusual call volume detected for tenant (ID: 442)</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
