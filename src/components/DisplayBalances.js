import React from 'react'
import { Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({expenseTotal, incomeTotal}) {
    return (
    <Segment textAlign='center'>
    <Grid columns={2} divided>
      <GridRow>
        <GridColumn>
        < DisplayBalance title='Income' value={incomeTotal} color='green'/>
        </GridColumn>
        <GridColumn>
        < DisplayBalance title='Expenses' value={expenseTotal} color='red'/>
       </GridColumn>
      </GridRow>
    </Grid>
    </Segment>
    );
}

export default DisplayBalances;