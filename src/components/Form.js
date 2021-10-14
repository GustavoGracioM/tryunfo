import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label className="form-label fw-bold" htmlFor="name-input">
          Nome:
          <input
            className="form-control"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
          />
        </label>
        <label className="form-label fw-bold" htmlFor="description-input">
          Descrição:
          <textarea
            className="form-control"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label className="form-label fw-bold label-attr" htmlFor="attr1-input">
          Attr01:
          <input
            className="form-control"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label className="form-label fw-bold label-attr" htmlFor="attr2-input">
          Attr02:
          <input
            className="form-control"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label className="form-label fw-bold label-attr" htmlFor="attr3-input">
          Attr03:
          <input
            className="form-control"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label className="form-label fw-bold" htmlFor="image-input">
          Imagem:
          <input
            className="form-control"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
          />
        </label>
        <label className="form-label fw-bold" htmlFor="rare-input">
          Rariadade
          <select
            className="form-select"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        {!hasTrunfo
          ? (
            <div>
              <label
                className="form-check-label fw-bold"
                htmlFor="trunfo-input"
              >
                <input
                  id="trunfo-input"
                  className="form-check-input space-checkbox"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  type="checkbox"
                  data-testid="trunfo-input"
                />
                Super Trunnfo
              </label>
            </div>
          )
          : (<div>Você já tem um Super Trunfo em seu baralho</div>)}
        <button
          className="btn btn-success btn-lg"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
