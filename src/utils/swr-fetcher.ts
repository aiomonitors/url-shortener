import axios from "axios";

const fetcher = (url: string): Promise<any> =>
  axios({
    method: "GET",
    url,
    timeout: 2000,
  }).then((response) => response.data);

export default fetcher;
