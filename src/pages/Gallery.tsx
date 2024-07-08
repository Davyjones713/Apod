import styled from "styled-components";
import renderApod from "../components/Apod";
import useGetApodQuery from "../queries/useGetApodQuery";
import Spinner from "../components/Spinner";

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  font-size: 36px;
`;

const DateInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 22px;
  border: 1px solid black;
  border-radius: 10px;
  max-width: 90%;
  letter-spacing: 0.8px;
  color: white;
  background-color: #1976d2;
  @media (min-width: 768px) {
    min-width: 700px;
  }
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
        <DateInfo>
          Showing Data from ${startDate} to ${getCurrentDate()}
        </DateInfo>
      </DateWrapper>
      {Array.isArray(data) && data.map(renderApod)}
    </>
  );
}

export default Gallery;
