// External Libs
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Local Modules
import { ProfileActions, ProfileAvatar, ProfileBackground, ProfileContainer, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfileNews, ProfileUser, StyledLink } from './ProfileStyle';
import { UserContext } from '../../Context/UserContext';
import { getAllNewsByUser } from '../../services/newsServices';
import { Card } from '../../components/Card/Card';
import { userLogged } from '../../services/userServices';

export function Profile() {
    const { user, setUser } = useContext(UserContext);
    const [news, setNews] = useState([]);

    async function findAllNewsByUser() {
        const newsResponse = await getAllNewsByUser();
        setNews(newsResponse.data.results);
        // console.log(newsResponse.data.results);
    }

    // Responsável por sempre manter os dados do usuário atualizados
    async function findUserData() {
        try {
            const response = await userLogged();
            // Adiciona ao Context 
            setUser(response.data)
        } catch(err) {
            console.log(err)
        }
    } 

    useEffect(() => {
        findUserData();
        findAllNewsByUser();
    }, []);

    return (
        <ProfileContainer>
            <ProfileHeader>
                <ProfileIconEdit>
                    {/* "Link" do react-router-dom estilizado em ProfileStyle */}
                    <StyledLink to='/profile/edit'>
                        <div>
                            <i className="bi bi-pencil-square"></i>
                        </div>
                    </StyledLink> 
                </ProfileIconEdit>
                <ProfileBackground src={user.background} alt="Fundo de perfi" />
                <ProfileUser>
                    <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
                    <h2>{user.name}</h2>
                    <h3>@{user.username}</h3>
                </ProfileUser>
                <ProfileActions>
                    {/* Esse news do final do Link é para a rota não quebrar, pois no main.jsx é necessário um id como parâmetro (nesse caso, não temos id; ele será utilizado somente na rota de edit) */}
                    <Link to='/manage-news/add/news'>
                        <ProfileIconAdd>
                            <i className="bi bi-plus-circle"></i>
                        </ProfileIconAdd>
                    </Link>
                </ProfileActions>
            </ProfileHeader>
            <ProfileNews>
                {/* Se não houver nenhuma notícia publicada */}
                {news.length === 0 && <h3>Você ainda não publicou nenhuma notícia...</h3>}
                {news.map((item) => (
                    <Card 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    text={item.text}
                    banner={item.banner}
                    likes={item.likes}
                    comments={item.comments}
                    actions={true}
                    />
                ))}
            </ProfileNews>
        </ProfileContainer>
    );
}