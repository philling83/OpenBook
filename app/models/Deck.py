from .db import db
from sqlalchemy.dialects import postgresql
from sqlalchemy.orm import relationship
import Deck_card

class Deck(db.Model):
  __tablename__ = 'decks'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(40), nullable = False)
  subject = db.Column(db.String(40), nullable = False)
  tags = db.Column(postgresql.ARRAY(db.String))
  created_by = db.Column(db.String, nullable = False, db.ForeignKey('teacher.id'))
  teacher = relationship('Teacher', back_populates='deck')
  classrooms = relationship('Classroom', secondary=assignments, back_populates='decks')
  cards = relationship('Card', secondary=deck_cards, back_populates='decks')

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "subject": self.subject,
      "tags": self.tags,
      "created_by": self.created_by,
      "teacher": self.teacher,
      "classrooms": self.classrooms,
      "cards": self.cards,
    }
