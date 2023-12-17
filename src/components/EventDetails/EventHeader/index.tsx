// components/EventHeader.tsx
import React from 'react';
import * as S from './styles';
import { handleParsedDate } from '@/utils/parsedDate';
import { format } from 'date-fns';
import IconPeople from '../../..//assets/icons/icon-people.svg';
import IconMoney from '../../../assets/icons/icon-money.svg';

interface EventHeaderProps {
  date: string;
  eventName: string;
  participantsCount: number;
  totalAmount: number;
}

const EventHeader: React.FC<EventHeaderProps> = ({ date, eventName, participantsCount, totalAmount }) => {
  return (
    <S.EventHeaderContainer>
      <S.EventHeaderInfo>
        <S.EventDate>{format(handleParsedDate(date), 'dd/MM')}</S.EventDate>
        <S.EventName>{eventName}</S.EventName>
      </S.EventHeaderInfo>
      <S.EventStats>
        <S.ParticipantsCount>
          <IconPeople /> {participantsCount}
        </S.ParticipantsCount>
        <S.TotalAmount>
          <IconMoney /> R$ {totalAmount.toFixed(2)}
        </S.TotalAmount>
      </S.EventStats>
    </S.EventHeaderContainer>
  );
};

export default EventHeader;
