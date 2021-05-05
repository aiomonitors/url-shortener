import axios from "axios";
import { MetatagsResponse } from "@/types";

const fetcher = async (url: string): Promise<MetatagsResponse> => {
  const response = await axios.get<MetatagsResponse>(
    `https://www.shihab.dev/api/metadata?url=${url}`
  );
  return response.data;
};

export default fetcher;
