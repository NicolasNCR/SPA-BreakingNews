import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchNews } from '../../services/newsServices';
import { ContainerResults, SearchNews, TextResults } from './SearchStyle';
import { Card } from '../../components/Card/Card';

export function Search() {
    const { title } = useParams();
    const [news, setNews] = useState([]);

    async function search() {
        try {
            const searchNewsResponse = await searchNews(title);
            setNews(searchNewsResponse.data.results);
        } catch (err) {
            console.log(err);
            setNews([]);
        }
    }

    useEffect(() => {
        search();
    }, [title]); // Sempre que o "title" mudar, a página será atualizada

    return (
        <ContainerResults>
            <TextResults>
                <span>
                    {news.length ? `Encontramos ${news.length} ${news.length > 1 ? "resultados" : "resultado"} para:` : "Não encontramos resultados para:"}
                </span>
                <h2>{title}</h2>
            </TextResults>
            <SearchNews>
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
            </SearchNews>
        </ContainerResults>
    )
}