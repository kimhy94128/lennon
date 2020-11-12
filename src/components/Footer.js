import React from 'react'

function Footer() {
  return (
    <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12 mb-4">
                    <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/lennonkr/"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-youtube"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                </div>
                <div className="col-lg-12 text-lg-center">Copyright © Lennon Entertainment 2020</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
