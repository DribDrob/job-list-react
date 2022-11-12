import PropTypes from 'prop-types';

const Button = ({ styles, children }) => {
  return (
    <button className={styles} type="button">
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  styles: PropTypes.string,
};
