import React, { useState } from 'react';
import { ArticleContainer, ArticleWrapper, ArticleHeader, ArticleText, ArticleButton, Modal, ModalOverlay, ModalBody, ModalHeader, Separator, FormContainer, FormGroup, FormInput, FormButton } from './ArticleElements';

const Article = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <ArticleContainer>
        <ArticleWrapper>
          <ArticleHeader>A better way</ArticleHeader>
          <ArticleHeader>to enjoy everyday.</ArticleHeader>
          <ArticleText>Be the first to know when we launch.</ArticleText>
          <ArticleButton onClick={toggleModal}>Request an invite</ArticleButton>
        </ArticleWrapper>
      </ArticleContainer>
      {modal && (
        <Modal>
          <ModalOverlay onClick={toggleModal}></ModalOverlay>
          <ModalBody>
            <FormContainer>
              <ModalHeader>Request an invite</ModalHeader>
              <Separator></Separator>
              <FormGroup>
                <FormInput placeholder={"Full name"}></FormInput>
              </FormGroup>
              <FormGroup>
                <FormInput placeholder={"Email"}></FormInput>
              </FormGroup>
              <FormGroup>
                <FormInput placeholder={"Confirm email"}></FormInput>
              </FormGroup>
              <FormButton>Send</FormButton>
            </FormContainer>
          </ModalBody>
        </Modal>
      )}
      
    </>
  )
}

export default Article;