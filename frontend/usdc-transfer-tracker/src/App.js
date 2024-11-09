import React, { useState, useEffect } from 'react';
import { fetchRecentTransfers } from './api';
import { requestPermission, sendNotification } from './NotificationService';
import TransferList from './components/TransferList';

function App() {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    requestPermission();

    const interval = setInterval(async () => {
      const recentTransfers = await fetchRecentTransfers();

      if (recentTransfers.length > 0) {
        setTransfers(recentTransfers);
        recentTransfers.forEach(transfer => {
          sendNotification(
            'New USDC Transfer Received',
            `From: ${transfer.from}, Amount: ${transfer.value}`
          );
        });
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>USDC Transfer Tracker</h1>
      <TransferList transfers={transfers} />
    </div>
  );
}

export default App;

