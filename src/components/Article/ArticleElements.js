import styled from 'styled-components';

export const ArticleContainer = styled.article`
  margin: auto;
  width: 50%;
  padding: 10px;
`;

export const ArticleWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const ArticleHeader = styled.h1`
  font-size: 40px;
`;

export const ArticleText = styled.div`
  margin-top: 1.2rem;
`;

export const ArticleButton = styled.button`
  background-color: #fff;
  margin-top: 1.2rem;
  width: 12em;
  height: 3.5em;
  border-width: thin;
`;