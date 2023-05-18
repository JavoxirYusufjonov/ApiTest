import "./ProfileCard.css"

import Ava from "./Ava";
import UserProfile from "./UserProfile";


function ProfileCard({ users }){
    const name =`${users.name} ${users.last_name}`;

   return (
      <section  key={users.id} className="profileCard"> 
         <Ava name={name} url={users.avatar} />
         <UserProfile name={name} email={users.email} />
       </section>
   ); 
}

export default ProfileCard;