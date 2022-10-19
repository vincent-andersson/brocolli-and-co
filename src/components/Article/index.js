import React from 'react';
import { ArticleContainer, ArticleWrapper, ArticleHeader, ArticleText, ArticleButton } from './ArticleElements';

const Article = () => {
  return (
    <>
      <ArticleContainer>
        <ArticleWrapper>
          <ArticleHeader>A better way</ArticleHeader>
          <ArticleHeader>to enjoy everyday.</ArticleHeader>
          <ArticleText>Be the first to know when we launch.</ArticleText>
          <ArticleButton>Request an invite</ArticleButton>
        </ArticleWrapper>
      </ArticleContainer>
    </>
  )
}

export default Article;