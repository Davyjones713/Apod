import { IAppodListResponse, IParamsType } from "../queries/useGetApodQuery";
import axiosInstance from "./api";

export const fetchApod = async (
  params: IParamsType
): Promise<IAppodListResponse> => {
  const res = await axiosInstance.get<IAppodListResponse>("", {
    params: {
      start_date: params.startDate,
      end_date: params.endDate,
    },
  });

  return res.data;
};
