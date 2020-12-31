from .db import db
from sqlalchemy.dialects import postgresql
# from sqlalchemy.orm import relationship
from .Assignment import assignments
from .Deck_card import deck_cards


class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    subject = db.Column(db.String(40), nullable=False)
    tags = db.Column(postgresql.ARRAY(db.String))
    created_by = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship('User', back_populates='decks')
    classrooms = db.relationship(
        'Classroom', secondary=assignments, back_populates='decks')
    cards = db.relationship(
        'Card', secondary=deck_cards, back_populates='decks')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "subject": self.subject,
            "tags": self.tags,
            "created_by": self.created_by,
            # "user": self.user,
            # "classrooms": self.classrooms,
            # "cards": self.cards,
        }
