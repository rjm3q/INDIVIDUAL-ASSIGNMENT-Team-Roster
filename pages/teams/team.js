import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import TeamCard from '../../components/TeamCard';
import getTeam from '../../api/teamData';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  const { user } = useAuth();

  const getAllTeams = () => {
    getTeam(user.uid).then(setTeams);
  };

  return (
    <div className="text-center my-4">
      <Link href="/teams/new" passHref>
        <Button>Add A Team</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {teams.map((teamID) => (
          <TeamCard key={teamID.firebaseKey} teamObj={teamID} onUpdate={getAllTeams} />
        ))}
      </div>
    </div>
  );
}
