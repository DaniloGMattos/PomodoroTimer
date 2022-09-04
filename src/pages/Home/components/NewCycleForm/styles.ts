import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
`;
const BaseInput = styled.input`
  background: transparent;
  border: 0;
  height: 2.5rem;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  padding: 0 0.5rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }
  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`;
export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
