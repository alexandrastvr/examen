import React from 'react';
import List from '../../components/list/List';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../styles/People.css';

class People extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      people: []
    }
  }
  componentDidMount(){
    this.setState({people:this.props.people});
  }
  orderByName(){
    this.setState({people: this.state.people.sort((a,b) => a.name.localeCompare(b.name))})
  }
  orderBySalary() {
    this.setState({people: this.state.people.sort((a,b) => a.salary < b.salary ? -1 : 1)})
  }
  filterFirst() {
    const newPeopleArray = this.props.people.filter((person) => person.salary < 2500);
    this.setState({people: newPeopleArray})
  }
  filterSecond() {
    const newPeopleArray = this.props.people.filter((person) => person.salary > 2500 && person.salary < 4000);
    this.setState({people: newPeopleArray})
  }
  filterThird() {
    const newPeopleArray = this.props.people.filter((person) => person.salary > 4000);
    this.setState({people: newPeopleArray})
  }
  render() {
    return (
      <div className='container w-50 people'>
        <Link to={'/'} className='mb-5' style={{textDecoration:'none', color:'black'}}>
            <div className='linkPg mb-5 effect' style={{width: '6.5em'}}>Inapoi la formular</div>
        </Link>
        <div className='buttons d-flex flex-column align-items-end'>
            <p className='mt-5 '>Sorteaza dupa...</p>
            <button onClick={() => this.orderByName()} className='effect2 mb-2'>Nume</button>
            <button onClick={() => this.orderBySalary()} className='effect2 mb-2'>Salariu</button>
            <p className='mt-5'>Filtreaza persoanele cu salariu intre...</p>
            <button onClick={() => this.filterFirst()} className='effect2 mb-2'> &#60;2500</button>
            <button onClick={() => this.filterSecond()} className='effect2 mb-2'> 2500 - 4000</button>
            <button onClick={() => this.filterThird()} className='effect2 mb-2'> &#62;4000</button>
            
        </div>
        <h3 className='mt-5 mb-4'>Persoanele adaugate</h3>
        <List people= {this.state.people}/>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    people: state.people
  }
}
export default connect(mapStateToProps)(People);