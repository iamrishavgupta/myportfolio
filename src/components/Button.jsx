// import PropTypes from 'prop-types';

// const Button = ({ name, isBeam = false, containerClass }) => {
//   return (
//     <button className={`btn ${containerClass}`}>
//       {isBeam && (
//         <span className="relative flex h-3 w-3">
//           <span className="btn-ping"></span>
//           <span className="btn-ping_dot"></span>
//         </span>
//       )}
//       {name}
//     </button>
//   );
// };

// Button.propTypes = {
//   name: PropTypes.string.isRequired,       // Ensures `name` is a required string
//   isBeam: PropTypes.bool,                  // Optional boolean, default is false
//   containerClass: PropTypes.string,        // Optional string
// };

// Button.defaultProps = {
//   isBeam: false,                           // Default value for `isBeam`
//   containerClass: '',                      // Default value for `containerClass`
// };

// export default Button;



import PropTypes from 'prop-types';

const Button = ({ name, isBeam = false, containerClass, href }) => {
  return (
    <a href={href} className={`w-full mt-10`}>
      <button className={`btn ${containerClass}`}>
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        )}
        {name}
      </button>
    </a>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,       // Ensures `name` is a required string
  isBeam: PropTypes.bool,                  // Optional boolean, default is false
  containerClass: PropTypes.string,        // Optional string
  href: PropTypes.string.isRequired,       // The link for redirection
};

Button.defaultProps = {
  isBeam: false,                           // Default value for `isBeam`
  containerClass: '',                      // Default value for `containerClass`
};

export default Button;


