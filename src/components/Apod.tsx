import { IAppodListResponse } from "../queries/useGetApodQuery";
import {
  ApodDate,
  ApodDescription,
  ApodImage,
  ApodTitle,
  ApodWrapper,
  StyledApod,
} from "./ApodStyles";

const renderApod = (apod: IAppodListResponse) => (
  <ApodWrapper key={apod.date}>
    <StyledApod>
      <ApodTitle>{apod.title}</ApodTitle>
      <ApodDate>{apod.date}</ApodDate>

      <ApodImage src={apod.url} alt={apod.title} />

      <ApodDescription>{apod.explanation}</ApodDescription>
    </StyledApod>
  </ApodWrapper>
);

export default renderApod;
