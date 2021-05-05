import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { url } = req.query;
  if (!url) {
    res.status(400).json({ error: "No URL param was provided" });
    return;
  }

  try {
    const response = await axios({
      method: "GET",
      url: `https://metatags.io/api/metadata?domain=${url}`,
      headers: {
        authority: "metatags.io",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36",
        accept: "*/*",
        "sec-gpc": "1",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://metatags.io/",
        "accept-language": "en-US,en;q=0.9",
      },
    });
    res.json(response.data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
