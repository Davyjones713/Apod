import { PropagateLoader } from "react-spinners";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 300px;
`;

const LoadingText = styled.p`
  color: green;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4rem;
`;

function Spinner() {
  return (
    <SpinnerWrapper>
      <LoadingText>Data Loading</LoadingText>
      <PropagateLoader color="green" />
    </SpinnerWrapper>
  );
}

export default Spinner;
