import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      gender: "",
      roleId: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "harCode",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phoneNumber: user.phoneNumber,
        gender: user.gender,
        roleId: user.roleId,
      });
    }
  }
  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnChangeInput = (event, id) => {
    //good code
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({ ...copyState });
  };

  checkValidate = () => {
    let isValue = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
      "gender",
      "roleId",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValue = false;
        alert("Missing parameter : " + arrInput[i]);
        break;
      }
    }
    return isValue;
  };

  handleSaveUser = () => {
    let isValid = this.checkValidate();
    if (isValid === true) {
      //call api edit user modal
      this.props.editUser(this.state);
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"modalEditUser"}
        size="lg"
        centered
      >
        <ModalHeader>Create a new user</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <form action="/post-crud" method="POST" class="row g-3">
                <div class="col-12 mt-3">Edit User</div>
                <div class="col-md-6">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "email");
                    }}
                    value={this.state.email}
                    disabled
                  ></input>
                </div>
                <div class="col-md-6">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "password");
                    }}
                    value={this.state.password}
                    disabled
                  ></input>
                </div>
                <div class="col-md-6">
                  <label for="firstName" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "firstName");
                    }}
                    value={this.state.firstName}
                  ></input>
                </div>
                <div class="col-md-6">
                  <label for="lastName" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "lastName");
                    }}
                    value={this.state.lastName}
                  ></input>
                </div>
                <div class="col-md-12">
                  <label for="address" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "address");
                    }}
                    value={this.state.address}
                  ></input>
                </div>
                <div class="col-md-4">
                  <label for="phoneNumber" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "phoneNumber");
                    }}
                    value={this.state.phoneNumber}
                  ></input>
                </div>
                <div class="col-md-4">
                  <label for="gender" class="form-label">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    class="form-select"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "gender");
                    }}
                    value={this.state.gender}
                  >
                    <option selected>Choose...</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="roleId" class="form-label">
                    Role
                  </label>
                  <select
                    id="roleId"
                    name="roleId"
                    class="form-select"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "roleId");
                    }}
                    value={this.state.roleId}
                  >
                    <option selected>Choose...</option>
                    <option value="1">Admin</option>
                    <option value="2">Doctor</option>
                    <option value="3">Patient</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-2"
            onClick={() => {
              this.handleSaveUser();
            }}
          >
            Add new
          </Button>
          <Button
            className="px-2"
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
