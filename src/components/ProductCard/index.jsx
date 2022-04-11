import { Skeleton } from '@mui/material'
import React from 'react'
import { currency } from '../../utils/number'


export const ProductCardLoading = () => {
    return (
        <div className="col-6 col-md-4">
            {/* Card */}
            <div className="card mb-7">
                {/* Badge */}
                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <Skeleton height={280} />
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                        <Skeleton height={50} variant="text" />
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted" style={{marginTop: 10}}>
                        <Skeleton height={24}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ProductCard({ name, real_price, images }) {
    return (
        <div className="col-6 col-md-4">
            {/* Card */}
            <div className="card mb-7">
                {/* Badge */}
                <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                </div>
                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <a className="card-img-hover" href="product.html">
                        <img className="card-img-top card-img-back" src={images?.[0]?.thumbnail_url} alt="..." />
                        <img className="card-img-top card-img-front" src={images?.[1]?.thumbnail_url || images?.[0]?.thumbnail_url} alt="..." />
                    </a>
                    {/* Actions */}
                    <div className="card-actions">
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                        <a className="text-muted" href="shop.html">Shoes</a>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                        <a className="text-body" href="product.html">
                            {name}
                        </a>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">
                        {currency(real_price)}
                    </div>
                </div>
            </div>
        </div>
    )
}
