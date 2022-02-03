import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';


const Persons = ({ persons, onClickDeleteHandler }) => {
    const persons_list = persons.map(el => {
        return (
            el.age > 0 ? (
                <Fragment key={el.id}>
                    <br></br>
                    <div className="persons" >
                        <div>Name: {el.name}</div>
                        <div>Age: {el.age}</div>
                        <div>belt: {el.belt}</div>
                        <button onClick={() => { onClickDeleteHandler(el.id) }}>Delete</button>
                    </div>
                </Fragment>
            ) : null
        )
    })
    return (
        <div className="person_list">
            {persons_list}
        </div>

    );
}



export default Persons;
