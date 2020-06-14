import React from 'react';

/***************************************************************************************************************/
/****************** The building-block box component of the app will be a stateless functional component********/
/****************** We will be passing clickHandling and value props into it from above ************************/



const Box = (props) => {
    return (
        <button className="playBox" onClick={props.clickHandle}>
            {props.value}
        </button>
    )
}

export default Box;