// External Libs
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Local Modules
import { ProfileActions, ProfileAvatar, ProfileBackground, ProfileContainer, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfileNews, ProfileUser } from './ProfileStyle';
import { UserContext } from '../../Context/UserContext';
import { getAllNewsByUser } from '../../services/newsServices';
import { Card } from '../../components/Card/Card';

export function Profile() {
    const { user } = useContext(UserContext);
    const [news, setNews] = useState([]);

    async function findAllNewsByUser() {
        const newsResponse = await getAllNewsByUser();
        setNews(newsResponse.data.results);
        // console.log(newsResponse.data.results);
    }

    useEffect(() => {
        findAllNewsByUser();
    }, []);

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
                    <Link to='/manage-news/add'>
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
                    title={item.title}
                    text={item.text}
                    banner={item.banner}
                    likes={item.likes}
                    comments={item.comments}
                    />
                ))}
            </ProfileNews>
        </ProfileContainer>
    );
}