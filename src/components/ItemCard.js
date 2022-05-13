import React from 'react'

const ItemCard = ({ menuData }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        menuData.map((curr, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-num">
                                            <h6>{curr.id}</h6>
                                            <h5>{curr.category}</h5>
                                        </div>
                                        <div className="card-head">
                                            <h1>{curr.name}</h1>
                                            <span className="offer">50% off | Use WELCOME50</span>
                                        </div>
                                        <div className="card-line">
                                            <hr />
                                            <h6>Read</h6>
                                        </div>
                                        <div className="card-img">

                                            <img className="w-100 h-25" src={curr.img} alt="" />
                                        </div>

                                        <div className='card-order' >
                                            <h3 className='price'>Rs. <span>{curr.price}/-</span> </h3>
                                            <button className='btn btn-outline-primary'>Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </>
    )
}

export default ItemCard