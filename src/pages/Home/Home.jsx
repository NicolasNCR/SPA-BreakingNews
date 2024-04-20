import { useState, useEffect } from "react";

import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { HomeBody } from "./HomeStyle";
// import { news } from "../../Datas";
import { getAllNews } from "../../services/postsServices";

export default function Home(){
    // Estado inicial da aplicação definido pelo useState; setNews atualiza esse estado
    const [news, setNews] = useState([]) 

    async function findAllPosts() {
        const response = await getAllNews()
        setNews(response.data.results)
    }

    // Quando componente for montado na tela: findAllPosts será executado; como o array de dependências está vazio, será executado apenas uma vez 
    useEffect(() => {
        findAllPosts();
    }, []);

    return (
        <> {/* Fragment: tag vazia */}
            <Navbar />
            <HomeBody>
                {news.map((item) => (
                    <Card 
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    banner={item.banner}
                    likes={item.likes.length}
                    comments={item.comments.length}
                    />
                ))}
            </HomeBody>
        </>
    )
}