import React,{useState} from 'react';
import ModalCustom from './Modal';

const Problem2 = () => {
    const [show,setShow] = useState(false);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={()=>setShow(true)} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button onClick={()=>setShow(true)} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                
            </div>
            {
                <ModalCustom show={show} handleClose={()=>setShow(false)}/>
            }
        </div>
    );
};

export default Problem2;