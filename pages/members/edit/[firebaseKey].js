import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../../../api/memberData';
import MemberForm from '../../../components/forms/MemberForm';

export default function EditMember() {
  const [edit, setEdit] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setEdit);
  }, [firebaseKey]);

  return (<MemberForm obj={edit} />);
}
