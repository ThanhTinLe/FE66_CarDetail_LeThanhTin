import React, { Component } from 'react'
import Detail from './Detail';

export default class Product extends Component {

    
    viewDetail = (spClick) =>{
        // console.log(spClick);
        this.setState({
            detailProduct:spClick
        })
    }

    render() {
        let { product } = this.props;
        // console.log(product.name);   

        return (
            <div>
                <div className="card">
                    <img src={product.img} alt="..." height={300} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                        <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#modelId" onClick={()=>{
                           this.viewDetail(product);
                        }}>xem chi tiết</button>
                    </div>
                    <Detail product={product} viewDetail={this.viewDetail}/>
                </div>
            </div>
        )
    }
}
