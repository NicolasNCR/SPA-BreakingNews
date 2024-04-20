/* eslint-disable react/prop-types */

import { CardBody, CardContainer, CardFooter } from "./CardStyle";

// "props" passa as informações referentes às news, vindas da Home.jsx; "props.title": o nome title (assim como os outros) vem do que eu defini lá na págia Home.jsx
export function Card(props){
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <img src={props.banner} alt="Imagem" />
            </CardBody>
            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{props.likes}</span>
                </div>
                <div>
                    <i className="bi bi-chat"></i>
                    <span>{props.comments}</span>
                </div>
            </CardFooter>
        </CardContainer>
    )
}