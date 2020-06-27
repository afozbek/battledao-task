import React from 'react';
import { TournamentCard } from './TournamentCard';

const Tournaments = ({ tournaments, completedTournaments }) => {
  return (
    <React.Fragment>
      <div className="m-tournaments">
        <h1 className="m-tournaments__header">Current Tournaments</h1>

        <div className="m-tournaments__cardWrapper">
          {tournaments.map((tournament) => {
            return (
              <TournamentCard tournament={tournament} key={tournament.id} />
            );
          })}
        </div>
      </div>

      <div className="m-tournaments">
        <h1 className="m-tournaments__header">Past Tournaments</h1>

        <div className="m-tournaments__cardWrapper">
          {completedTournaments.map((tournament) => {
            return (
              <TournamentCard tournament={tournament} key={tournament.id} />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tournaments;
