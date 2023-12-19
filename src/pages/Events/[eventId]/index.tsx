import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import * as S from './styles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ParticipantCard from '@/components/EventDetails/ParticipantCard';
import EventHeader from '@/components/EventDetails/EventHeader';
import { useRouter } from 'next/router';
import api from '@/services/api';
import { customToast } from '@/utils/customToast';

interface ParticipantProps {
  id: number;
  attributes: {
    createdAt: string;
    name: string;
    paidAmount: number;
    valueWithDrink: number;
    valueWithoutDrink: number;
  };
}

interface EventProps {
  id: number;
  attributes: {
    createdAt: string;
    date: string;
    name: string;
    observation: string;
    updatedAt: string;
    participants: {
      data: ParticipantProps[];
    }
  };
}

const EventDetails: React.FC = () => {

  const router = useRouter();
  const { eventId, } = router.query;
  const { totalAmount } = router.query;

  const [event, setEvent] = useState({} as EventProps);
  const [participants, setParticipants] = useState([] as ParticipantProps[]);

  const getEvent = () => {
    api.get(`/events/${eventId}?populate=participants`).then((response) => {
      setEvent(response.data.data);
      setParticipants(response.data.data.attributes.participants.data);
    }
    ).catch((err) => {
      customToast('Erro ao buscar o evento', 'error');
    })
  }

  const handleTotalAmount = () => {
    let total = 0;
    participants.forEach(participant => {
      total += participant.attributes.paidAmount;
    });

    return total;
  }

  useEffect(() => {
    getEvent();
    handleTotalAmount();
  }, [eventId]);

  return (
    <S.EventDetailsContainer>
      <Head>
        <title>Detalhes do Evento</title>
      </Head>
      <Header />
      <S.EventDetailsContent>
        <EventHeader updateData={getEvent} date={event.attributes?.date} name={event.attributes?.name} participantsCount={event.attributes?.participants.data.length} totalAmount={handleTotalAmount()} />
        {participants.map((participant: ParticipantProps, index: number) => (
          <ParticipantCard
            key={index}
            idParticipant={participant.id}
            name={participant.attributes.name}
            amountDonated={participant.attributes.paidAmount}
            valueWithDrink={participant.attributes.valueWithDrink}
            valueWithoutDrink={participant.attributes.valueWithoutDrink}
            updateData={getEvent}
          />
        ))}
      </S.EventDetailsContent>
      <Footer />
    </S.EventDetailsContainer>
  );
};

export default EventDetails;
