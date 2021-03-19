import React from 'react';
import CreateForm from '../components/createForm.js';
import List from '../components/list.js';

function HomePage({
    data,
    createCallback,
    selectCallback,
    showAllCallback
}) {
    
    return (
        <>
            <CreateForm handleSubmit={createCallback}/>
            <List
                items={data}
                handleSelect={selectCallback}
                handleShowAll={showAllCallback}
            />
        </>
    )
}

export default HomePage;