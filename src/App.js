import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries,setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen ] = useState(false);
  const [entryID, setEntryId] = useState();

  useEffect(() => {
    if(!isOpen && entryID) {
      const index = entries.findIndex(entry => entry.id === entryID);
      const newEntries = [...entries];
      newEntries[index].description = description; 
      newEntries[index].value = value; 
      newEntries[index].isExpnese = isExpense; 
      setEntries(newEntries);
      resetEntry();


    }

  }, [isOpen])
  
  //const deleteEntry = (id) => {}

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id); 
    setEntries(result);
}

function editEntry(id){ 
  console.log('edit entry with id ${id}');
  if(id){
    const index = entries.findIndex(entry => entry.id === id);
    const entry = entries[index];
    setEntryId(id);
    setDescription(entry.description);
    setValue(entry.value);
    setIsExpense(entry.isExpnese);
    setIsOpen(true);
  }
}

function addEntry() {
const result = entries.concat({
  id: entries.length+1, 
  description, 
  value,
  isExpense,

});
console.log('result', result);
console.log('entries', entries);
setEntries(result);
resetEntry();
}

function resetEntry(){
  setDescription('');
  setValue('');
  setIsOpen(true);

}

  return (
    <Container>
        <MainHeader title='Natsbudget'/>
        < DisplayBalance title='Your balance' value='1253.54' size='small'/>
      
      < DisplayBalances/>

<MainHeader title='History' type="h3"/>


<EntryLines 
entries={entries} 
deleteEntry={deleteEntry} 
editEntry={editEntry}

/>

<MainHeader title="Add new transaction" type="h3"/>
<NewEntryForm 

addEntry={addEntry} 
description={description}
value={value}
isExpense={isExpense}
setValue={setValue}
setDescription={setDescription}
setIsExpense={setIsExpense}

/> 
<ModalEdit 
isOpen={isOpen} 
setIsOpen={setIsOpen} 
addEntry={addEntry} 
description={description}
value={value}
isExpense={isExpense}
setValue={setValue}
setDescription={setDescription}
setIsExpense={setIsExpense}


/>

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