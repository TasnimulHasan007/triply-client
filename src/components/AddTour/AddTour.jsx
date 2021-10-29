import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import './AddTour.css'
import { Modal } from 'react-bootstrap'

const AddTour = () => {
  // states
  const [modalShow, setModalShow] = useState(false)
  // react hook form
  const { register, handleSubmit, reset } = useForm()
  // form handler
  const addTour = data => {
    axios
      .post('https://afternoon-sea-48900.herokuapp.com/tours', data)
      .then(res => {
        if (res.data.insertedId) {
          setModalShow(true)
          reset()
        }
      })
  }
  return (
    <div className="add_tour">
      <h2>Add a Tourists Attraction</h2>
      <form onSubmit={handleSubmit(addTour)}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required {...register('title')} />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" required {...register('location')} />
        <label htmlFor="img">Image URL</label>
        <input type="text" id="img" required {...register('img')} />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="mb-3"
          required
          {...register('description')}
        />
        <div className="d-flex justify-content-stretch w-100">
          <div className="w-100 me-3">
            <label htmlFor="duration">Duration (days)</label>
            <input
              type="number"
              id="duration"
              required
              {...register('duration')}
            />
          </div>
          <div className="w-100">
            <label htmlFor="price">Price (USD)</label>
            <input type="number" id="price" required {...register('price')} />
          </div>
        </div>
        <button type="submit" className="main_btn">
          Add Tour
        </button>
      </form>
      {/* modal */}
      <Modal
        size="sm"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton className="rounded">
          <Modal.Title id="example-modal-sizes-title-sm" className="fs-5">
            <i className="far fa-check-circle text-success"></i> Insert Sucess
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  )
}

export default AddTour
