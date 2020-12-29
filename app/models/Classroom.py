from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
import Assignment
from sqlalchemy.orm import relationship

class Classroom(db.Model):
  __tablename__ = 'classrooms'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(40), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  decks = relationship('Deck', secondary=assignments, back_populates='classrooms')


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
      "name": self.name,
      "decks": self.decks
    }
