import React from "react";
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ContactForm from "..";

const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup)

describe('Contact component', () => {
  it('renders', () => {
    render(<ContactForm/>)
  })
  it('matches snapshot', () => {
    const {asFragment } = render(<ContactForm
      setContactSelected = {mockSetContactSelected}
      contactSelected = {mockContactSelected}
      />)
      expect(asFragment()).toMatchSnapshot();
  })
})
