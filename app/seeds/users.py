from werkzeug.security import generate_password_hash
from app.models import db, User, Classroom

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password', classrooms_id=1)

    demo_room = Classroom(name='Demo Classroom', password='password')

    db.session.add(demo)
    db.session.add(demo_room)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('''TRUNCATE users, cards, decks, deck_cards,
                       assignments, classrooms, students
                       restart identity;
                       ''')
    db.session.commit()
