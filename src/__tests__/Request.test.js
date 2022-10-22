import React from 'react';
import Article, { validate } from '../components/Article';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("Test submitting a request for an invitation", () => {
  test("should pass submit form validation", () => {
    const testValues = {
      fullName: "Test",
      email: "test@gmail.com",
      confirmEmail: "test@gmail.com"
    };
    expect(validate(testValues)).toStrictEqual({});
  });

  test("should fail on name validation", () => {
    const testValues = {
      fullName: "T",
      email: "test@gmail.com",
      confirmEmail: "test@gmail.com"
    };
    expect(validate(testValues)).toStrictEqual({
      fullName: "Full name needs to be at least 3 characters long!"
    });
  });

  test("should fail on email validation", () => {
    const testValues = {
      fullName: "Test",
      email: "",
      confirmEmail: "test"
    };
    expect(validate(testValues)).toStrictEqual({
      email: "Email is required!",
      confirmEmail: "Confirm Email needs to match Email!"
    });
  });

  test("should fail on confirm email validation", () => {
    const testValues = {
      fullName: "Test",
      email: "test@gmail.com",
      confirmEmail: "test2@gmail.com"
    };
    expect(validate(testValues)).toStrictEqual({
      confirmEmail: "Confirm Email needs to match Email!"
    });
  });

  test("email input field should not accept invalid email", () => {
    render(<Article />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const email = screen.getByPlaceholderText("Email");
    userEvent.type(email, "test");
    expect(email.value).not.toMatch("test@gmail.com");
  });

  test("should fail submit form validation", async () => {
    render(<Article />);
    const requestButton = screen.getByRole("button");
    userEvent.click(requestButton);
    const fullName = screen.getByPlaceholderText("Full name");
    userEvent.type(fullName, "Test");
    const email = screen.getByPlaceholderText("Email");
    userEvent.type(email, "usedemail@blinq.app");
    const confirmEmail = screen.getByPlaceholderText("Confirm email");
    userEvent.type(confirmEmail, "usedemail@blinq.app");
    const submitButton = screen.getByText("Send", { selector: "button" });
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("Request failed with status code 400")).toBeInTheDocument();
    });
  });

  test("should pass submit form validation", async () => {
    render(<Article />);
    const requestButton = screen.getByRole("button");
    userEvent.click(requestButton);
    const fullName = screen.getByPlaceholderText("Full name");
    userEvent.type(fullName, "Test");
    const email = screen.getByPlaceholderText("Email");
    userEvent.type(email, "test@gmail.com");
    const confirmEmail = screen.getByPlaceholderText("Confirm email");
    userEvent.type(confirmEmail, "test@gmail.com");
    const submitButton = screen.getByText("Send", { selector: "button" });
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("All done!", { selector: "h2" })).toBeInTheDocument();
    });
  });
});