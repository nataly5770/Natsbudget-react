import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import {createStore} from 'redux';
import { act } from 'react-dom/test-utils';

function App() {
  const [entries,setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen ] = useState(false);
  const [entryID, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(()=> {
    let totalIncomes = 0;
    let totalExpenses = 0;
entries.map((entry) => {
  if(entry.isExpnese){
    return (totalExpenses += Number (entry.value));
  } 
    return (totalIncomes += Number (entry.value));
});
 setTotal(totalIncomes - totalExpenses);
 setExpenseTotal(totalExpenses); 
 setIncomeTotal(totalIncomes);
  }, [entries]);
///

const store = createStore((state = initialEntries, action) => {
  console.log(action);
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
});

store.subscribe(()=> {
  console.log('store: ', store.getState());
})

const payload_add = {
  id: 5,
  description: "Hello from Redux", 
  value: 999,
  isExpense: true,
};

const payload_remove = {
  id: 1
};


function addEntryRedux(payload){
  return { type: 'ADD_ENTRY ', payload };
}

function removeEntryRedux(id) {
  return { type: 'REMOVE_ENTRY', payload: {id}}
}

store.dispatch(addEntryRedux(payload_add));
store.dispatch(removeEntryRedux(1));
store.dispatch(removeEntryRedux(2));
store.dispatch(removeEntryRedux(3));
store.dispatch(removeEntryRedux(4));
store.dispatch(removeEntryRedux(5));
///



  //const deleteEntry = (id) => {}

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id); 
    setEntries(result);
}

function editEntry(id){ 
  console.log(`edit entry with id ${id}`);
  if(id){
    const index = entries.findIndex((entry) => entries);
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
        < DisplayBalance title='Your balance' value={total} size='small'/>
      
      < DisplayBalances 
      expenseTotal={expenseTotal} 
      incomeTotal={incomeTotal}
      />

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