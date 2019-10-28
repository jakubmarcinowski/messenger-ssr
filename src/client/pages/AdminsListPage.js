import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../component/hocs/requireAuth';

class AdminsList extends React.Component {
  componentDidMount() {
    const { fetchAdmins } = this.props;
    fetchAdmins();
  }

  renderAdmins() {
    const { admins } = this.props;
    return admins.map((user) => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
      List of Admins:
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

AdminsList.propTypes = {
  admins: PropTypes.arrayOf(PropTypes.object),
  fetchAdmins: PropTypes.func,
};


const mapStateToProps = ({ admins }) => ({ admins });


// loadData:loadData es6
export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsList)),
};
