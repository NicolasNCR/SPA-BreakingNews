import styled from 'styled-components';

export const ContainerResults = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;

    img {
        width: 50%;
    }
`;

export const SearchNews = styled.section`
    width: 84.5%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 1rem auto;
`;

export const TextResults = styled.div`
    padding: 2rem;
    background-color: #fff;
    width: 80%;
    border-radius: 0.3rem;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    
    span {
        font-size: 1.4rem;
    }
    
    h2 {
        margin-top: 0.5rem;
        font-size: 1.4rem;
    }
`;