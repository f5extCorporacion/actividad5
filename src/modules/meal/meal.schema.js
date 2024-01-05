import z from "zod";
import { extractValidationData } from "../../common/utils/extract-error-data.js";

const ordesSchema = z.object({
  name: z.number(),
  price: z.number(),
});

export function validateCreateRepair(data) {
  const result = ordesSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: ordesSchema,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    ordesSchema,
  };
}
