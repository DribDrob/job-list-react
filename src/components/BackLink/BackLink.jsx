import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowIcon } from 'icons/arrow.svg';

export const BackLink = ({ to, children }) => {
  return (
    <Link
      className="flex w-[213px] items-center rounded-lg bg-accent/14 px-[23px] pt-[18px] pb-4 text-center font-proxima text-xs font-semibold"
      to={to}
    >
      <ArrowIcon className="mr-[19px] " />
      {children}
    </Link>
  );
};
BackLink.propTypes = {
  to: PropTypes.object.isRequired,
};
