import React, { useEffect } from 'react'
import axios from 'axios'

function Home() {
  useEffect(() => {
    axios.get('/api')
      .then(response => {
        console.log(response);
      })
  }, [])
  return (
    <div style={{ marginTop: '6rem', position:'relative', width:'100%', height:0, paddingBottom:'56.25%', backgroundColor:'#000' }}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/YylN2ovyI5s" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ position:'absolute', width:'100%', height:'100%'}}></iframe>
    </div>
  )
}

export default Home
