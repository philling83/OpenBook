from flask import Blueprint, jsonify, request
from ..models import User, Deck, Classroom
from app.models import db
deck_routes = Blueprint('decks', __name__)


@deck_routes.route('/<id>')
def get_deck(id):

    try:
        deck_id = id
        deck = Deck.query.get(deck_id)
    except Exception:
        return Exception

    return deck.to_dict()


@deck_routes.route('/by_user/<id>')
def get_deck_by_user(id):
    user_id = id

    decks = Deck.query.filter(Deck.created_by == user_id).all()

    return {"decks": deck.to_dict() for deck in decks}


@deck_routes.route('/', methods=['POST'])
def create_deck():

    try:
        new_deck = Deck()

        new_deck.name = request.get_json().get('name')
        new_deck.subject = request.get_json().get('subject')
        new_deck.tags = request.get_json().get('tags')
        new_deck.created_by = request.get_json().get('created_by')

        db.session.add(new_deck)
        db.session.commit()

        return new_deck.to_dict()
    except Exception:
        return Exception


@deck_routes.route('/<id>', methods=['PUT'])
def edit_deck(id):

    try:
        deck_id = id
        deck = Deck.query.get(deck_id)

        deck.name = request.get_json().get('name')
        deck.subject = request.get_json().get('subject')
        deck.tags = request.get_json().get('tags')
        deck.created_by = request.get_json().get('created_by')

        db.session.commit()

        return deck.to_dict()

    except Exception:
        return Exception


@deck_routes.route('/delete/<id>', methods=['POST'])
def delete_deck(id):

    try:
        deck_id = id
        deck = Deck.query.get(deck_id)

        db.session.delete(deck)
        db.session.commit()

        return 'deleted deck'
    except Exception:
        return Exception


@deck_routes.route('/<deck_id>/assign_to_classroom/<classroom_id>',
                   methods=['POST'])
def assign_deck_to_classroom(deck_id, classroom_id):

    deck = Deck.query.get(deck_id)
    classroom = Classroom.query.get(classroom_id)

    deck.classrooms.append(classroom)

    db.session.commit()

    return 'Deck assigned to classroom'


@deck_routes.route('<deck_id>/unassign_from_classroom/<classroom_id>',
                   methods=['POST'])
def unassign_deck_from_classroom(deck_id, classroom_id):

    deck = Deck.query.get(deck_id)
    classroom = Classroom.query.get(classroom_id)

    deck.classrooms.remove(classroom)

    db.session.commit()

    return 'Deck unassigned from classroom'


@deck_routes.route('/search/<term>', methods=['GET'])
def deck_search(term):
    decks = db.session.query(Deck).all()

    return {"decks": [deck.to_dict() for deck in decks if term in deck.tags]}


@deck_routes.route('/all-decks', methods=['GET'])
def all_decks():
    decks = db.session.query(Deck).all()

    return {"decks": [deck.to_dict() for deck in decks]}
