import { Container, Grid, GridColumn, GridRow, Header, Segment, Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>Natsbudget</Header>
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
      </Container>
  ); 
}
export default App; 