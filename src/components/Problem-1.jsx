import React, { useState } from 'react';

const Problem1 = () => {
    const [user, setUser] = useState({ name: '', status: '' })
    const [activeUser,setActiveUser] = useState([]);
    const [CompleteUser,setCompleteUser] = useState([]);
    const [PendingUser,setPendingUser] = useState([]);
    const [ArchiveUser,setArchiveUser] = useState([]);
    const [error, setError] = useState(null);
    const [current,setCurrent] = useState('all');

    const [show, setShow] = useState('all');

    const handleClick = (val) => {
        setShow(val);
    }

    const handleInput = (property, e) => {
        setError(null);
        let newUser = { ...user };
        newUser[property] = e.target.value;
        setUser(newUser);
    }

    const handleError = (val) => {
        let newError ;
        if (val !== 'Active' && val !== 'Completed' && val != 'Pending' && val != "Archive") {
            newError = `Status Should be "Active/Completed/Pending/Archive"`;
        }
        setError(newError);
        console.log(newError)

        return newError;
    }

    const setData=(data,setMethod)=>{
        let newData =[...data];
        newData.push(user);
        setMethod(newData);
        setUser({name:'',status:''});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = handleError(user.status);
        if(error)return;
        if(user.status=="Active"){
            setData(activeUser,setActiveUser);
        }
        if(user.status=="Completed"){
            setData(CompleteUser,setCompleteUser);
        }
        if (user.status =="Pending"){
            setData(PendingUser,setPendingUser);
        }
        if (user.status =="Archive"){
            setData(ArchiveUser,setArchiveUser);
        }
    }

    const findAllData=()=>{
        let Data=[];
        if(current==="all"){
            Data = [...activeUser,...CompleteUser,...PendingUser,...ArchiveUser];
        }else if(current === "Active"){
            Data = [...activeUser];
        }else if(current === "Complete"){
            Data = [...CompleteUser];
        }
        return Data
    }

    const ChangeTab=(val)=>{
        setCurrent(val)
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={(e) => handleSubmit(e)} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input onChange={(e) => handleInput('name', e)} value={user.name} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input onChange={(e) => handleInput('status', e)} value={user.status} type="text" className="form-control" placeholder="Status" />
                            {error && <small className='text-danger'>{error}</small>}

                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button onClick={()=>setCurrent('all')} className={`nav-link ${show === 'all' && 'active'}`} type="button" >All</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => setCurrent('Active')} className={`nav-link ${show === 'active' && 'active'}`} type="button" >Active</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => setCurrent('Complete')} className={`nav-link ${show === 'completed' && 'active'}`} type="button" >Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                findAllData().map((v,i)=>(
                                    <tr key={i}>
                                        <td scope="col">{v.name}</td>
                                        <td scope="col">{v.status}</td>
                                    </tr> 
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;