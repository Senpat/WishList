import React from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';





const List = () => {
    

    return (
        <div class="innerlist">
            <h1>My WishList</h1>
        </div>
    )
}

const App = () => {

    return (
        <div class="whole">
            <List />
        </div>
        
        
    )
}

export default App