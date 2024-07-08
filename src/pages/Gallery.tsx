import styled from "styled-components";
import renderApod from "../components/Apod";
import useGetApodQuery from "../queries/useGetApodQuery";
import Spinner from "../components/Spinner";

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 36px;
  color: green;
`;

function Gallery() {
  const startDate = "2024-07-01";
  function getCurrentDate() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  const { data, isFetching } = useGetApodQuery({
    startDate,
    endDate: getCurrentDate(),
  });

  if (isFetching) return <Spinner />;

  return (
    <>
      <DateWrapper>
        {`Showing Data from ${startDate} to ${getCurrentDate()}`}
      </DateWrapper>
      {Array.isArray(data) && data.map(renderApod)}
    </>
  );
}

export default Gallery;
