import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import Modal from '../components/Modal'


const contents = (contentsList) => {
  return (
    contentsList.map((item, i) => (
    <div className="col-lg-4 col-sm-6 mb-4" key={i}>
      <div className="portfolio-item">
        <a className="portfolio-link" data-toggle="modal" href={"#portfolioModal" + i}>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
          </div>
          <img className="img-fluid" src={process.env.PUBLIC_URL + '/images/' + item.img } alt="" />
        </a>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{item.title}</div>
          <div className="portfolio-caption-subheading text-muted">{item.desc}</div>
        </div>
      </div>
    </div>
    ))
  )
}
const modal = (contentsList) => {
  return (
    contentsList.map((item, i) => (
      <Modal
        i={i}
        title={item.title}
        desc={item.desc}
        img={item.img}
      />
    ))
  )
}

function Space() {
  useEffect(() => {
    axios.get('/api/space')
      .then(response => {
        setContentsList(response.data.contents);
      })
  }, [])
  const [ contentsList, setContentsList ] = useState([])
  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <Header title="SPACE" />
          <div className="row">
            {contentsList !== 0 ? 
              contents(contentsList)
              : <div> Loading.. </div>
            }
          </div>
        </div>
      </section>
      {modal(contentsList)}
    </>
  )
}

export default Space
