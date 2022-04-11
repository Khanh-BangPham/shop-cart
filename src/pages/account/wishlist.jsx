import React from 'react'
import ListView from '../../components/ListView'
import Paginate from '../../components/Paginate'
import ProductCard, { ProductCardLoading } from '../../components/ProductCard'
import { useQuery } from '../../core'
import { profileService } from '../../services/profileServices'

export default function Wishlist() {

    const { data: products, loading } = useQuery(() => profileService.getWishlist())

    return (
        <>
            {/* Products */}
            <div className="row">
                <ListView 
                    LoadingComponent={ProductCardLoading}
                    render={e => <ProductCard key={e.id} {...e}/>}
                    isLoading={loading}
                    items={products}
                    loadingCount={6}
                />
            </div>
            {/* Pagination */}
            <Paginate />
        </>
    )
}
