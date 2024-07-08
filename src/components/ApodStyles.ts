import styled from "styled-components";

export const ApodWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const StyledApod = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  gap: 15px;

  @media (min-width: 768px) {
    width: 700px;
    padding: 35px;
    gap: 25px;
  }
`;

export const ApodImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  @media (min-width: 768px) {
    max-width: 450px;
  }
`;

export const ApodTitle = styled.h1`
  color: black;
  font-weight: 700;
  font-size: 2rem;
`;

export const ApodDate = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const ApodDescription = styled.p`
  color: black;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;
