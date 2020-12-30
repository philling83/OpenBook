from werkzeug.security import generate_password_hash
from app.models import db, Deck

# Adds a demo user, you can add other users here if you want


def seed_decks():

    demo = Deck(name='Demo Deck', subject='Spanish',
                tags=['vocabulary', 'words'], created_by=1)
    demo2 = Deck(name='Demo Deck 2', subject='Math',
                 tags=['addition'], created_by=1, cards=[1, 2])

    db.session.add(demo)
    # db.session.add(demo2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_decks():
    db.session.execute('TRUNCATE decks;')
    db.session.commit()
