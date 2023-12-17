import React from 'react';
import * as S from './styles';
import { format } from 'date-fns';
import { handleParsedDate } from '@/utils/parsedDate';
import IconPeople from '../../../assets/icons/icon-people.svg';
import IconsMoney from '../../../assets/icons/icon-money.svg';
import { truncateText } from '@/utils/truncateText';
import { Tooltip } from 'react-tooltip';

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
      <S.EventCardName
        data-tooltip-id="tooltip__name"
        data-tooltip-content={eventName}>
        {truncateText(eventName, 40)}
      </S.EventCardName>
      <Tooltip id="tooltip__name" opacity={8} place='bottom' />
      <S.EventCardDetails>
        <div>
          <IconPeople />
          <span>{participants}</span>
        </div>
        <div>
          <IconsMoney />
          <span>R${amountRaised}</span>
        </div>
      </S.EventCardDetails>
    </S.EventCard>
  );
};

export default EventCard;
