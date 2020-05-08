import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />)
  
  const header = getByText(/checkout form/i)

  expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
  const { getByTestId, getByText } = render(<CheckoutForm />)
  
  const button = getByTestId(/checkout/i)
  fireEvent.submit(button)

  const message = getByText(/You have ordered some plants! Woo-hoo!/i)
  expect(message).toBeInTheDocument()
});
