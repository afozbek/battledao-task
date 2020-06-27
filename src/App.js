import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import CurrentTournaments from './components/Tournaments';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const TOURNAMENTS_DATA = gql`
  {
    findTournamentsByString(
      count: 18
      offset: 0
      fieldName: "platform"
      fieldData: "default"
    ) {
      game {
        id
        name
      }
      unlisted
      name
      description
      id
      teamSize
      maxTeams
      participantIds
      tournamentStatus
      coverImage
      thumbnail
      deadline
      createdAt
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(TOURNAMENTS_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const tournaments = data.findTournamentsByString;

  const filterTournaments = (tournaments, filterType) => {
    switch (filterType) {
      case 'NEW':
        return tournaments.filter(
          (tournament) => tournament.tournamentStatus === 'NEW'
        );
      case 'COMPLETE':
        return tournaments.filter(
          (tournament) => tournament.tournamentStatus === 'COMPLETE'
        );
      default:
        return tournaments.filter(
          (tournament) => tournament.tournamentStatus === 'NEW'
        );
    }
  };

  // setTournaments(data.findTournamentsByString);
  const completedTournaments = filterTournaments(tournaments, 'COMPLETE');
  const onGoingTournaments = filterTournaments(tournaments, 'NEW');

  console.log(completedTournaments);
  console.log(onGoingTournaments);

  return (
    <React.Fragment>
      <Header />

      <CurrentTournaments
        tournaments={onGoingTournaments}
        completedTournaments={completedTournaments}
      />

      <Footer />
    </React.Fragment>
  );
};

export default App;
