import React, { useEffect } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import Modal from '../components/Modal'


const contentsList = [
  {
    title: 'Art Performence',
    desc: '행위예술가 이뤄라 개인전시전',
    img: '행위예술가 이뤄라 개인전시전.4.jpg',
  },
  {
    title: 'Presentation',
    desc: '대관',
    img: '넓은강연장.jpg',
  },
  {
    title: 'Performence',
    desc: '생활문화축제',
    img: '생활문화축제.2.JPG',
  },
  {
    title: 'Drama Recording',
    desc: '연극촬영',
    img: '연극.1.JPG',
  },
]

const contents = () => {
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
const modal = () => {
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
    axios.get('/api')
      .then(response => {
        console.log(response);
      })
  }, [])
  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <Header title="SPACE" />
          <div className="row">
            {contents()}
          </div>
        </div>
      </section>
      {modal()}
    </>
  )
}

export default Space
