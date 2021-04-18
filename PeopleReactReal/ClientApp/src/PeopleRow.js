
import React from 'react';


class PeopleRow extends React.Component{

    createRow = () =>{
        let classNameRow = '';
        {this.props.person.age > 65 ? classNameRow = 'table-danger' : classNameRow = ''}
      return <tr className = {classNameRow}>
          <td>
              {this.props.person.firstName}
          </td>
          <td>
              {this.props.person.lastName}
          </td>
          
          <td>
              {this.props.person.age}
          </td>
          
      </tr>
    }
    render() {
        return(
         this.createRow()
        )
    }
}
export default PeopleRow;