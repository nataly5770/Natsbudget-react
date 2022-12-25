import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import {useSelector} from 'react-redux'


function App() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen ] = useState(false);
  const [entryID, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector((state) => state.entries);
  
  
  useEffect(() => {
    if(!isOpen && entryID) {
      const index = entries.findIndex(entry => entry.id === entryID);
      const newEntries = [...entries];
      newEntries[index].description = description; 
      newEntries[index].value = value; 
      newEntries[index].isExpnese = isExpense; 
      //setEntries(newEntries);
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



  //const deleteEntry = (id) => {}

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id); 
    //setEntries(result);
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
//setEntries(result);
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


<EntryLines entries={entries} editEntry={editEntry}/>
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


