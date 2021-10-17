import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      cardNameFilter,
      cardRareFilter,
      onInputChange,
    } = this.props;
    return (
      <div className="filter-inputs">
        <h2>Todas as cartas</h2>
        <label className="form-label fw-bold" htmlFor="name-input">
          Nome da Carta
          <input
            className="form-control"
            name="cardNameFilter"
            value={ cardNameFilter }
            onChange={ onInputChange }
            type="text"
            data-testid="name-filter"
          />
        </label>
        <label className="form-label fw-bold" htmlFor="rare-input">
          Rariadade
          <select
            className="form-select"
            name="cardRareFilter"
            value={ cardRareFilter }
            onChange={ onInputChange }
            data-testid="rare-filter"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  cardNameFilter: PropTypes.string.isRequired,
  cardRareFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,

};

export default Filter;
