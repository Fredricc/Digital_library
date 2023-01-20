import React, { useEffect, useState, useRef } from 'react';

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

    /* CONDITONAL RENDERING */
    let FredAge = () => {
        if (age > 25)
            return (<p> Fred has more than 25 years </p>)
        else
            return (<p> Fred has 25 years or less </p>)
    }
    /* ITERATIONS */
    let users = [
        { name: 'Fred', age: 20},
        { name: 'John', age: 34},
        { name: 'Hellen', age: 18},
        { name: 'Paul', age: 29 },
    ]

    /* ITERATIONS */
    const [userName, setUserName] = useState("David");
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    const handleSubmit = (event) => {
        alert("Form submitted: Value: " + userName)
    }

    //ITERATION EXAMPLE 1
    let userList = users.map((user) =>
        <li key={user.name}>Name: {user.name} - Age: {user.age}</li>
    );

    /* REFS */
    const inputRefName = useRef(null);
    const inputRefTelephone = useRef(null);
    const clearRefFields = () => {
        inputRefName.current.value = "";
        inputRefTelephone.current.value = "";
        inputRefName.current.focus();
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
            <button onClick={showDetails.bind(this, 123456789)}> Show Details</button>

            {/* CONDITONAL RENDERING */}
            <hr />
            <h4>Conditional rendering</h4>

            {/* EXAMPLE 1 - IF/ELSE */}
            {FredAge()}

            {/* EXAMPLE 2 - TERNARY OPERATOR */}
            <p>{age > 25 ? 'Fred has more than 25 years' : 'Fred has 25 years or less'}</p>

            {/* EXAMPLE 3 - SHORT-CIRCUIT OPERATOR */}
            {age > 25 && <p>'Fred has more than 25 years'</p>}
            {age <= 25 && <p>'Fred has 25 years or less'</p>}

            {/* EXAMPLE 4 - IMEDIATELY INVOLVED FUNCTION */}
            {
                (() => {
                    switch (age) {
                        case 25: return <p>Fred has 25 years</p>;
                        default: return <p>Fred is not 25 years</p>
                    }
                })()
            }

            <hr />
            {/* ITERATION */}
            <ul>
                {/* EXAMPLE  1*/}
                {userList}
            </ul>

            {/* EXAMPLE  2*/}
            <ul>
            <hr />
            {users.map((user) =>
                <li key={user.name}> Name: {user.name} - Age: {user.age}</li>)
                }
            </ul>

            {/* FORMS */}
            <hr />
            <h4>Form</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={userName} onChange={handleUserNameChange } />
                </label>
                <input type="submit" value= "Submit" />
            </form>

            {/* REF */}
            <hr />
            <h4>Refs</h4>
            <label>
                Name:
                <input type="text" ref={ inputRefName} />
            </label>
            <label>
                Telephone:
                <input type="text" ref={inputRefTelephone} />
            </label>
            <button onClick={clearRefFields.bind(this)}>Clear Fields</button>
            <hr/>


        </div>
    )
}

export default MyFunctionalComponent;