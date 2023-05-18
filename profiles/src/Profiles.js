import ProfileCard from "./ProfileCard";

function Profiles({users}) {
    return users.map((users) => {
        return <ProfileCard users={users}/>
    });
}
export default Profiles; 