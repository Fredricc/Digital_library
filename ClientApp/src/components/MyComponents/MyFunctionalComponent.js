import React, { useEffect, useState } from 'react';

const MyFunctionalComponent = (props) => {

    function componentMount() {
        //alert("Component rendered");
    }
    function componentUnmount() {
        //alert("Leaving the component");
    }


    useEffect(() => {
        componentMount();
        return () => {
            componentUnmount();
        }
    }, [])

    /* STATE */
    const [age, setAge] = useState(20);

    /* EVENT HANDLING */
    const onChangeAgeInput = (event) => {
        alert("Age has been changed");
        setAge(parseInt(event.target.value));
    }
    const showDetails = (prTelephone) => {
        alert(`Name: ${props.name ? props.name : `John`} | Age: ${age} | Telephone: ${prTelephone}`)
    }

    return (
        <div>
            <h2>My Functional Component</h2>

            {/* PROPS */}
            < hr />
            <h4>Name: <b>{props.name ? props.name : "Fred"}</b></h4>
             
            {/* STATE */}
            < hr />
            <h4>State</h4>
            <span>
                <b>Age:  </b><input type= "number" value={age} onChange={onChangeAgeInput} />
                <button onClick={() => setAge(age + 1)}> + </button>
                <button onClick={() => setAge(age - 1)}> - </button>
            </span>

            {/* EVENT HANDLING*/}
            <hr />
            <h4>Event Handling</h4>
            <button onClick={showDetails.bind(this, 123456789) }> Show Details</button>

        </div>
    )
}

export default MyFunctionalComponent;