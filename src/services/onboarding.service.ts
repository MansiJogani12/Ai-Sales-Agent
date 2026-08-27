import { invoke } from "@tauri-apps/api/core";
import type { ICP } from "../types";

function getGeminiKey(): string | undefined {
  const key = localStorage.getItem("gemini_api_key");
  return key || undefined;
}

export async function processOnboardingChat(
  messages: { role: string; content: string }[]
): Promise<{ isComplete: boolean; reply?: string; icp?: ICP }> {
  return invoke("process_onboarding_chat", { messages, apiKey: getGeminiKey() });
}
