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

const useSearchApodQuery = (params: IParamsType) => {
  return useQuery<IAppodListResponse, Error>({
    queryFn: () => fetchApod(params),
    queryKey: ["useGetApodQuery"],
  });
};

export default useSearchApodQuery;
