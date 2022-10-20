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

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49,49,49,0.8);
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 2.5em 0.8em;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;

export const ModalHeader = styled.h2`
  font-size: 16px;
  font-style: italic;
`;

export const Separator = styled.div`
  min-width: 2em;
  margin-top: 0.5em;
  margin-bottom: 1em;
  border-top: 1px solid black;
`;

export const FormContainer = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  padding-top: 0.5em;
`;

export const FormInput = styled.input`
  min-width: 24em;
  min-height: 2em;
  padding: 5px;
`;

export const FormError = styled.p`
  font-size: 12px;
  color: red;
  padding: 5px 0 0 2px;
  max-width: 300px;
`;

export const FormButton = styled.button`
  background-color: #fff;
  margin-top: 1.2rem;
  min-width: 24em;
  min-height: 2.5em;
  border-width: thin;
`;

export const FormButtonSending = styled.button`
  background-color: #f1f1f1;
  margin-top: 1.2rem;
  min-width: 24em;
  min-height: 2.5em;
  border-width: thin;
  border-color: #cecfd0;
`;