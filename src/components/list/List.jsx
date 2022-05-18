import React from 'react';
import Person from '../person/Person';

function List(props) {
  const {people} = props;
  return (
    <div className='list d-flex flex-column align-items-start'>
        {
          people 
          ? people.map((person, index) => {
            return(
              <Person name = {person.name}
                      surname = {person.surname} 
                      job = {person.job} 
                      salary = {person.salary} 
                      employmentDate = {person.employmentDate}
                      key = {index}
              />
            )
          })
          : null
        }
    </div>
  )
}
export default List;