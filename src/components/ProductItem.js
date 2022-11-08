import React, { Component } from 'react'
import styles from "./ProductItem.module.css"

export default class ProductItem extends Component {
  render() {
      const {name, price, image} = this.props.product;
    return (
      <div className={styles.item}>
          <img src={image} alt='' className={styles.img}/>
          <h4 className={styles.title}>{name}</h4>
          <p className={styles.content}>{price} $</p>
          <button onClick={() => this.props.addToCart(this.props.product)} className={styles.btn}>Add to cart</button>
          <button onClick={() => this.props.setSelectedItem(this.props.product)} className={styles.button}>Details</button>
      </div>
    )
  }
}
