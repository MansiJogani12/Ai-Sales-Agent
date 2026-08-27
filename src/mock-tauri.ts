export class Channel {
  constructor() {}
  onmessage() {}
}

export const invoke = async (command: string, args: any = {}) => {
  console.log(`[MOCK TAURI] Invoked: ${command}`, args);
  
  if (command === 'get_leads') {
    return [
      { id: "1", name: "Alice Johnson", company: "TechCorp", email: "alice@techcorp.com", status: "Discovery", score: 85 },
      { id: "2", name: "Bob Smith", company: "BuildIt Inc", email: "bob@buildit.com", status: "Outbound Call", score: 92 },
      { id: "3", name: "Charlie Davis", company: "DataSystems", email: "charlie@datasystems.com", status: "Audit Requested", score: 78 }
    ];
  }
  
  if (command === 'get_call_logs') {
    return [
      { id: "101", lead_id: "2", transcript: "Hello, this is Bob.", sentiment: "Positive", duration: 120, created_at: new Date().toISOString() }
    ];
  }

  if (command === 'update_lead_status') {
    return { success: true };
  }

  if (command === 'get_lead_notes') {
    return [];
  }

  if (command === 'process_onboarding_chat') {
    return {
      isComplete: true,
      reply: "Mock complete",
      icp: { targetAudience: "Mock Audience", industry: "Tech", companySize: "10-50", painPoints: [], objections: [], valueProposition: "Mock Value" }
    };
  }

  // Generic fallback
  return [];
};
