import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
`;

const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  color: ${({ theme }) => theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`;
export const StartCountDownButton = styled(BaseCountDownButton)`
  background-color: ${({ theme }) => theme['green-500']};
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`;
export const StopCountDownButton = styled(BaseCountDownButton)`
  background-color: ${({ theme }) => theme['red-500']};
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['red-700']};
  }
`;
