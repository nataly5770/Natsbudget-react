import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries] = useState(initialEntries);
  return (
    <Container>
        <MainHeader title='Natsbudget'/>
        < DisplayBalance title='Your balance' value='1253.54' size='small'/>
      
      < DisplayBalances/>
<MainHeader title='History' type="h3"/>
<EntryLines entries={entries}/>
<MainHeader title="Add new transaction" type="h3"/>
<NewEntryForm />   
      </Container>
  ); 
}
export default App;
var initialEntries = [
  {
  description: "Work income",
    value: "$1000,00",
    isExpnese: false,
  },

  {
    description:"water bill",
  value: "$20,00",
  isExpnese: true,
  },

  {
  description:"rent",
  value: "$300",
  isExpnese: true,
  },

  {
    description:"power bill",
  value: "50.00$",
  isExpnese: true,
  },

];