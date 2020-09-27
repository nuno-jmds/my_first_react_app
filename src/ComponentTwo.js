import React , {useState,useEffect} from 'react'
import './AllStyles.css'
import db from './firebase';
import Modal from 'react-modal'

function ComponentTwo(){
 
    function Msgs(props){
        const customStyles = {
            content : {
                width:'30%',
                bottom:'auto',
                top:'50%',
                left:'50%',
                transform: 'translate(-50%,-50%)',
                backgroundColor:'#373738',
                borderRadius: '15px',
                
            }
        };
        const updateMsg=()=>{
            //update the message with the new input text
            db.collection('msgs').doc(props.data.id).set({msg:input},{merge: true});
            setIsOpen(false)
        }
 
        const [modalIsOpen,setIsOpen]=useState(false);
        const [input,setInput]=useState('');
        return(
            <>
                <Modal style={customStyles} isOpen={modalIsOpen}>
                    <div className='Modal'>            
                        <h1 className='h1'>Edit this To Do item</h1>
                        <form>   
                            <input placeholder={props.data.message} value={input} onChange={event=>setInput(event.target.value)} className='h2'/>
                            <br></br>
                            <br></br>
                            <button disabled={!input} type='submit' onClick={updateMsg} className='ButModal'>  Update Message</button>
                        </form>   
                    </div>
                </Modal>
                <div className='DivMsg'>
                    <h1 className='LiStyle'> {props.data.message}</h1>
                    <button className='ButDel' onClick={event=>db.collection('msgs').doc(props.data.id).delete()}>DELETE</button>
                    <button className='ButEdit' onClick={event=>setIsOpen(true)}>EDIT</button>
                </div>
           </>
        )
      
    }
    
    


     


    const [msgs,setMsgs]=useState([]);
    //when the app loads, we need to listen to the database amd fetch new msgs as they get added/removed
        useEffect(()=>{
        //this code here... fires when the app.js loads
        
        db.collection('msgs').orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setMsgs(snapshot.docs.map(doc=>({id: doc.id, message:doc.data().msg})))
        });
        
    },[]);

    return(
        <div className='ComponentTwo'>
            <h1 className='h1'>Things To Do</h1>
            <div>
               {msgs.map(msg=>(<Msgs data={msg}/>))}
            </div>
        </div>
    );
}

export default ComponentTwo