import { Container, Grid, GridColumn, GridRow, Header, Icon, Segment, Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react';
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

      <Header as='h3'>History</Header>

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






      </Container>
  ); 
}
export default App; 