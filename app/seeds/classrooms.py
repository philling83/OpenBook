from werkzeug.security import generate_password_hash
from app.models import db, Classroom

# Adds a demo user, you can add other users here if you want
def seed_classrooms():

    demo = Classroom(name='Demo Classroom', password='password')

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_classrooms():
    db.session.execute('TRUNCATE classrooms;')
    db.session.commit()
