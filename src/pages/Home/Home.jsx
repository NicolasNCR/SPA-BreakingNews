import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { HomeBody } from "./HomeStyle";
import { news } from "../../Datas";

export default function Home(){
    return (
        <> {/* Fragment: tag vazia */}
            <Navbar />
            <HomeBody>
                {/* o index é a chave que faz com que cada item seja único e apareça uma única vez */}
                {news.map((item, index) => (
                    <Card key={index} news={item} />
                ))}
            </HomeBody>
        </>
    )
}