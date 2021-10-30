import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Modal } from 'react-bootstrap'
import { confirm } from 'react-bootstrap-confirmation'
import { Link } from 'react-router-dom'
import noOrder from '../../images/no-order.svg'

const ManageOrders = () => {
  // states
  const [orders, setOrders] = useState([])
  const [approveModalShow, setApproveModalShow] = useState(false)
  const [deleteModalShow, setDeleteModalShow] = useState(false)

  // load data
  useEffect(() => {
    fetch('https://afternoon-sea-48900.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])
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
  // approve order
  const approveOrder = async order => {
    order.status = 'Approved'
    const result = await confirm('Your are going to approve the order')
    // update on database
    if (result) {
      axios
        .put(
          `https://afternoon-sea-48900.herokuapp.com/orders/${order._id}`,
          order
        )
        .then(res => {
          if (res.data.modifiedCount > 0) {
            setApproveModalShow(true)
          }
        })
    }
  }
  return (
    <div className="_orders">
      <Container>
        <div className="orders">
          {orders.map(order => (
            <div key={order._id} className="_order">
              <div className="title">
                <Link to={`/tours/${order.tour._id}`}>
                  {order.tour.title.substring(0, 15)}...
                </Link>
              </div>
              <div className="email">
                Email: <span>{order.email}</span>
              </div>
              <div className="status">
                {order.status === 'Pending' ? (
                  <button
                    className="approve"
                    onClick={() => approveOrder(order)}
                  >
                    Approve
                  </button>
                ) : (
                  <>
                    Status: <span>{order.status}</span>
                  </>
                )}
              </div>
              <div className="delete">
                <button onClick={() => deleteOrder(order._id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
          {orders.length || (
            <>
              <img src={noOrder} alt="" />
              <h4>No orders to show</h4>
            </>
          )}
        </div>
      </Container>
      {/* approve modal */}
      <Modal
        size="sm"
        show={approveModalShow}
        onHide={() => {
          setApproveModalShow(false)
        }}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton className="rounded">
          <Modal.Title id="example-modal-sizes-title-sm" className="fs-5">
            <i className="far fa-check-circle text-success"></i> Order Approved
          </Modal.Title>
        </Modal.Header>
      </Modal>
      {/* delete modal */}
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
    </div>
  )
}

export default ManageOrders
