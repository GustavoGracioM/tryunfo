import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1:
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2:
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3:
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          Rariadade
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunnfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
