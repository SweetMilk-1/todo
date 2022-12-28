import React from "react";

import './search-panel.css'

const SearchPanel = ({onChangeSearch}) => {
    const onChange = (e) => {onChangeSearch(e.target.value);}

    return (
      <input type="text"
            onChange={onChange}
              className="form-control search-input"
              placeholder="type to search" />
    );
  }

export default SearchPanel;