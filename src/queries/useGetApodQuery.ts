import { useQuery } from "react-query";
import { fetchApod } from "../api/services";

export interface IAppodListResponse {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  length: number;
}

export interface IParamsType {
  startDate?: string | null;
  endDate?: string | null;
}

const useGetApodQuery = (params: IParamsType) => {
  return useQuery<IAppodListResponse, Error>({
    queryFn: () => fetchApod(params),
    queryKey: ["useGetApodQuery", params],
    staleTime: 5 * 60 * 1000,
  });
};

export default useGetApodQuery;
