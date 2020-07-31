import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
  .Fot {
    max-width: 128px;
  }
  @media (max-width: 800px) {
    .Fot {
      max-width: 100px;
    }
  }
  .animate-svg {
    width: 800px;
    margin: 200px;

  }
  .animate-svg sgv {
    stroke-width: 2px;
    stroke: #003366;
    width: 100%;
    height: 100%;
    stroke-dashoffset:1000;/* é a distancia de inicio da linha */
    stroke-dasharray:1000;/*é o tamanho dos traços */
    animation:svganimation 5s ease-in-out forwards infinite;
  }

  @keyframes svganimation {
    0%{
      stroke-dashoffset: 1000;
    }

    50% {
      stroke-dashoffset:110;

    }
    100%{
      stroke-dashoffset:0;
    }
  }
`;

