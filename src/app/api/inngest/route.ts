import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { meetingsProcessing } from "@/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    meetingsProcessing, // <-- This is where you'll always add all your functions
  ],
});
