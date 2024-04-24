/* eslint-disable react/prop-types */

import { CardBody, CardContainer, CardHeader, CardFooter } from "./CardStyle";
import { TextLimit } from "../TextLimit/TextLimit";

// "props" passa as informações referentes às news, vindas da Home.jsx; "props.title": o nome title (assim como os outros) vem do que eu defini lá na págia Home.jsx
// "?" ao lado do likes e comments indica que eles podem ser nulos
export function Card(props){
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <CardHeader top={props.top}>
                        <h2>{props.title}</h2>
                        <TextLimit text={props.text} limit={120} />
                    </CardHeader>
                    <CardFooter>
                        <section>
                            <i className="bi bi-hand-thumbs-up"></i>
                            <span>{props.likes?.length}</span>
                        </section>
                        <section>
                            <i className="bi bi-chat"></i>
                            <span>{props.comments?.length}</span>
                        </section>
                    </CardFooter>
                </div>
                <img src={props.banner} alt="Imagem" />
            </CardBody>
        </CardContainer>
    )
}