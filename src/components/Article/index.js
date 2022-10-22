import React, { useState } from 'react';
import axios from 'axios';
import { ArticleContainer, ArticleWrapper, ArticleHeader, ArticleText, ArticleButton, Modal, ModalOverlay, ModalBody, ModalHeader, Separator, FormContainer, FormGroup, FormInput, FormError, FormButton, FormButtonSending, PopUpContainer, PopUpOverlay, PopUpHeader, PopUpText, PopUpButton } from './ArticleElements';

// article component
const Article = () => {
  // set initial values for the form
  const initialValues = {
    fullName: "",
    email: "",
    confirmEmail: ""
  };

  // use states
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  // handle changes of form values
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  // handle submitting data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmitError("");
    const payload = {
      name: formValues.fullName,
      email: formValues.email
    };
    setIsSubmit(true);
    if (Object.keys(validate(formValues)).length === 0) {
      await axios.post('https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth', payload)
        .then((res) => {
          if (res.status === 200) {
            togglePopUp();
            toggleModal();
            setIsSubmit(false);
            setFormValues(initialValues);
          }
        })
        .catch((err) => {
          setIsSubmit(false);
          setSubmitError(err.message);
        });
    }
  };

  // handle showing modal
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  // handle showing popup
  const [popUp, setPopUp] = useState(false);
  const togglePopUp = () => {
    setPopUp(!popUp);
  }

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
              <FormError>{ submitError }</FormError>
            </FormContainer>
          </ModalBody>
        </Modal>
      )}
      {popUp && (
        <Modal>
          <PopUpOverlay onClick={togglePopUp}></PopUpOverlay>
          <ModalBody>
            <PopUpContainer>
              <PopUpHeader>All done!</PopUpHeader>
              <Separator></Separator>
              <PopUpText>You will be one of the first to experience</PopUpText>
              <PopUpText>Brocolli & Co. when we launch.</PopUpText>
              <PopUpButton onClick={togglePopUp}>OK</PopUpButton>
            </PopUpContainer>
          </ModalBody>
        </Modal>
      )}
    </>
  )
}

// validate the fields of the form
export const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  // check fullname field
  if (!values.fullName) {
    errors.fullName = "Full name is required!"
  } else if (values.fullName.length < 3) {
    errors.fullName = "Full name needs to be at least 3 characters long!"
  }

  // check email field
  if (!values.email) {
    errors.email = "Email is required!"
  } else if (!regex.test(values.email)) {
    errors.email = "Email needs to be in a valid email format!"
  }

  // check confirm email field
  if (!values.confirmEmail) {
    errors.confirmEmail = "Confirm Email is required!"
  } else if (values.email !== values.confirmEmail) {
    errors.confirmEmail = "Confirm Email needs to match Email!"
  }

  return errors;
};

export default Article;