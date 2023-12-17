import React from 'react';
import * as S from './styles';
import { format } from 'date-fns';
import { handleParsedDate } from '@/utils/parsedDate';

interface EventCardProps {
  date: string;
  eventName: string;
  participants: number;
  amountRaised: number;
}

const EventCard: React.FC<EventCardProps> = ({ date, eventName, participants, amountRaised }) => {
  const parsedDate = handleParsedDate(date);

  return (
    <S.EventCard>
      <S.EventCardDate>{format(parsedDate, 'dd/MM')}</S.EventCardDate>
      <S.EventCardName>{eventName}</S.EventCardName>
      <S.EventCardDetails>
        <div>
          <span>{participants}</span>
        </div>
        <div>
          <span>{amountRaised}</span>
        </div>
      </S.EventCardDetails>
    </S.EventCard>
  );
};

export default EventCard;
