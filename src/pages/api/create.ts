import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";
import { randomBytes } from "crypto";
import base64url from "base64url";

const prisma = new PrismaClient();

const body = z.object({
  url: z.string().url(),
});

export interface SuccessResponse {
  success: boolean;
  id: string;
}

export interface ErrorResponse {
  error: string;
}

export type CreateResponse = SuccessResponse | ErrorResponse;

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== "POST") {
    res.status(404).json({ error: "Method not allowed" });
    return;
  }

  try {
    const parsedBody = body.parse(req.body);
    const { id } = await prisma.shortened.create({
      data: {
        id: base64url(Buffer.from(randomBytes(10))),
        url: parsedBody.url,
      },
      select: {
        id: true,
      },
    });
    res.json({ success: true, id });
  } catch (err) {
    res.status(400).json({ error: "Invalid url" });
  }
};
