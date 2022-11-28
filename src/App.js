import { Container, Grid, GridColumn, GridRow, Icon, Segment } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
        <MainHeader title='Natsbudget'/>
        < DisplayBalance title='Your balance' value='1253.54' size='small'/>
      < DisplayBalances/>


<MainHeader title='History' type="h3"/>
     

      <Segment color='pink'>
        <Grid columns={3} textAlign="right">
          <GridRow>
<GridColumn width={10} textAlign='left'>Something</GridColumn>
<GridColumn width={3} textAlign='rigth'>$10,00</GridColumn>
<GridColumn width={3}>
<Icon name='edit' bordered />
<Icon name='trash'bordered/>
</GridColumn>
          </GridRow>
        </Grid>
      </Segment>




      <Segment color='green'>
        <Grid columns={3} textAlign="right">
          <GridRow>
<GridColumn width={10} textAlign='left'>Something else</GridColumn>
<GridColumn width={3} textAlign='rigth'>$100,00</GridColumn>
<GridColumn width={3}>
<Icon name='edit' bordered />
<Icon name='trash'bordered/>
</GridColumn>
          </GridRow>
        </Grid>
      </Segment>


<EntryLine />
<EntryLine />
    

<MainHeader title="Add new transaction" type="h3"/>
<NewEntryForm />   
      </Container>
  ); 
}
export default App;