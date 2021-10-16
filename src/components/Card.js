import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <div className="card boder-card">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h4
          data-testid="description-card"
          className="description-card"
        >
          { cardDescription }
        </h4>
        <div className="attrs">
          <p data-testid="attr1-card fw-bold">
            Attr01...............................
            <span className="attr-color">{ cardAttr1 }</span>
          </p>
          <p data-testid="attr2-card fw-bold">
            Attr02...............................
            <span className="attr-color">{ cardAttr2 }</span>
          </p>
          <p data-testid="attr3-card fw-bold">
            Attr03...............................
            <span className="attr-color">{ cardAttr3 }</span>
          </p>
        </div>
        <div className="card-rare">
          <h3
            data-testid="rare-card"
          >
            {cardRare}
          </h3>
          {cardTrunfo && (
            <h3
              data-testid="trunfo-card"
              className="super-trunfo"
            >
              Super Trunfo
            </h3>
          ) }
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
