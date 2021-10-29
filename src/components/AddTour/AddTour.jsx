import React, { useRef } from 'react'
import axios from 'axios'
import './AddTour.css'

const AddTour = () => {
  const titleRef = useRef('')
  const locationRef = useRef('')
  const descriptionRef = useRef('')
  const durationRef = useRef('')
  const priceRef = useRef('')
  // form handler
  const handleAddTour = e => {
    e.preventDefault()
    // inputs
    const title = titleRef.current.value
    const location = locationRef.current.value
    const description = descriptionRef.current.value
    const duration = durationRef.current.value
    const price = priceRef.current.value
    // data
    const data = {
      title,
      location,
      description,
      duration,
      price,
    }
    // insert to database
    axios.post('http://localhost:5000/tours', data).then(res => {
      if (res.data.insertedId) {
        alert('insert success')

        // form reset
        titleRef.current.value = ''
        locationRef.current.value = ''
        descriptionRef.current.value = ''
        durationRef.current.value = ''
        priceRef.current.value = ''
        console.log(data)
      }
    })
  }
  return (
    <div className="add_tour">
      <h2>Add a Tourists Attraction</h2>
      <form onSubmit={handleAddTour}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} required />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" ref={locationRef} required />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          ref={descriptionRef}
          className="mb-3"
          required
        />
        <div className="d-flex justify-content-stretch w-100">
          <div className="w-100 me-3">
            <label htmlFor="duration">Duration (days)</label>
            <input type="number" id="duration" ref={durationRef} required />
          </div>
          <div className="w-100">
            <label htmlFor="price">Price (USD)</label>
            <input type="number" id="price" ref={priceRef} required />
          </div>
        </div>
        <button type="submit" className="main_btn">
          Add Tour
        </button>
      </form>
    </div>
  )
}

export default AddTour
