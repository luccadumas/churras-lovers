// pages/events.tsx
import React from 'react';
import Head from 'next/head';
import * as S from './styles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import EventCard from '@/components/Events/EventCard';
import AddEventButton from '@/components/Events/AddEventButton';

const Events: React.FC = () => {
  const eventsData = [
    {
      date: '2023-12-22',
      eventName: 'Churrasco de Natal com a Família e Amigos',
      participants: 20,
      amountRaised: 500.0,
    },
    {
      date: '2023-12-25',
      eventName: 'Churrasco de Natal',
      participants: 20,
      amountRaised: 500.0,
    },
    {
      date: '2023-12-25',
      eventName: 'Churrasco de Natal',
      participants: 20,
      amountRaised: 500.0,
    },
    {
      date: '2023-12-25',
      eventName: 'Churrasco de Natal',
      participants: 20,
      amountRaised: 500.0,
    },
    {
      date: '2023-12-31',
      eventName: 'Réveillon com os Amigos',
      participants: 15,
      amountRaised: 700.0,
    },
  ];

  const handleAddEvent = () => {
    // Lógica para adicionar um novo churrasco
    console.log('Adicionar Churras clicked');
  };

  return (
    <S.EventsContainer>
      <Head>
        <title>Agenda de Churras - Eventos</title>
      </Head>

      <Header />
      <S.Event>
        <S.EventsContent>
          {eventsData.map((event, index) => (
            <EventCard key={index} {...event} onCLick={() => { console.log("Details Page") }} />
          ))}
          <AddEventButton onClick={handleAddEvent} />
        </S.EventsContent>
      </S.Event>
      <Footer />
    </S.EventsContainer>
  );
};

export default Events;
