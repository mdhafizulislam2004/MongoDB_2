const Users = () => {



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
        </div>
    );
};

export default Users;