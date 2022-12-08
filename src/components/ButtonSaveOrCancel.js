import React from 'react';
import { Button, ButtonGroup } from 'semantic-ui-react';

function ButtonSaveOrCancel({addEntry, description, value, isExpense}){
    return (
<ButtonGroup style={{ marginTop: 20 }}>
<Button>Cancel</Button>
<Button.Or/>
<Button primary onClick={() => addEntry(description, value, isExpense)}>
    Ok
    </Button>
</ButtonGroup>
    );
}

export default ButtonSaveOrCancel;