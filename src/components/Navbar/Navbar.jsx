import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand">
                <img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                <span className="menu-collapsed">Brand</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#top">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#top">Pricing</a>
                    </li>
                    <li className="nav-item dropdown d-sm-block d-md-none">
                        <a className="nav-link dropdown-toggle" href="#" id="smallerscreenmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu </a>
                        <div className="dropdown-menu" aria-labelledby="smallerscreenmenu">
                            <a className="dropdown-item" href="#top">hjsahgjsa</a>
                            <a className="dropdown-item" href="#top">Profile</a>
                            <a className="dropdown-item" href="#top">Tasks</a>
                            <a className="dropdown-item" href="#top">Etc ...</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
