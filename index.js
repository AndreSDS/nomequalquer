import styled from 'styled-components/native';

export const Header = styled.View`
    width: 100%;
    height: 192px;
    background-color: red;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 94px;
    height: 24px; 
`;

export const ButtonComponent = styled.Button`
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
`;
