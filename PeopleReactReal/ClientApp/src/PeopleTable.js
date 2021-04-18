import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PersonForm from './PeopleForm';
import PeopleRow from './PeopleRow';

class PeopleTable extends React.Component {

    state = {
        person : {
            firstName: '',
            lastName: '',
            age: ''
        },
        people: []
    }
    onFirstNameChange = e =>{
        this.setState({person: {...this.state.person, firstName: e.target.value}});
    }
    onLastNameChange = e =>{
        this.setState({person: {...this.state.person, lastName: e.target.value}});
    }
    onAgeChange = e =>{
        this.setState({person: {...this.state.person, age: e.target.value}});
    }
    onAddClick = e => {

        let people = this.state.people;
        let person = this.state.person;
        let peopleCopy = [...people,person];
        e.target.value = '';
        this.setState({person : {firstName:'', lastName:'', age: ''}, people : peopleCopy});  
        
    }
    onClearClick = e => {
        
        let people = [];
        this.setState({people : people});

    }
    fillTable = () => {

        if(this.state.people.length == 0){
           return  <h1>There is no one added to the table. Be the first to add someone!</h1>
        }
        else{
              return <div className = 'col-md-9'>
               <table className='table table-hover table-bordered table-striped'>
                   <thead>
                       <tr>
                           <th>
                               First Name
                           </th>
                           <th>
                               Last Name
                           </th>
                           <th>
                               Age
                           </th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.people.map((person, idx) => <PeopleRow person={person} key={idx}></PeopleRow> )}
                   </tbody>
               </table>
               </div>
          
        }
    }
    render() {
        return (
            <div className='container'>
                 <PersonForm OnAddClick={this.onAddClick} 
                            person = {this.state.person}
                            onFirstNameChange={this.onFirstNameChange}
                            onLastNameChange = {this.onLastNameChange}
                            onAgeChange = {this.onAgeChange}
                            OnClearClick = {this.onClearClick}
                 ></PersonForm>
                 {this.fillTable()}
               
    
             </div>
        )
       
    }
}
export default PeopleTable;