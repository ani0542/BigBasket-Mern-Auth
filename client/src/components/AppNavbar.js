import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavLink
  } from 'reactstrap';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import RegisterModal from './auth/RegisterModal';


 

 class AppNavbar extends Component {
    state={
              isOpen:false
    }

    toggle=()=>{
       this.setState({
           isOpen:!this.state.isOpen
       })
    }


    render() {

        const {isAuthenticated,user} = this.props.auth;



        const authLinks = (
            <>
                        <NavItem>
                                   <span className='navbar-text mr-3'>
                                         <strong style={{cursor:'pointer'}}>{user ? `Welcome ${user.name}`:''}</strong>
                                   </span>
                        </NavItem>
                                                            <NavItem>
                                                                     <Logout/>
                                                            </NavItem>
            </>
        )



        const guestLinks = (
            <>
                                                             <NavItem>
                                                                      <RegisterModal/>
                                                                      
                                                            </NavItem>


                                                            <NavItem>
                                                                      <LoginModal/>
                                                                      
                                                            </NavItem>
                             
            </>
        )
        return (
            <>
                   <Navbar color='dark' dark expand='sm' className='mb-5'>
                                 <Container>
                                        <NavbarBrand href='/'>Shopping List</NavbarBrand>
                                        <NavbarToggler onClick={this.toggle}/>
                                        <Collapse isOpen={this.state.isOpen} navbar>
                                                     <Nav className='ml-auto' navbar>
                                                           

                                                                {isAuthenticated?authLinks:guestLinks}

                                                             
                                                     </Nav>    
                                        </Collapse>
                                 </Container>
                   </Navbar>
            </>
        )
    }
}

// export default AppNavbar;



const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth:state.auth
    }
  }
  


export default connect(mapStateToProps,null)(AppNavbar)





















