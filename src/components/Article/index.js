import React, { useState } from 'react';
import { ArticleContainer, ArticleWrapper, ArticleHeader, ArticleText, ArticleButton, Modal, ModalOverlay, ModalBody, ModalHeader, Separator, FormContainer, FormGroup, FormInput, FormError, FormButton, FormButtonSending } from './ArticleElements';

const Article = () => {
  const initialValues = {
    fullName: "",
    email: "",
    confirmEmail: ""
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fullName) {
      errors.fullName = "Full name is required!"
    } else if (values.fullName.length < 3) {
      errors.fullName = "Full name needs to be at least 3 characters long!"
    }

    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "Email needs to be in a valid email format!"
    }

    if (!values.confirmEmail) {
      errors.confirmEmail = "Confirm Email is required!"
    } else if (values.email != values.confirmEmail) {
      errors.confirmEmail = "Confirm Email needs to match Email!"
    }

    return errors;
  };

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
            <FormContainer onSubmit={handleSubmit}>
              <ModalHeader>Request an invite</ModalHeader>
              <Separator></Separator>
              <FormGroup>
                <FormInput
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formValues.fullName}
                  onChange={handleChange}
                />
                <FormError>{ formErrors.fullName }</FormError>
              </FormGroup>
              <FormGroup>
                <FormInput
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <FormError>{ formErrors.email }</FormError>
              </FormGroup>
              <FormGroup>
                <FormInput
                  type="text"
                  name="confirmEmail"
                  placeholder="Confirm email"
                  value={formValues.confirmEmail}
                  onChange={handleChange}
                />
                <FormError>{ formErrors.confirmEmail }</FormError>
              </FormGroup>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <FormButtonSending>Sending, please wait...</FormButtonSending>
              ) : (
                <FormButton>Send</FormButton>
              )}
            </FormContainer>
          </ModalBody>
        </Modal>
      )}
      
    </>
  )
}

export default Article;