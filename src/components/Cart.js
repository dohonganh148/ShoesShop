import React, { Component } from "react";

export default class Cart extends Component {

    totalPrice = () => {
        return this.props.cart.reduce((total, item) => {
            return total + (item.quantity * item.product.price)
        }, 0)
    };

    renderCart = () => {
        return this.props.cart.map( (item) => {
            return (
                <tr>
                <td>{item.product.id}</td>
                <td>{item.product.name}</td>
                <td>
                  <img src={item.product.image} alt="" style={{width: 100}}/>
                </td>
                <td>
                  <button onClick={() => this.props.decreaseQuantity(item.product.id)} className="btn btn-success"> - </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => this.props.increaseQuantity(item.product.id)} className="btn btn-success"> + </button>
                </td>
                <td>{item.product.price}$</td>
                <td>{item.product.price * item.quantity}$</td>
                <td>
                  <button onClick={() => this.props.deleteCartItem(item.product.id)} className="btn btn-danger"><i class="fa fa-trash-alt"></i></button>
                </td>
              </tr>
            )
        })
    }

  render() {
    return (
      <div className="w-100 h-100 position-fixed top-0 left-0" style={{
        backgroundColor: "rgba(0,0,0,0.7)",
      }}>
        <div
          className="w-50 bg-white position-absolute p-4"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          <button onClick={this.props.hideCart} className="btn btn-dark position-absolute" style={{top: 20, right: 20,}}>X</button>
          <h1 className="text-center fs-3">Cart</h1>
          <table className="table text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.renderCart()}
              <tr>
                  <td colSpan={7} className="text-end">Total: {this.totalPrice()}$</td>
              </tr>
              <tr>
                  <td colSpan={7} className="text-end">
                      <button onClick={this.props.resetCart} className="btn btn-info">Purchase</button>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
