import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Modal } from 'react-bootstrap'
import { confirm } from 'react-bootstrap-confirmation'
import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import './MyOrders.css'
import noOrder from '../../images/no-order.svg'

const MyOrders = () => {
  // user
  const { user } = useAuth()
  // states
  const [orders, setOrders] = useState([])
  const [deleteModalShow, setDeleteModalShow] = useState(false)
  // load data
  useEffect(() => {
    fetch('https://afternoon-sea-48900.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])
  const myOrders = orders.filter(order => order.email === user.email)
  // delete order
  const deleteOrder = async id => {
    const result = await confirm('Your are going to delete the order')
    if (result) {
      axios
        .delete(`https://afternoon-sea-48900.herokuapp.com/orders/${id}`)
        .then(res => {
          if (res.data.deletedCount > 0) {
            const remainingOrders = orders.filter(order => order._id !== id)
            setOrders(remainingOrders)
            setDeleteModalShow(true)
          }
        })
    }
  }
  return (
    <div className="_orders">
      <Container>
        <h2>My Orders</h2>
        <div className="orders">
          {myOrders.map(order => (
            <div key={order._id} className="_order">
              <div className="order_title">
                <Link to={`/tours/${order.tour._id}`}>
                  {order.tour.title.substring(0, 15)}...
                </Link>
              </div>
              <div className="price">
                Price: <span>${order.tour.price}</span>
              </div>
              <div className="date">
                Start tour on <span>{order.date}</span>
              </div>
              <div className="status">
                Status: <span>{order.status}</span>
              </div>
              <div className="delete">
                <button onClick={() => deleteOrder(order._id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
          {myOrders.length || (
            <>
              <img src={noOrder} alt="" />
              <h4>No orders to show</h4>
              <Link to="/" className="main_btn">
                Place Order Here
              </Link>
            </>
          )}
        </div>
        {/* modal */}
        <Modal
          size="sm"
          show={deleteModalShow}
          onHide={() => setDeleteModalShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton className="rounded">
            <Modal.Title id="example-modal-sizes-title-sm" className="fs-5">
              <i className="far fa-check-circle text-success"></i> Delete Sucess
            </Modal.Title>
          </Modal.Header>
        </Modal>
      </Container>
    </div>
  )
}

export default MyOrders
