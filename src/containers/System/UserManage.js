import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
import ModalUser from "./ModalUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }
  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };
  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };
  /**Life Cycle
   *1. Run construct => init state
   *2. Did mount
   *3. Render(re-render)
   *
   **/
  render() {
    let arrUsers = this.state.arrUsers;
    let i = 1;
    return (
      <div className="user-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleFromParent={this.toggleUserModal}
        />
        <div className="title text-center">Manage users with heju</div>
        <div className="mx-1">
          <button
            className="btn btn-primary px-2"
            onClick={() => this.handleAddNewUser()}
          >
            <i className="fas fa-plus "></i> Add new users
          </button>
        </div>
        <div className="users-table mt-4 mx-1">
          <table className="table table-hover table-info">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Gender</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {arrUsers &&
                arrUsers.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <th scope="row"> {i++}</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.gender}</td>
                        <td>{item.phoneNumber}</td>
                        <td>
                          <a type="button" className="btn_edit btn mx-3">
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                          <a type="button" className="btn_delete btn ">
                            <i className="fas fa-trash"></i>
                          </a>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
