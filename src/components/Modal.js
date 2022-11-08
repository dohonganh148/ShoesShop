import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  render() {
      const {name, image, price, description, quantity} = this.props.item;
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={image} alt="" className={styles.img}/>
        </div>
        <div className={styles.right}>
          <h2>Tên sản phẩm: {name}</h2>
          <h4>Giá: {price} $</h4>
          <p>Mô tả: {description}</p>
          <h4>Số lượng: {quantity}</h4>
        </div>
      </div>
    );
  }
}
