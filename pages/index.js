/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';
import { getTeams } from '../api/teamData';
import TeamCard from '../components/TeamCard';

function Home() {
  const [teams, setTeams] = useState([]);
  const { user } = useAuth();
  const getAllTeams = () => {
    getTeams(user.uid).then(setTeams);
  };
  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/teams/new" passHref>
        <Button>Add A TEAM</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over teams using TeamsCard component */}
        {teams.map((team) => (
          <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getAllTeams} />
        ))}
        <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Home;
