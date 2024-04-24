/* eslint-disable react/prop-types */
// Essa função verifica o tamanho do texto e, caso ele seja maior do que eu determinei pelo limit na página do component (ex: Card.jsx), ele será cortado e, após seu final, aparecerá "..."
export function TextLimit({text, limit}){
    const textLimited = text?.length > limit ? `${text.substring(0, limit)}...` : text;

    return <p>{textLimited}</p>
}