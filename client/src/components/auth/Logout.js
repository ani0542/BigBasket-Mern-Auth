import React, { Component } from 'react'
import { connect } from 'react-redux';
import {logout} from '../../actions/authActions';

import {
   
    NavLink,
   
  } from 'reactstrap';



 class Logout extends Component {
    render() {
        return (
            <div>
                    <NavLink onClick={this.props.logout} style={{cursor:'pointer'}}>
                             Logout
                    </NavLink>
            </div>
        )
    }
}


const mapDispatchToProps = {
    logout:logout
  }

export default connect(null,{logout})(Logout)
