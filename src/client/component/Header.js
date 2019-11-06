import React from 'react';

const Header = ({ name, date }) => {
  return (
    <header>
		<h5>{name}</h5>
		<span className="date">{date}d</span>
	</header>
  );
};

export default Header;
