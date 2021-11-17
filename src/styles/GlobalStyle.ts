import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --blue: #8585ed;
    --green: #3FAD27;
    --red: 	#ad273f;
    --background: #EBEBEB;
    --shapes: #FFFFFF;
    --text-title: #3D3D4D;
    --text: #1C1C29;
    --text-light: #A09CB1;

    accent-color: var(--blue);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px){
      font-size: 87.5%; //14px
    }
  }

  
  body {
    font: 16px "Poppins", Arial, sans-serif;
    color: var(--text);
  }
  
  input, textarea {
    font-family: "Poppins";
  }
  
  
  button {
    cursor: pointer;
  }
  
  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }  color: var(---text-title);

`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;
