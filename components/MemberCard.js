import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteMember } from '../api/memberData';

function MemberCard({ memberObj, onUpdate }) {
  const deleteThisMember = () => {
    if (window.confirm(`Delete ${memberObj.name}?`)) {
      deleteMember(memberObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={memberObj.image} alt={memberObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{memberObj.name}</Card.Title>
        <p className="card-text bold">{memberObj.role}</p>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/members/${memberObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/members/edit/${memberObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisMember} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

MemberCard.propTypes = {
  memberObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.bool,
    price: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MemberCard;
