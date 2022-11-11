import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <Link className="flex" to={to}>
      <FiChevronLeft size="18" />
      {children}
    </Link>
  );
};
BackLink.propTypes = {
  to: PropTypes.object.isRequired,
};
