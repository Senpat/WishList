import React from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';

import {useState} from 'react'


const App = (props) => {
    //console.log(props.wishList)
    return (
        <div class="whole">
            <List props={props} />
        </div>
        
        
    )
}


const List = ({props}) => {
    const [textbox, setTextbox] = useState("")

    const changeText = (e) => {
        setTextbox(e.target.value)
    }

    const addToList = () => {
        if(textbox !== ""){
            props.add(textbox)
            setTextbox("")
        }
        
    }

    const submit = () => {
        if(props.wishList.length === 0){
            alert("Cannot submit - wishlist empty!")
        } else {
            props.submit()
            alert("Wishlist submitted to Santa!")
        }
        
    }

    return (
        <div class="innerlist">
            <h1 class="title">MY WISHLIST</h1>
            <Box props={props} />
            <input type='text' class="textbox" value={textbox} onChange={(e) => changeText(e)} />
            <button class="addbutton" onClick={addToList}>Add</button>
            <button class="submitbutton" onClick={submit}>Submit</button>
        </div>
    )
}   


const Box = ({props}) => {

    const deleteFromList = (index) => {
        props.delete(index)
    }
    
    return (
        <div class="box">
            {props.wishList.map((item,index) => (
                <button class="items" onClick={() => deleteFromList(index)}>{item}</button>
            ))}
        </div>
    )
}




const mapStateToProps = (state) => {
    //console.log(state)
    return {
        wishList: state.wishList
    }
}

const mapDispatchToProps = {
    add: addItem,
    delete: deleteItem,
    submit: () => {return{
        type:'SUBMIT_FORM',
    }}
}
    
    
//const mapDispatchToProps = () => {addItem,deleteItem}

//export default App
export default connect(mapStateToProps,mapDispatchToProps)(App)