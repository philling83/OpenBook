from werkzeug.security import generate_password_hash
from app.models import db, Assignment

# Adds a demo user, you can add other users here if you want


def seed_assignments():

    demo_classroom = Classroom(name='Demo Classroom', password='password')

    db.session.add(demo_classroom)

    db.session.commit()

    db.session.add(demo)
    db.session.add(demo2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the assignments table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_assignments():
    db.session.execute('TRUNCATE assignments;')
    db.session.commit()
