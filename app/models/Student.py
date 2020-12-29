from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Student(db.Model, UserMixin):
  __tablename__ = 'students'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(40), nullable = False, unique = True)
  classroom_id = db.Column(db.Integer, nullable = False, db.ForeignKey('classroom.id'))


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "classroom_id": self.classroom_id
    }
