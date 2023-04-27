/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewMember } from '../../api/mergedData';

export default function ViewMember() {
  const [member, setMember] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewMember(firebaseKey).then(setMember);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={member?.image} alt="" style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          Name: {member?.name}
        </h5>
        <h5>
          Role: {member?.role}
        </h5>
        <h5>
          Team Name: {member?.teamObject?.team_name}
        </h5>
      </div>
    </div>
  );
}
