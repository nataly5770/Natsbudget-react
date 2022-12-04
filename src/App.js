import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries,setEntries] = useState(initialEntries);

  //const deleteEntry = (id) => {}

  function deleteEntry(id) {
const result = entries.filter((entry) => entry.id !== id); 
setEntries(result);
}

function addEntry(description, value) {
const result = entries.concat({
  id: entries.length+1, 
  description, 
  value,

});
console.log('result', result);
console.log('entries', entries);
setEntries(result);
}


  return (
    <Container>
        <MainHeader title='Natsbudget'/>
        < DisplayBalance title='Your balance' value='1253.54' size='small'/>
      
      < DisplayBalances/>

<MainHeader title='History' type="h3"/>




<EntryLines entries={entries} deleteEntry={deleteEntry}/>



<MainHeader title="Add new transaction" type="h3"/>
<NewEntryForm addEntry={addEntry} /> 



      </Container>
  ); 
}
export default App;
var initialEntries = [
  {
    id: 1,
  description: "Work income",
    value: "$1000,00",
    isExpnese: false,
  },

  {
    id:2, 
    description:"water bill",
  value: "$20,00",
  isExpnese: true,
  },

  {
    id:3, 
  description:"rent",
  value: "$300",
  isExpnese: true,
  },

  {
    id:4,
    description:"power bill",
  value: "50.00$",
  isExpnese: true,
  },

];