import { Button, ButtonGroup, Container, Form, Grid, GridColumn, GridRow, Header, Icon, Segment, Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeade';

function App() {
  return (
    <Container>
      <MainHeader title='Natsbudget'/>


      <Statistic size='small'>
        <StatisticLabel>Your balance</StatisticLabel>
        <StatisticValue>2,550.53</StatisticValue>
      </Statistic>
    
    
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn>
            <Statistic size='tiny' color='green'>
              <StatisticLabel style={{textAlign:'left'}}>
                Incoming:
              </StatisticLabel>
              <StatisticValue>1,045.00</StatisticValue>
            </Statistic>
          </GridColumn>
          
          
          <GridColumn>
          <Statistic size='tiny' color='red'>
              <StatisticLabel style={{textAlign:'left'}}>
                Expenses:
              </StatisticLabel>
              <StatisticValue>623.50</StatisticValue>
            </Statistic>
         </GridColumn>


        </GridRow>
      </Grid>
      </Segment>


<MainHeader title='History' type="h3"/>
     

      <Segment color='red'>
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



      <Segment color='red'>
        <Grid columns={3} textAlign="right">
          <GridRow>
<GridColumn width={10} textAlign='left'>Something</GridColumn>
<GridColumn width={3} textAlign='rigth'>$20,00</GridColumn>
<GridColumn width={3}>
<Icon name='edit' bordered />
<Icon name='trash'bordered/>
</GridColumn>
          </GridRow>
        </Grid>
      </Segment>


<MainHeader title="Add new transaction" type="h3"/>
      <Form unstackable>
        <Form.Group>
          <Form.Input 
          icon='tags' 
          width={12} 
          label='Description'
          placeholder='New shinny thing' 
          />

          <Form.Input 
          width={4}
          label='Value'
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'>
          </Form.Input>
        </Form.Group>
<ButtonGroup style={{marginTop: 20}}>
<Button>Cancel</Button>
<Button.Or/>
<Button primary>Ok</Button>
</ButtonGroup>

      </Form>
      </Container>
  ); 
}
export default App;