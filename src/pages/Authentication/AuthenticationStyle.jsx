import styled from 'styled-components';

export const AuthContainer = styled.div`
    width: 70%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const Section = styled.section`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
    background-color: ${(props) => (props.type === "signIn" ? "blue" : "white")};
    color: ${(props) => (props.type === "signUp" ? "blue" : "white")};

    h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }
`;