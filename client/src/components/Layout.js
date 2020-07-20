import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT, VERIFY_USER } from '../Events';
import ChatContainer from './chat/ChatContainer';
import './layout.css';

const socketUrl = 'http://localhost:3231';
export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: this.props.user,
    };
  }

  componentWillMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io(socketUrl);

    socket.on('connect', () => {
      if (this.state.user) {
        this.reconnect(socket);
      } else {
        console.log('connected');
      }
    });

    this.setState({ socket });
    console.log(this.state.socket);
  };

  setUser = (user) => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({ user });
  };

  reconnect = (socket) => {
    socket.emit(VERIFY_USER, this.state.user.name, ({ isUser, user }) => {
      if (isUser) {
        this.setState({ user: null });
      } else {
        this.setUser(user);
      }
    });
  };

  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
    const { socket, user } = this.state;
    return (
      <div className='container'>
        <ChatContainer socket={socket} user={user} logout={this.logout} />
      </div>
    );
  }
}
