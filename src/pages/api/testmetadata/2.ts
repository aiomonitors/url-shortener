import { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  res.json({
    attributes: [
      {
        trait_type: "MintPass",
        value: "Serum",
      },
    ],
    description: "This is a serum for our release",
    image: "https://shrt.gay/images/rainy.png",
    name: "Mega Serum",
  });
};
