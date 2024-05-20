import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileHeader = styled.header`
    width: 80%;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    border-radius: 0.3rem;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    background-color: #fff;
    z-index: 0;
`;

export const ProfileIconEdit = styled.i`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #0bade3;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    div {
        background-color: #fff;
        padding: 0.5rem;
        border-radius: 50%;
    }

    div:hover {
        color: #fff;
        background-color: #0bade3;
    }
`;

export const ProfileBackground = styled.img`
    width: 100%;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    z-index: -1;
    border-radius: 0.3rem 0.3rem 0 0;
`;

export const ProfileUser = styled.div`
    padding: 2rem;
`;

export const ProfileAvatar = styled.img`
    width: 13rem;
    border-radius: 50%;
    border: solid 5px #fff;
    object-fit: cover;
    object-position: center;
`;

export const ProfileActions = styled.div`
    padding: 2rem;
`;

export const ProfileIconAdd = styled.i`
    background-color: transparent;
    border-radius: 50%;
    color: #0bade3;
    outline: none;
    border: none;
    cursor: pointer !important;
    font-weight: bold;
    font-size: 2rem;
    transition: all 0.3s ease-in-out;

    :hover {
        color: #0bade3;
        font-size: 2.15rem;
    }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0bade3;

  &:link,
  &:visited {
    color: #0bade3;
  }

  &:hover {
    color: #0bade3;
  }

  &:active {
    color: #0bade3;
  }
`;

export const ProfileNews = styled.main`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin: 1rem auto;

    h3 {
        grid-column: 1 / -1;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: #023344;
        margin-top: 1rem;
    }
`;