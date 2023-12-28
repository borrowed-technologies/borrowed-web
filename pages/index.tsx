import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Dashboard from '../src/dashboard/Dashboard';

export default function Home() {
  return (
    <Container maxWidth="lg">
        <Dashboard />
    </Container>
  );
}
