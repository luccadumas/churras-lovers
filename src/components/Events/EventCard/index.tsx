import React from 'react';
import * as S from './styles';
import { format } from 'date-fns';
import { handleParsedDate } from '@/utils/parsedDate';
import IconPeople from '../../../assets/icons/icon-people.svg';
import IconsMoney from '../../../assets/icons/icon-money.svg';
import { truncateText } from '@/utils/truncateText';
import { Tooltip } from 'react-tooltip';
import Router from 'next/router';

interface ParticipantProps {
  data: {
    attributes?: {
      createdAt: string;
      name: string;
      paidAmount: number;
      valueWithDrink: number;
      valueWithoutDrink: number;
    };
  }[];
}

interface EventCardProps {
  id: string;
  date: string;
  name: string;
  participants: ParticipantProps;
}

const EventCard: React.FC<EventCardProps> = ({ id, date, name, participants }) => {

  const parsedDate = handleParsedDate(date);

  const handleSumAmount = () => {

    let sum = 0;
    participants.data.forEach((participant) => {
      if (!participant.attributes) {
        return 0;
      }
      sum += participant.attributes.paidAmount;
    });

    return sum;
  }

  return (
    <S.EventCard onClick={
      () => {
        Router.push(`/events/${id}?totalAmount=${handleSumAmount()}`);
      }
    }>
      <S.EventCardDate>{format(parsedDate, 'dd/MM')}</S.EventCardDate>
      <S.EventCardName
        data-tooltip-id="tooltip__name"
        data-tooltip-content={name}>
        {truncateText(name, 40)}
      </S.EventCardName>
      <Tooltip id="tooltip__name" opacity={8} place='bottom' />
      <S.EventCardDetails>
        <div>
          <IconPeople />
          <span>{participants.data.length}</span>
        </div>
        <div>
          <IconsMoney />
          <span>R$ {handleSumAmount()}</span>
        </div>
      </S.EventCardDetails>
    </S.EventCard>
  );
};

export default EventCard;
