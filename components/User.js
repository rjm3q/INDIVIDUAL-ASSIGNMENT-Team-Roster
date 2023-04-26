import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserCard() {
  const { user } = useAuth();

  return (
    <Card style={{ width: '25rem', margin: '10px' }}>\
      <Card.Img variant="top" src={user.image} alt={user.Name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <Card.Text>
          <p>Email: {user.email}</p>
          <p>Last login: {user.metadata.lastSignInTime}</p>
          <Button type="button" onClick={signOut}>Sign Out</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    metadata: PropTypes.shape({
      lastSignInTime: PropTypes.string,
    }),
  }),
};

UserCard.defaultProps = {
  userObj: {
    image: 'No Image',
    Name: 'No Name',
    Email: 'No Email',
    metadata: {
      lastSignInTime: 'No Login Time',
    },
  },
};
