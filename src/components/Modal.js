import React from 'react'

function Modal(props) {
  return (
    <div className="portfolio-modal modal fade" id={"portfolioModal" + props.i} tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="modal-body">
                            <h2 className="text-uppercase">{ props.title }</h2>
                            <p className="item-intro text-muted">{ props.desc }</p>
                            <img className="img-fluid d-block mx-auto" src={process.env.PUBLIC_URL + '/images/' + props.img } alt="" />
                            <ul className="list-inline">
                                <li>Date: 2020-10-10</li>
                            </ul>
                            <button className="btn btn-primary" data-dismiss="modal" type="button">
                                <i className="fas fa-times mr-1"></i>
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Modal
