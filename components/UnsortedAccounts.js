import { useState, useContext } from 'react';
import { StatementContext } from '../context/statementContext/statementState';
import Account from './Account';
import { usePlayersConext } from '../context/playersContext/playersState'

const UnsortedAccounts = () => {
  const { transactions } = useContext(StatementContext);
  const { players } = usePlayersConext();
  console.log(players)
  return (
    <>
    unsorted accounts
      {transactions.length > 0 &&
        transactions.map((transaction) => (
          <Account transaction={transaction} />
        ))}
    </>
  );
};

export default UnsortedAccounts;
