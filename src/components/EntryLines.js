import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

function EntryLines({entries}) {
    return (
        <Container>
        {entries.map((entry) => (
        <EntryLine 
        description={entry.description} 
        value={entry.value} 
        isExpnese={entry.isExpnese}
        />
        ))}
        </Container>
    );
}

export default EntryLines;

