import styled from 'styled-components';

export const Container = styled.div`
    width: 230px;
    height: 100vh;
    background-color: var(--color-secondary);
`;

export const Logo = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* background-color: red; */

    >img{
        width: 180px;
        height: 180px;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 70%;
    /* background-color: blanchedalmond; */
`;

export const TitleMenu = styled.div`
    width: 100%;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;

    >h5{
        margin: 10px;
        color: var(--color-letters);
        font-size: 14px;
    }
`;

export const MenuItens = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    /* justify-content: center; */
    margin: 10px 0px 20px 0px;

    >p{
        color: var(--color-letters);
        margin-left: 50px;
        font-size: 12px;
        font-weight: bold;
    }
`;