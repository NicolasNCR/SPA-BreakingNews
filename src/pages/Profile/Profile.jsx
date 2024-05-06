// External Libs
import { useContext } from "react";

// Local Modules
import { UserContext } from "../../Context/UserContext";
import { ProfileActions, ProfileAvatar, ProfileBackground, ProfileContainer, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfileUser } from "./ProfileStyle";

export function Profile() {
    const { user } = useContext(UserContext);
    return (
        <ProfileContainer>
            <ProfileHeader>
                <ProfileIconEdit>
                    <div>
                        <i className="bi bi-pencil-square"></i>
                    </div>
                </ProfileIconEdit>
                <ProfileBackground src={user.background} alt="Fundo de perfi" />
                <ProfileUser>
                    <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
                    <h2>{user.name}</h2>
                    <h3>@{user.username}</h3>
                </ProfileUser>
                <ProfileActions>
                    <ProfileIconAdd>
                        <i className="bi bi-plus-circle"></i>
                    </ProfileIconAdd>
                </ProfileActions>
            </ProfileHeader>
        </ProfileContainer>
    );
}