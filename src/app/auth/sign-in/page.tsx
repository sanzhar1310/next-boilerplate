import React from 'react';
import Button from '@mui/material/Button';
import { signIn } from 'src/lib/auth';
import Container from '@mui/material/Container';

export default function LoginPage() {
  return (
    <Container>
      <h1>Login Page</h1>
      <Button
        onClick={() => {
          'use server';
          signIn('credentials', {});
        }}
      >
        Sign in
      </Button>
    </Container>
  );
}
