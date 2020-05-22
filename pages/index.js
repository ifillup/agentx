import Register from '../components/Register';
import { PlayersContext } from '../context/playersContext/playersState';
import { useContext, useState, useEffect } from 'react';
import { StatementContext } from '../context/statementContext/statementState';
export default function Home() {
  return (
    <>
      <Register />
    </>
  );
}
