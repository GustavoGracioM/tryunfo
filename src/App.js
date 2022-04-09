import React from 'react';
import Card from './components/Card';
import Filter from './components/Filter';
import Form from './components/Form';
import { addCards, removeCard, readCards } from './services/localStorgeFunc';

const stateInitial = {
  cardName: ' ',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAClNVzyevqgrlXi47-d83yW-sZVQMhALDw&usqp=CAU',
  cardRare: 'normal',
  cardTrunfo: false,
  cards: [],
  hasTrunfo: false,
  cardNameFilter: '',
  cardRareFilter: 'todas',
  cardTrunfoFilter: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = stateInitial;
    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.saveInLocalStorege = this.saveInLocalStorege.bind(this);
    this.loadingCards = this.loadingCards.bind(this);
  }

  componentDidMount() {
    this.loadingCards();
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  loadingCards() {
    this.setState({ cards: readCards() });
  }

  saveInLocalStorege(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    addCards(card);
    const cards = readCards();
    const x = cards.find((c) => c.cardTrunfo === true);
    const newCard = { ...stateInitial, hasTrunfo: x };
    this.setState(newCard, () => this.loadingCards());
  }

  removeCardLocalStorege(card) {
    removeCard(card);
    this.loadingCards();
    const cards = readCards();
    const x = cards.find((c) => c.cardTrunfo === true);
    this.setState({ hasTrunfo: x });
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
      cardNameFilter,
      cardRareFilter,
      cardTrunfoFilter,
    } = this.state;
    return (
      <div>
        <div className="container-cards">
          <div className="create-cards">
            <h1 className="title-form">Adicione uma nova carta</h1>
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
              onSaveButtonClick={ this.saveInLocalStorege }
            />
          </div>
          <div className="create-cards cards-left">
            <h1 className="title-form">Pré-visualização</h1>
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
          </div>
        </div>
        <div className="contanier-cards-list">
          <Filter
            cardNameFilter={ cardNameFilter }
            cardNameRare={ cardRareFilter }
            cardTrunfoFilter={ cardTrunfoFilter }
            onInputChange={ this.onInputChange }
          />
          <div className="cards-filter-list">
            {cards && cards
              .filter((a) => a.cardName.includes(cardNameFilter))
              .filter((b) => (
                cardRareFilter === 'todas' ? b : b.cardRare === cardRareFilter))
              .filter((c) => (c.cardTrunfo ? c : c.cardTrunfo === cardTrunfoFilter))
              .map((card) => (
                <div key={ card.cardName } className="card cards-list">
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
                    className="btn btn-danger btn-lg delete-button"
                    data-testid="delete-button"
                    onClick={ () => this.removeCardLocalStorege(card) }
                    type="button"
                  >
                    Excluir
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
