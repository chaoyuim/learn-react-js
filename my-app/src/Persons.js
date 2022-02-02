import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';


const Persons = ({ persons }) => {
    const persons_list = persons.map(el => {
        return (
            el.age > 100 ? (
                <Fragment key={el.id}>
                    <br></br>
                    <div className="persons" >
                        <div>Name: {el.name}</div>
                        <div>Age: {el.age}</div>
                        <div>belt: {el.belt}</div>
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
