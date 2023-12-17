// pages/EventDetails.tsx
import React from 'react';
import Head from 'next/head';
import * as S from './styles';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ParticipantCard from '@/components/EventDetails/ParticipantCard';
import EventHeader from '@/components/EventDetails/EventHeader';

const EventDetails: React.FC = () => {
  // Exemplo de dados para o cabeçalho
  const eventData = {
    date: '2023-12-25',
    eventName: 'Churrasco de Natal',
    participantsCount: 20,
    totalAmount: 500.0,
  };

  // Exemplo de dados para participantes
  const participants = [
    { name: 'João', amountDonated: 50 },
    { name: 'Maria', amountDonated: 30 },
    // Adicione mais participantes conforme necessário
  ];

  return (
    <S.EventDetailsContainer>
      <Head>
        <title>Detalhes do Evento</title>
      </Head>
      <Header />
      <S.EventDetailsContent>
        <EventHeader {...eventData} />
        {participants.map((participant, index) => (
          <ParticipantCard key={index} {...participant} />
        ))}
      </S.EventDetailsContent>
      <Footer />
    </S.EventDetailsContainer>
  );
};

export default EventDetails;
