import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { individualWedding } from '../weddingData'
import WeddingDetails from '../components/WeddingDetails/WeddingDetails';

describe('WeddingDetails', () => {
  it('renders default WeddingDetails elements', () => {
    const mockDeleteWedding = jest.fn()
    const mockLoadWedding = jest.fn()
    const mockUpdateGuests = jest.fn()
    const mockUpdatePhotos = jest.fn()

    render(
      <MemoryRouter>
        <WeddingDetails
          weddingId={1}
          currentWeddingData={
            {id: 1, name: "Henderson", email: "email@aol.com", date: "01/02/2022", image: "image.coolurl.com"}
          }
          guests={[
            {id: 1, name: "Bob", phoneNumber: "303-222-8888", wedding: 1}
          ]}
          photos={[
          ]}
          deleteSingleWedding={mockDeleteWedding}
          loadWeddingData={mockLoadWedding}
          error={{photoError: '', guestError: '', weddingError: ''}}
          updateGuests={mockUpdateGuests}
          updatePhotoList={mockUpdatePhotos}
        />
    </MemoryRouter>
    );

    expect(screen.getByText('Henderson Wedding')).toBeInTheDocument();
    expect(screen.getByText('01/02/2022')).toBeInTheDocument()
    expect(screen.getByText('Email: email@aol.com')).toBeInTheDocument()
    expect(screen.getByTestId('status')).toBeInTheDocument()
    expect(screen.getByAltText('detailImage')).toBeInTheDocument()
  });

  it('should render a "request" and "add" button if no photos exist for this wedding', () => {
    const mockDeleteWedding = jest.fn()
    const mockLoadWedding = jest.fn()
    const mockUpdateGuests = jest.fn()
    const mockUpdatePhotos = jest.fn()

    render(
      <MemoryRouter>
        <WeddingDetails
          weddingId={1}
          currentWeddingData={
            {id: 1, name: "Henderson", email: "email@aol.com", date: "01/02/2022", image: "image.coolurl.com"}
          }
          guests={[
            {id: 1, name: "Bob", phoneNumber: "303-222-8888", wedding: 1}
          ]}
          photos={[
          ]}
          deleteSingleWedding={mockDeleteWedding}
          loadWeddingData={mockLoadWedding}
          error={{photoError: '', guestError: '', weddingError: ''}}
          updateGuests={mockUpdateGuests}
          updatePhotoList={mockUpdatePhotos}
        />
    </MemoryRouter>
    );

    expect(screen.getByText('Henderson Wedding')).toBeInTheDocument();
    expect(screen.getByText('01/02/2022')).toBeInTheDocument()
    expect(screen.getByText('Email: email@aol.com')).toBeInTheDocument()
    expect(screen.getByTestId('status')).toBeInTheDocument()
    expect(screen.getByAltText('detailImage')).toBeInTheDocument()
    expect(screen.getByText('Request Photo List')).toBeInTheDocument()
    expect(screen.getByText('Add Photo List')).toBeInTheDocument()
  });
  it('should display an "edit" button if a photo list exists for the current wedding', () => {
    const mockDeleteWedding = jest.fn()
    const mockLoadWedding = jest.fn()
    const mockUpdateGuests = jest.fn()
    const mockUpdatePhotos = jest.fn()

    render(
      <MemoryRouter>
        <WeddingDetails
          weddingId={1}
          currentWeddingData={
            {id: 1, name: "Henderson", email: "email@aol.com", date: "01/02/2022", image: "image.coolurl.com"}
          }
          guests={[
            {id: 1, name: "Bob", phoneNumber: "303-222-8888", wedding: 1}
          ]}
          photos={[
            {id: 1, number: 1, description: "just bob", guest: [1], weddingId: 1}
          ]}
          deleteSingleWedding={mockDeleteWedding}
          loadWeddingData={mockLoadWedding}
          error={{photoError: '', guestError: '', weddingError: ''}}
          updateGuests={mockUpdateGuests}
          updatePhotoList={mockUpdatePhotos}
        />
    </MemoryRouter>
    );
    expect(screen.getByText('Henderson Wedding')).toBeInTheDocument();
    expect(screen.getByText('01/02/2022')).toBeInTheDocument()
    expect(screen.getByText('Email: email@aol.com')).toBeInTheDocument()
    expect(screen.getByTestId('status')).toBeInTheDocument()
    expect(screen.getByAltText('detailImage')).toBeInTheDocument()
    expect(screen.queryByText('Request Photo List')).not.toBeInTheDocument()
    expect(screen.getByText('Edit Photo Details')).toBeInTheDocument()
  });

  // should display a photo list if a photo list exists for the current wedding
  // should not display a photo list if there is no list for the current wedding
  // should fire a function to delete the current wedding
  // should render the GuestListForm
  // should render the PhotoListForm
});
