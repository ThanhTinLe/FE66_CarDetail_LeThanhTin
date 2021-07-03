import React, { Component } from 'react'
import Product from './Product';

export default class CarDetail extends Component {

    products = [
        { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }
        ];
        state = {
            detailProduct:{id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000}
        }
        

        renderProduct = ()=>{
            return this.products.map((item,index)=>{
                // console.log(item);
                return <div className="col-3 modal-body" key={index}>
                    <Product product={item}  />
                </div>
            })

        }

    render() {
        return (
            <div className="container-fluid pt-5 mt-5" product={this.products}>
                <h1 className="pl-5 text-center">danh sách xe</h1>
                <div className="row p-5">
                    
                {this.renderProduct()};
                </div>
            </div>
        )
    }
}
