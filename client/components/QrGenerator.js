// import React from 'react'
// import { connect } from 'react-redux'
// import axios from 'axios'

// import { Button, Form, Container, Header } from 'semantic-ui-react'

// /**
//  * COMPONENT
//  */



// export class QrGenerator extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       school: '',
//       firstName: '',
//       lastName: '',
//       fullName: '',
//       url: '',
//       nextStep: false,
//     }

//     // this.createQrCode = this.createQrCode.bind(this)
//     this.submitHandler = this.submitHandler(this)
//   }

//   // createQrCode(ev) {
//   //   const inputs = document.querySelectorAll('.form input');
//   //   const button = document.querySelector('.form button');
//   //   const qrImg = document.querySelector('.qr-img img');

//   //   button.addEventListener('click', function () {
//   //     let data = []
//   //     for (let i = 0; i < inputs.length; i++) {
//   //       data.push(inputs[i].value)
//   //     }
//   //     if (data.length > 0) {
//   //       let imgSrc = "https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=" + data.join('+');
//   //       qrImg.src = imgSrc;
//   //       console.log(imgSrc)
//   //     }
//   //   })
//   // }

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
//     console.log(this.state)
//   }

//   submitHandler = e => {
//     // e.preventDefault();
//     const inputs = document.querySelectorAll('.form input');
//     const button = document.querySelector('.form button');
//     const qrImg = document.querySelector('.qr-img img');

//     let data = []
//     for (let i = 0; i < inputs.length; i++) {
//       data.push(inputs[i].value)
//     }
//     if (data.length > 0) {
//       let imgSrc = "https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=" + data.join('+');
//       qrImg.src = imgSrc;
//     }

//     axios.post('https://sheet.best/api/sheets/3ec718c3-e38a-46e7-a804-79e835ca1c88', this.state)
//       .then(response => {
//         console.log(response);
//       })
//   }

//   render() {
//     const { school, firstName, lastName } = this.state;
//     return (
//       <div>
//         {/* <div className="center">
//           <div className="form">
//             <div className="form-element">
//               <label htmlFor="data-ip-firstName">firstName</label>
//               <input type="text" id="data-ip-firstName" />
//             </div>
//             <div className="form-element">
//               <label htmlFor="data-ip-lastName">lastName</label>
//               <input type="text" id="data-ip-lastName" />
//             </div>
//             <div className="form-element">
//               <button onClick={this.createQrCode}>Generate QR code</button>
//             </div>
//           </div>
//           <div className="qr-img">
//             <img src="" alt="My QR code" />
//           </div>
//         </div> */}

//         <h1>Chekin</h1>
//         <Container fluid className="container">
//           <Header as='h2'>React Google Sheets!</Header>
//           <Form className="form" onSubmit={this.submitHandler}>
//             <Form.Field className="form-element">
//               <label htmlFor="school">school</label>
//               <input placeholder='Enter your first name' id="school" type="text" name="school" value={school} onChange={this.changeHandler} />
//             </Form.Field>
//             <Form.Field className="form-element">
//               <label htmlFor="firstName">first name</label>
//               <input placeholder='Enter your first name' id="firstName" type="text" name="firstName" value={firstName} onChange={this.changeHandler} />
//             </Form.Field>
//             <Form.Field className="form-element">
//               <label htmlFor="lastName">last name</label>
//               <input placeholder='Enter your last name' id="lastName" type="text" name="lastName" value={lastName} onChange={this.changeHandler} />
//             </Form.Field>
//             <Form.Field className="form-element">
//               <label htmlFor="url">url</label>
//               <input placeholder='Enter your last name' id="url" type="text" name="url" value={`https://docs.google.com/forms/d/e/1FAIpQLSdfksCs3BmT4wprw0s6ULfoE_aVLoLKL_CvcGZUmUDVHofuDg/formResponse?entry.1504122746=${school}+${firstName}+${lastName}`} onChange={this.changeHandler} />
//             </Form.Field>
//             <Form.Field className="form-element">
//               <label htmlFor="qrcode">qrcode</label>
//               <input placeholder='Enter your last name' id="qrcode" type="text" name="qrcode" value={`https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=${school}+${firstName}+${lastName}`} onChange={this.changeHandler} />
//             </Form.Field>
//             <Button color="blue" type='submit'>Submit</Button>
//           </Form>
//           <div className="qr-img">
//             <img src="" alt="My QR code" />
//           </div>
//         </Container>
//       </div>
//     )
//   }
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   // return {
//   //   username: state.auth.username
//   // }
// }

// export default connect(mapState)(QrGenerator)
