  import React, { Fragment } from 'react';
  import { Grid, GridColumn, GridRow, Icon, Segment } from 'semantic-ui-react';
  import {useDispatch} from 'react-redux';
import { removeEntryRedux } from '../actions/entries.actions';
import {openEditModal} from '../actions/modals.actions'
  function EntryLine({
    id, 
    description, 
    value,
    isExpnese = false, 

  }){
   

    const dispatch = useDispatch();
    return (
    <Fragment>
  <Segment color={isExpnese ? 'red' : 'green'}>
  <Grid columns={3} textAlign="right">
    
    <GridRow>
  <GridColumn width={10} textAlign='left'>
    {description}
  </GridColumn>
  <GridColumn width={3} textAlign='rigth'>
    {value}
    </GridColumn>
  <GridColumn width={3}>
  
  <Icon name='edit' 
  bordered 
  onClick={() => dispatch(openEditModal(id))}/>
  
  
  
  
  <Icon name='trash' 
  bordered 
  onClick={()=> dispatch(removeEntryRedux(id)
  ) }/>  


  </GridColumn>
    </GridRow>
  </Grid>
  </Segment>
  
</Fragment>

  )
  }

  export default EntryLine; 

