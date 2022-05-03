import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Modal from "..";


const mockToggleModal  = jest.fn();
const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: "Lorem ipsum",
  index: 1
}

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal 
    currentPhoto={currentPhoto}
    toggleModal={mockToggleModal}
    />)
  })
  it('Matches snapshot', () => {
    const { asFragment } = render(<Modal 
      currentPhoto={currentPhoto}
      toggleModal={mockToggleModal}
      />);
    expect(asFragment()).toMatchSnapshot();
  })
})

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />);
    fireEvent.click(getByText('Close this modal'));
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  })
})