import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 48px; /* 12 * 4 */
  height: 48px; /* 12 * 4 */
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #6b46c1; /* Color purple-600 */
  animation: ${spin} 1s linear infinite;
`;

export const CenteredSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full height of the viewport */
`;

const LoadingSpinner = () => (
  <CenteredSpinner>
    <Spinner />
  </CenteredSpinner>
);

export default LoadingSpinner;
