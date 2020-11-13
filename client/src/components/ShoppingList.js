import React, { Component } from 'react'
import { ListGroup, ListGroupItem,Button,Container } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {getItems,deleteItem} from '../actions/itemsActions';
import { connect } from 'react-redux';






 class ShoppingList extends Component {
   

    


    componentDidMount(){
        this.props.getItems()
    }


    deleteClick=(id)=>{
        this.props.deleteItem(id)
    }

    render() {

        const {itemsd} = this.props;

         console.log(itemsd)



       

        



        return (
            <>
                    <Container>
                             
                             {this.props.isAuthenticated ?

                              <ListGroup>
                                
                                         {
                                             itemsd.map((value)=>{
                                                //  console.log(id,name)
                                                // console.log(value)
                                                 return(
                                                    <ListGroupItem key={value._id}>

                                                       <Button 
                                                         onClick={this.deleteClick.bind(this,value._id)}
                                                        className="remove-btn"
                                                        color="danger"
                                                        size="sm"
                                                        style={{float:'left'}}
                                                       
                                                        // onClick={}
                                                        >
                                                               &times;
                                                        </Button>
                                                            {value.name}
                                                    </ListGroupItem>

                                                 )
                                             })
                                         }
                                
                              </ListGroup>

                              : null }
                    </Container>
            </>
        )
    }
}

// export default ShoppingList


// const mapStateToProps = state => ({
//     itemsd: state.item.items,
    
//   });


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        itemsd: state.item.items,
        isAuthenticated: state.auth.isAuthenticated
    }
  }



  
  

export default connect(mapStateToProps, {getItems,deleteItem})(ShoppingList)

























