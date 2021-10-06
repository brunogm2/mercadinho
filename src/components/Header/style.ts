import styled from 'styled-components';
// import { BsGear } from 'react-icons/fa'


export const Container = styled.div`
    background-color: var(--color-white);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between; 
    padding: 10px 40px 10px 40px;

`;

export const SelectProfile = styled.div`
    width: 540px;
    height: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
`;

export const DashboardPrincipal = styled.div`

`;

export const DashboardSecondary = styled.div`
    width: 200px;
    height: 100%;
    background-color: yellow;
`;


export const Primary = styled.div`
    display: flex;
    color: var(--color-letters);

    >p{
        margin: 20px;
        cursor: pointer;
    }
    
`;

export const Secondary = styled.div`
    
`;

export const ProfileConfiguration = styled.div`
    width: 300px;
    height: 100%;
    /* background-color: green; */
`;

export const Profile = styled.div`
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Settings = styled.div`
    
`;

export const GearHeader = styled.div`
    /* width: 36px;
    height: 32px;
    fill: var(--color-blue); */
`;

export const ImgUser = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-letters);
    cursor: pointer;
`;

export const NameUser = styled.div`
    min-width: 30px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    color: var(--color-letters);
    cursor: pointer;
`;
