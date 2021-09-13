import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';


const Checkout = (props) =>{
  let history = useHistory()

  const handleSubmit = async (evt) =>{
    evt.preventDefault()
    const { data } = await axios.post('/api/create-checkout-session/')
    window.location = data.url
  }
  
return (
  <div>
    <section>
       <div className="product">
        <div className="description">
          <h3>Day Care Standard Plan</h3>
          <h5>$199.99 / day</h5>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          Checkout
        </button>
      </form>
    </section>
  </div>
 )
}
const mapState =(state, ownProps) =>{
  return {
    state, 
    ownProps
  }
}

export default connect(mapState)(Checkout)