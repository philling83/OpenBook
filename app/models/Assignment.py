from .db import db
from sqlalchemy.dialects import postgresql
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Table

# Base = declarative_base()
assignments = db.Table('assignments',
                       # db.Model.metadata,
                       db.Column('classroom_id', db.Integer,
                                 db.ForeignKey('classrooms.id'),
                                 nullable=False),
                       db.Column('deck_id', db.Integer, db.ForeignKey(
                           'decks.id'), nullable=False),
                       )
