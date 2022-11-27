import axiosInstance from "../axiosInstance";

export const searchMovies = async (params) => {
  const res = await axiosInstance
    .get("/", {
      params,
    })
    .catch((e) => {
      throw new Error(e?.response?.data.Error);
    });

  if (res.data.Error) {
    throw new Error(res.data.Error);
  }
  return res.data;
};
