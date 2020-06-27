import React from 'react';
import moment from 'moment';

export const TournamentCard = ({ tournament }) => {
  const deadlineTime = moment(tournament.deadline)
    .format("'MMMM Do YYYY, h:mm a'")
    .replace(/'/g, '');

  return (
    <div className="m-card">
      <img className="m-card__backImg" src={tournament.thumbnail} alt="Card" />
      <div className="m-card__desc">
        <h5 className="m-card__gameName">{tournament.game.name}</h5>
        <h3 className="m-card__gameDesc">{tournament.name}</h3>

        <p>Date: {deadlineTime}</p>
        <p>Team Size: {tournament.teamSize}</p>
        <p>
          {tournament.participantIds.length} / {tournament.maxTeams} Registered
        </p>
      </div>
    </div>
  );
};
