/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { CardBody, CardContainer, CardHeader, CardFooter } from './CardStyle';
import { TextLimit } from '../TextLimit/TextLimit';

// "props" passa as informações referentes às news, vindas da Home.jsx; "title": o nome title (assim como os outros) vem do que eu defini lá na págia Home.jsx
// "?" ao lado do likes e comments indica que eles podem ser nulos
// Props desconstruídas
export function Card({ top, title, text, likes, comments, banner, actions= false, id }){
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <CardHeader top={top}>
                        <Link to={`/manage-news/edit/${id}`}>
                            {actions && <i className="bi bi-pencil-square"></i>}
                        </Link>
                        <h2>{title}</h2>
                        <TextLimit text={text} limit={120} />
                    </CardHeader>
                    <CardFooter>
                        <section>
                            <i className="bi bi-hand-thumbs-up"></i>
                            <span>{likes?.length}</span>
                        </section>
                        <section>
                            <i className="bi bi-chat"></i>
                            <span>{comments?.length}</span>
                        </section>
                    </CardFooter>
                </div>
                <img src={banner} alt="Imagem" />
            </CardBody>
        </CardContainer>
    )
}