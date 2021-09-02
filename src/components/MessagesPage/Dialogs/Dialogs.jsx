import React from 'react'
import Dialog from "../Dialog/Dialog"

const Dialogs = (props) => {

    const dialogs = props.dialogs.map(dialog => {
        return <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>
    })

    return (
        <div>
            { dialogs }
        </div>
    )
};

export default Dialogs