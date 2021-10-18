// lib/sanity.server.js
import { createClient } from "next-sanity";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "sk0aZ9qEQO5QzzbtVNa3cwem6AntlgHT515sAwFgVmdPiR063IcsjsbVkRd0tGG4ydgsMwh0Ry4klJ2I0JHIkoih2u9fTbqZyTXoISwQ3r0dJYfxNp7IiMSKHo391Ggqdvw2NLHQCcaQbrJTBsugfDyVI5LgckUAIJlsGUjj1az2iNGCq8OF",
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
