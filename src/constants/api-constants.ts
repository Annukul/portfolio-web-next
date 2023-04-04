export const openAIBaseUrl = "https://api.openai.com/v1";

export const opneAIEndpoints = {
  TEXT_COMPLETIONS: "/completions",
  CHAT_COMPLETIONS: "/chat/completions",
  TEXT_EDITS: "/edits",
  IMAGE_GENERATION: "/images/generations",
};


export const getOpenAPiUrl = (endpoint: string) => {
    return `${openAIBaseUrl}${endpoint}`
}