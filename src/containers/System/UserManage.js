import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from "../../utils/emitter";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      userEdit: {},
    };
  }

  async componentDidMount() {
    await this.getAllUsersFromReact();
  }
  getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };
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
  toggleUserEditModal = () => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser,
    });
  };
  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode === 0) {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalUser: false,
        });
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      } else {
        alert(response.message);
      }
      console.log("check response", response);
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteUser = async (user) => {
    try {
      let response = await deleteUserService(user.id);
      if (response && response.errCode === 0) {
        await this.getAllUsersFromReact();
      } else {
        alert(response.errCode);
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleEditUser = async (user) => {
    this.setState({
      isOpenModalEditUser: true,
      userEdit: user,
    });
  };

  doEditUser = async (user) => {
    try {
      let response = await editUserService(user);
      if (response && response.errCode === 0) {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalEditUser: false,
        });
      } else {
        alert(response.errCode);
      }
    } catch (error) {
      console.log(error);
    }
  };
  /**Life Cycle
   *1. Run construct => init state
   *2. Did mount
   *3. Render(re-render)
   **/
  render() {
    let arrUsers = this.state.arrUsers;
    let i = 1;
    return (
      <div className="user-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        {this.state.isOpenModalEditUser && (
          <ModalEditUser
            isOpen={this.state.isOpenModalEditUser}
            toggleFromParent={this.toggleUserEditModal}
            currentUser={this.state.userEdit}
            editUser={this.doEditUser}
          />
        )}
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
                          <a
                            type="button"
                            className="btn_edit btn mx-3"
                            onClick={() => this.handleEditUser(item)}
                          >
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                          <a
                            type="button"
                            className="btn_delete btn"
                            onClick={() => this.handleDeleteUser(item)}
                          >
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
