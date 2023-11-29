import { AiOutlineFileSearch } from "react-icons/ai";
import PropTypes from 'prop-types';

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default function Search({ onSearch }) {
  return (
    <form>
      <label htmlFor="search">
        <AiOutlineFileSearch className="icon" />
      </label>
      <input
        type="search"
        name="search"
        id="search"
        title="search"
        placeholder="Ir al GYM..."
        aria-label="search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
}