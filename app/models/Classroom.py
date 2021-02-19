from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
# from sqlalchemy.orm import relationship
from .Assignment import assignments


class Classroom(db.Model):
    __tablename__ = 'classrooms'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    decks = db.relationship('Deck', secondary=assignments,
                            back_populates='classrooms')
    students = db.relationship("Student", cascade="all, delete-orphan")
    teacher = db.relationship("User", backref=db.backref('users'))

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
            "decks": [deck.to_dict() for deck in self.decks],
            "students": [student.to_dict() for student in self.students],
            "teacher": [user.to_dict() for user in self.teacher][0]
        }
