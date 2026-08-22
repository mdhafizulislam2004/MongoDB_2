import { use, useState } from "react";

const Users = ({UserData}) => {

    const user=use(UserData)
    console.log(user);
    const[users,setUsers]=useState(user)
    


    const submitHendaler=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        console.log("Submitted",name,email);

        const newData={name,email}

        fetch("http://localhost:3000/user",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                newData._id=data.insertedId
                const DataUser=[...users,newData]
                setUsers(DataUser)
                console.log("User Add Successfully");
            }
            return
        })
        e.target.reset()
    }


    return (
        <div>
            <form onSubmit={submitHendaler}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <button>Add User</button>
            </form>
            {
                users.map(card=><p key={card._id}>{card.name},{card.email}</p>)
            }
        </div>
    );
};

export default Users;