import React from 'react';

const MyFunctionalComponent = (props) => {
    return (
        <div>
            <h2>
                My Functional Component!!!
                { /* Props */}

            </h2>
            <h4> Name: <b> { props.name ? props.name : "Fred"}</b></h4>
        </div>
    )
}

export default MyFunctionalComponent;