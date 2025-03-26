import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(5, {
    message: "Name must be greater than 5 characters",
  }),
  email: z.string().email(),
  message: z
    .string()
    .min(10, {
      message: "Message must be greater than 10 characters",
    })
    .max(300, {
      message: "Message must be smaller than 300 characters",
    }),
});

export { contactFormSchema };
