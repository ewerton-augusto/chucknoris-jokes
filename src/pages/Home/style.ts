import styled from 'styled-components';

export const HomeContainer = styled.section`
    width: 100%;
    max-width: 1024px;
    margin: auto;
    display: flex;
    justify-content: center;
    
    .backgroung-card{
        width: 100%;
        max-width: 450px;
        padding: 1rem;
        text-align: center;
        background-color: #ffffffaa;
        align-items: center;
        border-radius: 10px;
    }

    .logo__img{
        width: 100%;
        max-width: 150px;
    }

    .categories{
        margin: 0 auto;
        max-width: 350px;
    }

    .input-group{
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;
    }

    .categorias__ul{
        display: grid;
        grid-template-columns: auto auto auto auto;
        list-style-type: none;
        grid-template-columns: repeat(auto-fit, minmax(60px, auto));
    }

    .categorias__li{
        text-align: center;
        font-weight: 800;
        cursor: pointer;
        margin: 10px;
        transition: all .2s ease-in-out;
    }

    .categorias__li:hover{
        
        color: var(--primary-bg-color);
        transform: scale(1.05);
        opacity: .9;
    }

    .joker{
        display: block;
    }

    .joker__loading{
        width: 100vh;
        max-width: 150px;
    }

    .jokes-list__item{
        padding: 10px;
    }

    @media (max-width: 480px){
        .backgroung-card{
            border-radius: 0 0 10px 10px;
        }
    }
`
