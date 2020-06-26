import React from 'react';

const Person = ({person, countCharacters, findSimilarity}) =>{

    return(
        <ul className="collection with-header">
            <li className="collection-header"><h5>{person.name}</h5></li>
            <li className="collection-item">{person.email}</li>
            <li className="collection-item">{person.job}</li>
            <li className="collection-item">
            <button className="waves-effect waves-light btn-small"
            onClick={ () => countCharacters(person)}>Count Charts</button>
            &nbsp;
            <button className="waves-effect waves-light btn-small"
            onClick={ () => findSimilarity(person)}>Get Considences</button>
            </li>
        </ul>
    );
};
 
export default Person;