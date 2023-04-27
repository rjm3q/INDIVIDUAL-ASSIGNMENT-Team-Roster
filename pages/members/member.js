import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getMembers } from '../../api/memberData';
import MemberCard from '../../components/MemberCard';

function ListMembers() {
  const [member, setMember] = useState([{}]);

  const { user } = useAuth();

  const getAllMembers = () => {
    getMembers(user.uid).then(setMember);
  };

  useEffect(() => {
    getAllMembers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex-wrap">
      {member.map((memberItem) => (
        <MemberCard key={memberItem.firebaseKey} memberObj={memberItem} onUpdate={getAllMembers} />
      ))}
    </div>
  );
}

export default ListMembers;
