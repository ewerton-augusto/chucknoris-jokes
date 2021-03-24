import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }

    :root{
        --primary-bg-color: #f15a24;
        --secondary-bg-color: #fff;
    }

    body{        
        font-family: 'Lato', sans-serif;
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/chuck-norris-background-2.jpg');
        background-color: var(--primary-bg-color);
        flex: 1;
    }

`
