from flask import Blueprint, jsonify, request
from ..models import User, Deck, Classroom, Card
from app.models import db
card_routes = Blueprint('cards', __name__)


@card_routes.route('/<id>')
def get_card(id):
    try:
        card_id = id
        card = Card.query.get(card_id)
    except Exception:
        return Exception

    return card.to_dict()


@card_routes.route('/')
def get_all_cards():

    cards = db.session.query(Card).all()
    # print('-------------------')

    result = {'cards': None}

    holding_list = [card.to_dict() for card in cards]
    # print('--------------------')

    result['cards'] = holding_list

    return result


@card_routes.route('/', methods=["POST"])
def create_card():
    # try:
    print(request)
    new_card = Card()
    print('hit card_routes')

    new_card.title = request.get_json().get('title')
    new_card.subject = request.get_json().get('subject')
    new_card.possible_answers = request.get_json().get('possible_answers')
    new_card.answer = request.get_json().get('answer')
    new_card.image = request.get_json().get('image')
    new_card.created_by = request.get_json().get('created_by')

    db.session.add(new_card)
    db.session.commit()

    return new_card.to_dict()
    # except Exception:
    #     return Exception


@card_routes.route('/<id>', methods=['PUT'])
def edit_card(id):
    # try:
    card_id = id
    card = Card.query.get(card_id)

    card.title = request.get_json().get('title')
    card.subject = request.get_json().get('subject')
    card.possible_answers = request.get_json().get('possible_answers')
    card.answer = request.get_json().get('answer')
    card.image = request.get_json().get('image')
    card.created_by = request.get_json().get('created_by')

    db.session.commit()

    return card.to_dict()

    # except Exception:
    #     return Exception


@card_routes.route('/delete/<id>', methods=["POST"])
def delete_card(id):

    card_id = id

    delete_card = Card.query.get(card_id)

    db.session.delete(delete_card)
    db.session.commit()

    return 'card deleted'


@card_routes.route('<card_id>/add_to_deck/<deck_id>', methods=['POST'])
def add_card_to_deck(card_id, deck_id):

    deck = Deck.query.get(deck_id)
    card = Card.query.get(card_id)

    deck.cards.append(card)

    db.session.commit()

    return deck.to_dict()


@card_routes.route('<card_id>/remove_from_deck/<deck_id>', methods=['POST'])
def remove_card_from_deck(card_id, deck_id):

    deck = Deck.query.get(deck_id)
    card = Card.query.get(card_id)

    deck.cards.remove(card)

    db.session.commit()

    return deck.to_dict()
