import React, {useState} from 'react'
import './AllStyles.css'
import firebase from 'firebase';
import db from './firebase';

function ComponentOne(){
    
    const [inputMsg,setInputMsg]=useState('');

    const addMsg=(event)=>{
        //this will fire off when we click the button
        event.preventDefault(); //will stop the refresh
        
        db.collection('msgs').add({msg:inputMsg, timestamp: firebase.firestore.FieldValue.serverTimestamp()}); //add new document to Collection 'msgs' with filds 'msg' and 'timestamp'
        
        setInputMsg(''); // clear up the input after clicking add todo button
    }


                    

    return(
        <div className='ComponentOne'>
            <h1 className='h1'>Write one thing To Do </h1>
            <br></br>
            <form>       
                <input value={inputMsg} onChange={event=>setInputMsg(event.target.value)} className='h2'/>
                <br></br>
                <br></br>
                <button disabled={!inputMsg} type='submit' onClick={addMsg} className='ButSend'>Add</button>
            </form>
        </div>
    );
}

export default ComponentOne