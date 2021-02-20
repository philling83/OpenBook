from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
# from sqlalchemy.orm import relationship
# import .Classroom


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    classrooms_id = db.Column(db.Integer, db.ForeignKey(
        'classrooms.id'))
    decks = db.relationship('Deck', back_populates='user')
    cards = db.relationship('Card', back_populates='user')
    classrooms = db.relationship('Classroom', back_populates='teacher')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "classrooms_id": self.classrooms_id,
            "teacher": True
        }
