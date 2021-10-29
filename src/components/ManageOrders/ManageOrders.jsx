import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Modal } from 'react-bootstrap'
import { confirm } from 'react-bootstrap-confirmation'
import noOrder from '../../images/no-order.svg'

const ManageOrders = () => {
  // states
  const [orders, setOrders] = useState([])
  const [modalShow, setModalShow] = useState(false)

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
            setModalShow(true)
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
              <div className="title">{order.tour.title}</div>
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
      {/* modal */}
      <Modal
        size="sm"
        show={modalShow}
        onHide={() => {
          setModalShow(false)
        }}
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

export default ManageOrders
