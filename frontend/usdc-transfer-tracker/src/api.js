const SUBGRAPH_ENDPOINT = process.env.REACT_APP_SUBGRAPH_ENDPOINT;

export const fetchRecentTransfers = async () => {
  const query = `
    {
      transfers(first: 5, orderBy: blockTimestamp, orderDirection: desc) {
        from
        to
        value
        blockTimestamp
      }
    }
  `;

  const response = await fetch(SUBGRAPH_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
  const data = await response.json();
  return data.data.transfers;
};
