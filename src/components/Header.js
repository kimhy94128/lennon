import React from 'react'

function Header(props) {
  return (
    <div className="text-center">
      <h2 className="section-heading text-uppercase">{ props.title }</h2>
      <h3 className="section-subheading text-muted">레논엔터테인먼트</h3>
    </div>
  )
}

export default Header
