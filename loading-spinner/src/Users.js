function Users({users, onSelected}){
   return (
    <div>{users.map((user) => {
        const{id, avatar, first_name, last_name} = user;
        const name =`${first_name} ${last_name}`;
       
        return <img key={id} src={avatar} alt={name}
        onMouseOver={() => onSelected(user)}
        onMouseOut={() => onSelected(null)}
        /> 
    })
    

    
    }
    
    </div>
   )
}

export default Users;