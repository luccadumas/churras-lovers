// pages/events.tsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import * as S from './styles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import EventCard from '@/components/Events/EventCard';
import AddEventButton from '@/components/Events/AddEventButton';
import api from '@/services/api';


interface ParticipantProps {
  data: {
    attributes: {
      createdAt: string;
      name: string;
      paidAmount: number;
      valueWithDrink: number;
      valueWithoutDrink: number;
    };
  }[];
}

interface EventProps {
  id: number;
  attributes: {
    createdAt: string;
    date: string;
    name: string;
    observation: string;
    updatedAt: string;
    participants: ParticipantProps;
  };
}

const Events: React.FC = () => {

  const [events, setEvents] = useState([]);

  const getEvents = () => {
    api.get('/events?populate=participants').then((response) => {
      setEvents(response.data.data);
      console.log(response.data.data);
    }).catch((err) => {
      console.error(err);
    })
  }

  const handleAddEvent = () => {

  };

  useEffect(() => {
    getEvents();
  }
    , []);

  return (
    <S.EventsContainer>
      <Head>
        <title>Agenda de Churras - Eventos</title>
      </Head>

      <Header />
      <S.Event>
        <S.EventsContent>
          {events.length > 0 && events.map((event: EventProps, index: number) => (
            <EventCard key={index} id={event.id} date={event.attributes.date} name={event.attributes.name} participants={event.attributes.participants} />
          ))}
          <AddEventButton onClick={handleAddEvent} />
        </S.EventsContent>
      </S.Event>
      {events.length === 0 && (
        <S.NoEvents>
          <S.NoEventsText>
            Você ainda não tem nenhum evento cadastrado.
          </S.NoEventsText>
        </S.NoEvents>
      )}
      <Footer />
    </S.EventsContainer>
  );
};

export default Events;
