
// list() — Returning HTML string with all client entries
const list = clientsArray => {
    return clientsArray.map(client => 
      `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance.toFixed(2)}</strong>
      </li>`
    ).join('');
  };
  
  // order() — Returning sorted array by a given property (index, name, balance)
  const order = (clientsArray, property) => {
    return [...clientsArray].sort((a, b) => {
      if (typeof a[property] === 'string') {
        return a[property].localeCompare(b[property]); // sorting by letter order
      }
      return a[property] - b[property]; // sorting by numbers
    });
  };
  
  // total() — Returning the total of all client balances
  const total = clientsArray => {
    return clientsArray.reduce((sum, client) => sum + client.balance, 0);
  };
  
  // info() — Returning a single client object using index
  const info = index => {
    return clients.find(client => client.index === index);
  };
  
  // search() — Returning array of clients with name that includes the query
  const search = query => {
    const lowerQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerQuery));
  };
  