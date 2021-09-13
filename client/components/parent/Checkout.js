import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

// //, {headers: {
//   'Access-Control-Allow-Origin': '*'
// }}

//<Logo /> removed
const Checkout = (props) =>{
  let history = useHistory()
  //console.log('PROPSSSSS--->,', props)

  const handleSubmit = async (evt) =>{
    //let history = useHistory()
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