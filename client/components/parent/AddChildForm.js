
import React, { Component } from "react";
import { connect } from "react-redux";
import { getSchools, createStudent } from '../../store';

/**
 * COMPONENT
 */

class AddChildForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      added: false,
      firstName: '',
      lastName: '',
      categoryId: 0,
      schoolId: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.addChild = this.addChild.bind(this);
  }

  async componentDidMount() {
    await this.props.getSchools();
    this.setState({ schools: this.props.state.schools })
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  addChild(evt) {
    evt.preventDefault();
    const firstName = evt.target.firstName.value
    const lastName = evt.target.lastName.value
    const categoryId = evt.target.categoryId.value
    const schoolId = evt.target.schoolId.value
    const userId = this.props.state.auth.id
    const isPending = true;
    this.props.createStudent({ userId, firstName, lastName, categoryId, schoolId, isPending })
    this.setState({ added: true });
  }


  render() {
    const schoolList = this.state.schools
    // console.log('ON CHANGEEEE ======> ', this.state)
    return (
      <div className="addchildform">
        <form onSubmit={this.addChild}>
          <div>
            <p className="failed">You don't have children registered</p>
          </div>

          <h3 className="block-title">Register your children</h3>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="categoryId">Age</label>
            <select name="categoryId" id="categoryId-select" onChange={this.handleChange}>
              <option value="1">Less than 1year olds</option>
              <option value="2">1 - 2 year olds</option>
              <option value="3">3 - 5 year olds</option>
              <option value="4">5 - 6 year olds</option>
            </select>
          </div>
          <div>
            <label htmlFor="schoolId">School</label>
            <select name="schoolId" onChange={this.handleChange}>
              {
                schoolList && schoolList.map(school =>
                  <option value={school.id} key={school.id}>{school.name}</option>
                )
              }
            </select>
          </div>
          <div>
            <label>Note</label>
            <input type="text" />
          </div>

          <div>
            <input className="button" type="submit" value="Register your child" />
          </div>
        </form>
      </div>
    )
  }
}



/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
    state
  };
};
const mapDispatchToProps = {
  getSchools,
  createStudent
}


export default connect(mapStateToProps, mapDispatchToProps)(AddChildForm);
