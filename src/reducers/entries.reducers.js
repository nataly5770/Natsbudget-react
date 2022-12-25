 const reducers = (state = initialEntries, action) => {
    let newEntries; 
  
  switch (action.type) {
    case 'ADD_ENTRY':
       newEntries = entries.state( {...action.payload});
      return newEntries;
    case 'REMOVE_ENTRY':
       newEntries = state.filter(entry => entry.id !== action.payload.id);
      return newEntries;  
  
    default:
     return state; 
      }
  }; 
export default reducers;

var initialEntries = [
    {
      id: 1,
    description: "Work income",
      value: 25.00,
      isExpnese: false,
    },
  
    {
      id:2, 
      description:"water bill",
    value: 25,
    isExpnese: true,
    },
  
    {
      id:3, 
    description:"rent",
    value: 3.000,
    isExpnese: true,
    },
  
    {
      id:4,
      description:"power bill",
    value: 650,
    isExpnese: true,
    },
  
  ];
  