import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions';
import ImageLoader from './helpers/ImageLoader';
import PropTypes from 'prop-types';

// Self
import './ProfileSelf.scss';

const socialConfig = {
  isFallowed: {
    true: 'following',
    false: 'follow'
  },
  isLiked: {
    true: 'like icon-heart',
    false: 'like icon-heart-empty'
  }
}


class ProfileSelf extends React.Component {
  // Social should be in store/db
  state = {
    isLiked: false,
    isFallowed: false,
    likes: 354,
    follows: 301,
    following: 39,
    showModal: false
  }

  componentDidMount() {
    // For now static could be on router from url
    this.props.fetchProfile(this.props.id);
  }
  // for now update only state not API
  onFallow = () => {
    let status = this.state.following + 1;
    if (this.state.isFallowed) {
      status = this.state.following - 1;
    }
    this.setState(prevState => ({
      isFallowed: !prevState.isFallowed,
      following: status
    }))
  }
  onLike = () => {
    let status = this.state.likes + 1;
    if (this.state.isLiked) {
      status = this.state.likes - 1;
    }
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      likes: status
    }))
  }
  onModalClick = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }
  showModal = profile => {
    if (this.state.showModal) {
      return <a href={profile.website} rel="noopener noreferrer" target="_blank" className="popup">{profile.website}</a>
    };
  }

  renderProfile = profile => {
    const className = socialConfig['isLiked'][this.state.isLiked];
    let mobile = `data/img/${profile.id}/${profile.id}_m.jpg`;
    let tablet = `data/img/${profile.id}/${profile.id}_t.jpg`;
    let src = `data/img/${profile.id}/${profile.id}.jpg`;
    return (
      <figure>
                <ImageLoader alt={profile.name} width="70px" height="70px" mobile={mobile} tablet={tablet} src={src} />
                <figcaption>
                <button onClick={this.onModalClick} className="share icon-export" aria-hidden="true">
                    { this.showModal(profile) }
                </button>
                <div className="profile__header">
                    <h5>{profile.name}</h5>
                    <button data-test="onLike" onClick={this.onLike} className={className} aria-hidden="true" />
                </div>
                    <p>{profile.address.city}, USA</p>
                </figcaption>
            </figure>
    )
  }

  renderSocial = () => {
    // could be better
    const text = socialConfig['isFallowed'][this.state.isFallowed];
    return (
      <div className="profile__social">
                <dl data-test="Social-List">
                    <div>
                        <dd data-test='socialLikes'>{this.state.likes}</dd>
                        <dt>Likes</dt>
                    </div>
                    <div>
                        <dd>{this.state.follows}</dd>
                        <dt>Following</dt>
                    </div>
                    <div>
                        <dd>{this.state.following}</dd>
                        <dt>Followers</dt>
                    </div>
                </dl>

                <button onClick={this.onFallow}>{text}</button>
            </div>
    )
  }

  render() {
    return (
      <section className="profile" data-test="profileComponent">
                    {this.renderProfile(this.props.profile)}
                    {this.renderSocial()}
                </section>
    )
  }
}


ProfileSelf.propTypes = {
  profile: PropTypes.object
};


const mapStateToProps = state => {
  return {
    profile: state.profile[0]
  };
}

export default connect(mapStateToProps, { fetchProfile })(ProfileSelf);
