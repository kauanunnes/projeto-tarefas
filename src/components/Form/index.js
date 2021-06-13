import React from "react";
import PropTypes from 'prop-types';
import { FaPlus } from "react-icons/fa";

import "./form.css";

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}


Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}