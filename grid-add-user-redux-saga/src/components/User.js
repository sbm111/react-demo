import React,{useState} from 'react'

function User(props) {

    const [userForm,setUserForm] = useState({name:'',email:'',phone:''})

    const changeHandler = (evt) => {
        setUserForm({
            ...userForm,
            [evt.target.name] : evt.target.value
        })
    }

    return (
        <div>
            Name : <input type="text" name="name" value={userForm.name} onChange={changeHandler} /> <br/>
            Email : <input type="text" name="email" value={userForm.email} onChange={changeHandler}/> <br/>
            Phone : <input type="text" name="phone" value={userForm.phone} onChange={changeHandler} /> <br/>
            <button onClick={()=>{props.dispatch({type:'SAVE_USER',user:userForm});props.dispatch({type:'Get_USERS',user:userForm})}}>Save</button>
        </div>
    )
}

export default User
