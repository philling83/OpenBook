from .db import db
from sqlalchemy.dialects import postgresql
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Table

Base = declarative_base()
assignments = Table (
    'assignments',
    Base.metadata,
    classroom_id = db.Column(db.Integer, nullable = False, db.ForeignKey('classroom.id')),
    deck_id = db.Column(db.Integer, nullable = False, db.ForeignKey('deck.id')),
    )
