import styled from 'styled-components';

export const EventDetailsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  font-weight: 800;
`;

export const EventDetailsContent = styled.div`
box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);

  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -50px;
  background: ${props => props.theme.colors.white};
  padding: 35px;
`;
