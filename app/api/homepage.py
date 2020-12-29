from flask import Blueprint, jsonify
from ..models import User, Deck, Classroom

homepage_routes = Blueprint('app', __name__)

@homepage_routes.route('/')
def homepage(user_id, classroom_id):
    user_decks = Deck.query.filter_by(created_by=user_id).all()
    print(user_decks)

    user_classrooms = Classroom.query.filter_by(id=classroom_id).all()
    print(user_classrooms)

    return {'decks':user_decks, 'classrooms':user_classrooms}
