import React from 'react';
import { connect } from 'react-redux';
//import Header from './Header';

const UserHeader = () => {
  const fakeDate = Math.floor(Math.random() * 30) + 1;
  return <div>test</div>
  // return <Header profile={this.props.profile} date={fakeDate} />;
};

// const mapStateToProps = (state, ownProps) => {
//   return { prmapofile: state.profile.find(user => user.id === ownProps.userId) };
// };

export default UserHeader;
