import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Guransh Chugh. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Guransh Chugh, a 20-year-old developer specializing in AI at Thapar Institute of Technology. Formerly a Google Developer Student Club(GDSC) Core Team Member, I now intern at Ambey Consultancy Services in Ludhiana. I'm passionate about AI, tech, Entrepreneurship and SaaS tech.",
    };
  },
});
