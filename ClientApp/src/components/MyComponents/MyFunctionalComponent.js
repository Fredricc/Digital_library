import React, { useEffect } from 'react';

const MyFunctionalComponent = (props) => {

    function componentMount() {
        alert("Component rendered");
    }
    function componentUnmount() {
        alert("Leaving the component");
    }

    useEffect(() => {
        componentMount();
        return () => {
            componentUnmount();
        }
    },[])

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