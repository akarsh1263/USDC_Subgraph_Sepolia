import React from 'react';

const TransferList = ({ transfers }) => (
  <div>
    <h2>Recent Transfers</h2>
    <ul>
      {transfers.map((transfer, index) => (
        <li key={index}>
          From: {transfer.from} - To: {transfer.to} - Amount: {transfer.value} - Time: {new Date(transfer.timestamp * 1000).toLocaleString()}
        </li>
      ))}
    </ul>
  </div>
);

export default TransferList;
