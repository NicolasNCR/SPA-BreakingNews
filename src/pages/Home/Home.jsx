// External Libs
import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// Local Modules
import { HomeBody, HomeHeader } from './HomeStyle';
import { Card } from '../../components/Card/Card';
import { getAllNews, getTopNews } from '../../services/newsServices';
// import { news } from "../../Datas";

export default function Home(){
    // Estado inicial da aplicação definido pelo useState; setNews atualiza esse estado
    const [news, setNews] = useState([]) 
    const [topNews, setTopNews] = useState([]) 

    async function findAllNews() {
        const newsResponse = await getAllNews()
        setNews(newsResponse.data.results)

        const topNewsResponse = await getTopNews()
        setTopNews(topNewsResponse.data.news)
    }

    // Quando componente for montado na tela: findAllPosts será executado; como o array de dependências está vazio, será executado apenas uma vez 
    useEffect(() => {
        findAllNews();
    }, []);

    return (
        <> {/* Fragment: tag vazia */}
            <HomeHeader>
                <Card 
                top={"true"}
                title={topNews.title}
                text={topNews.text}
                banner={topNews.banner}
                likes={topNews.likes}
                comments={topNews.comments}
                />
            </HomeHeader>
            <HomeBody>
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
            </HomeBody>
        </>
    )
}