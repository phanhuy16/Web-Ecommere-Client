import axiosClient from "./axiosClient";

const handleAPI = async ({ url, data, method }: { url: string, data?: any, method?: "post" | "put" | "get" | "delete" }) => {
  return await axiosClient(url, {
    method: method ?? "get",
    data,
  })
};

export default handleAPI;