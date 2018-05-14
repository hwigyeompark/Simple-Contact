import React, {Component} from 'react';

class ContactList extends Component{
    static defaultProps = {
      noName : "No Name"
    };
    render(){
        return(
          <div>
            <div>{this.props.noName}</div>
          </div>
        );
    }
}
export default ContactList;