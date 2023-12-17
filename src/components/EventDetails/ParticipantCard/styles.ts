// components/styles.ts
import styled from 'styled-components';

// ... (outros estilos que você já tem)

export const ParticipantCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

export const CircleIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  margin-right: 16px;
`;

export const ParticipantInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ParticipantName = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 4px;
  align-self: center;
`;

export const AmountDonatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AmountDonated = styled.div`
  font-size: 21px;
  font-weight: 700;
`;

export const AmountDonatedReceived = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;
