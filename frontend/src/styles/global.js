import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }

  p{

    text-align: center;
  }
  .img-container{
    width: 50%;
    margin: 0 auto;

  }
  img{
    width: 100%;
    height: 100%;
  }
`;

export default Global;