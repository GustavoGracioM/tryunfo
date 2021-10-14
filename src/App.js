import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const stateInitial = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  cards: [],
  hasTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = stateInitial;
    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cards,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo };
    cards.push(newCard);
    this.setState(stateInitial);
    this.setState({
      cards,
    });
    const result = cards.some((card) => card.cardTrunfo === true);
    if (result) return this.setState({ hasTrunfo: true });
  }

  isSaveButtonDisabled() {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const maxValue = 90;
    const valueTotal = 210;

    const array = [cardName, cardDescription, cardImage, cardRare];
    const result = array.some((card) => card.length < 1);

    const att = [parseFloat(cardAttr1), parseFloat(cardAttr2), parseFloat(cardAttr3)];
    const sum = att.reduce((acc, curr) => acc + curr);
    const result1 = att.every((num) => num <= maxValue && num >= 0 && sum <= valueTotal);
    if (!result && result1) return false;
    return true;
  }

  deleteCard(cardN) {
    const { cards } = this.state;
    const test = cards.find((card) => card.cardName === cardN);
    if (test.cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    cards.splice(test, 1);
    this.setState({ cards });
  }

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
      cards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {cards && cards.map((card) => (
          <div key={ card.cardName }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => this.deleteCard(card.cardName) }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
