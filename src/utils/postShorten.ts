import axios from "axios";
import { CreateResponse } from "../pages/api/create";

const postShorten = async (url: string): Promise<CreateResponse> => {
  try {
    const response = await axios.post<CreateResponse>("/api/create", { url });
    return response.data;
  } catch (err) {
    return (
      err.response.data || {
        error: "Your request could not be completed at this time.",
      }
    );
  }
};

export default postShorten;
