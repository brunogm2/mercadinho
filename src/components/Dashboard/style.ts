import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: var(--color-primary);
`;

export const MainMenu = styled.section`
        max-width: 300px;
`;

export const MainSection = styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
`;

export const SectionRelatorios = styled.section`
    margin-top: 20px;
    width: 95%;
    height: 250px;
    padding: 10px;
`;

export const BoasVindas = styled.section`
    color: var(--color-letters);
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 18px;
`;

export const DadosValores = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
`;

export const DadosLeft = styled.div`
    background-color: var(--color-white);
    width: 40%;
    height: 100%;
    border-radius: 20px;
    padding: 20px 0px 0px 30px;

    >p{
        color: var(--color-letters);
    }
    >h1{
        color: var(--color-tertiary);
        font-size: 60px;
        margin: 5px;
    }
`;

export const DadosRight = styled.div`
    /* background-color: var(--color-secondary); */
    background-image: linear-gradient(155deg, #D1E361, #F8EC86);
    width: 60%;
    height: 100%;
    margin-left: 20px;
    border-radius: 20px;
`;

export const SectionProgressBar = styled.section`
    margin-top: 20px;
    width: 95%;
    height: 100px;
    background-color: var(--color-white);
    padding: 10px;
    border-radius: 20px;
`;

export const SectionRanking = styled.section`
    margin-top: 20px;
    width: 95%;
    height: 180px;
    padding: 10px;
`;

export const DadosRanking = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const RankingLeft = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 0px 20px 0px 20px;
`;

export const PrimaryRanking = styled.div`
    background-color: var(--color-white);
    width: 50%;
    height: 100%;
    border-radius: 20px;
`;

export const SecondaryRanking = styled.div`
    background-color: var(--color-white);
    width: 50%;
    height: 100%;
    margin-left: 100px;
    border-radius: 20px;
`;

export const RankingRight = styled.div`
    background-color: var(--color-white);
    width: 60%;
    height: 100%;
    margin-left: 20px;
    border-radius: 20px;

`;

