const initialState = {
    people:[
      {
        name: 'Maria',
        surname: 'Ionescu',
        job: 'secretar',
        salary: 3500,
        employmentDate: '10.05.2021'
      },
      {
        name: 'Gheorghe',
        surname: 'Gerogescu',
        job: 'avocat',
        salary: 6000,
        employmentDate: '10.12.2021'
      },
      {
        name: 'Angela',
        surname: 'Cuza',
        job: 'inginer',
        salary: 5500,
        employmentDate: '20.05.2021'
      }
    ]
}

function reducer(state = initialState, action) {
  switch(action.type) {
      case 'ADD_PERSON':
        return {...state, people: [...state.people, action.payload]};
      default:
        return state;
  }
}

export default reducer;