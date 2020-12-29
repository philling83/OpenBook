from werkzeug.security import generate_password_hash
from app.models import db, Card

# Adds a demo user, you can add other users here if you want


def seed_cards():

    card1 = Card(title='What is 2 + 2 = ?', subject='Math',
                 possible_answers=['1', '3', '4', '5'], answer='4',
                 created_by=1)

    demo2 = Card(title='What is 4 + 6 = ?', subject='Math',
                 possible_answers=['5', '10', '4', '5'], answer='10',
                 created_by=1)

    demo3 = Card(title='How do you say hello?', subject='Spanish',
                 possible_answers=['hola', 'gato', 'perro', 'loco'],
                 answer='hola',
                 created_by=1)

    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the cards table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_cards():
    db.session.execute('TRUNCATE cards;')
    db.session.commit()
