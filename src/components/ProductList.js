import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Modal from './Modal';
import Cart from './Cart';
import styles from "./ProductList.module.css"

export default class ProductList extends Component {
    productList = [
        {
          "id": 1,
          "name": "Adidas Prophere",
          "alias": "adidas-prophere",
          "price": 350,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 995,
          "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
          "id": 2,
          "name": "Adidas Prophere Black White",
          "alias": "adidas-prophere-black-white",
          "price": 450,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 990,
          "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
          "id": 3,
          "name": "Adidas Prophere Customize",
          "alias": "adidas-prophere-customize",
          "price": 375,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 415,
          "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
          "id": 4,
          "name": "Adidas Super Star Red",
          "alias": "adidas-super-star-red",
          "price": 465,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 542,
          "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
          "id": 5,
          "name": "Adidas Swift Run",
          "alias": "adidas-swift-run",
          "price": 550,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 674,
          "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
          "id": 6,
          "name": "Adidas Tenisky Super Star",
          "alias": "adidas-tenisky-super-star",
          "price": 250,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 456,
          "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
          "id": 7,
          "name": "Adidas Ultraboost 4",
          "alias": "adidas-ultraboost-4",
          "price": 450,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 854,
          "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
          "id": 8,
          "name": "Adidas Yeezy 350",
          "alias": "adidas-yeezy-350",
          "price": 750,
          "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          "quantity": 524,
          "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
          "id": 9,
          "name": "Nike Adapt BB",
          "alias": "nike-adapt-bb",
          "price": 630,
          "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
          "shortDescription": "Paul George is the rare high-percentage shooter",
          "quantity": 599,
          "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
        },
        {
          "id": 10,
          "name": "Nike Air Max 97",
          "alias": "nike-air-max-97",
          "price": 650,
          "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
          "shortDescription": "Paul George is the rare high-percentage shooter",
          "quantity": 984,
          "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
        },
        {
          "id": 11,
          "name": "Nike Air Max 97 Blue",
          "alias": "nike-air-max-97-blue",
          "price": 450,
          "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
          "shortDescription": "Paul George is the rare high-percentage shooter",
          "quantity": 875,
          "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
        },
        {
          "id": 12,
          "name": "Nike Air Max 270 React",
          "alias": "nike-air-max-270-react",
          "price": 750,
          "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
          "shortDescription": "Paul George is the rare high-percentage shooter",
          "quantity": 445,
          "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
        } 
      ];

    state = {
        selectedItem: null,
        isShowCart: false,
        cart: [],
    };

    setSelectedItem = (dataFromChild) => {
        this.setState({
            selectedItem: dataFromChild
        })
    }

    renderProducts = () => {
        return this.productList.map( (item) => {
            return(
                <div key={item.id} className={styles.col}>
                    <ProductItem product={item} setSelectedItem={this.setSelectedItem} addToCart={this.addToCart} />
                </div>
            )
        })
    }

    showCart = () => {
        this.setState({
            isShowCart: true
        })
    }
    hideCart = () => {
        this.setState({
            isShowCart: false
        })
    }

    addToCart = (product) => {
        const cloneCart = [...this.state.cart];
        let cartItem = {
            product: product,
            quantity: 1
        }
        const foundItem = cloneCart.find( (item) => product.id === item.product.id);
        if (foundItem) {
            foundItem.quantity +=1;
        } else {
            cloneCart.push(cartItem)
        };
        this.setState({
            cart: cloneCart
        });
    };

    totalQuantity = () => {
        return this.state.cart.reduce( (total, item) => {
            return total += item.quantity
        }, 0)
    };

    deleteCartItem = (id) => {
        const cloneCart = [...this.state.cart];
        const foundId = cloneCart.findIndex( item => id === item.product.id);
        cloneCart.splice(foundId, 1);
        this.setState({
            cart: cloneCart
        });
    };

    increaseQuantity = (id) => {
        const cloneCart = [...this.state.cart];
        const foundItem = cloneCart.find( item => id === item.product.id);
        if(foundItem) {
            foundItem.quantity += 1;
        };
        this.setState({
            cart: cloneCart
        });
    };

    decreaseQuantity = (id) => {
        const cloneCart = [...this.state.cart];
        const foundItem = cloneCart.find( item => id === item.product.id);
        if(foundItem && foundItem.quantity >1) {
            foundItem.quantity -= 1;
        };
        this.setState({
            cart: cloneCart
        })
    };

    resetCart = () => {
        const cloneCart = [];
        this.setState({
            cart: cloneCart
        })
    }
      
  render() {
    return (
      <div>
          <button onClick={this.showCart} className={styles.cart}>
              Cart({this.totalQuantity()})</button>
          <h1 className={styles.shop}>Shoes Shop</h1>
          <div className={styles.row}>
              {this.renderProducts()}
          </div>
          {this.state.selectedItem? <Modal item={this.state.selectedItem}/> : null} 
          {this.state.isShowCart && <Cart hideCart={this.hideCart} cart={this.state.cart} deleteCartItem={this.deleteCartItem} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} resetCart={this.resetCart}/>}
      </div>
    )
  }
}
