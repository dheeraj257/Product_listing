import React from 'react'
import SearchBox from './SearchBox'


const Navbar = ({ uniqueCategory, filterItem }) => {
    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href="index.html" className="navbar-brand">
                        <img className="" src={require('../assets/logo.png')} alt="nothing" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            {
                                uniqueCategory.map((curr, index) => {
                                    return (
                                        <li key={index} className="nav-item ">
                                            <button onClick={() => filterItem(curr)} className="btn ">
                                                {curr}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <SearchBox />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar