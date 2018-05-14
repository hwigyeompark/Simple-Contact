import React, {Component} from 'react';

export  class ContactItem extends Component{
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

class ContactList extends Component{
    render(){
        const named = ["박휘겸", "휘겸박", "홍길동", "길동홍"];
        return(
            <div>
                {
                    named.map((item) => <ContactItem itemName = {item}/>)
                }
            </div>
        )
    }
}
export default ContactList;