import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function Signout() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Git!</h1>
      <p>Go ON!! click to scram!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signOut}>
        Goodbye
      </Button>
    </div>
  );
}

export default Signout;
