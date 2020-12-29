from .db import db
from sqlalchemy.dialects import postgresql
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Table

Base = declarative_base()
deck_cards = Table (
    'deck_cards',
    Base.metadata,
    card_id = db.Column(db.Integer, nullable = False, db.ForeignKey('card.id')),
    deck_id = db.Column(db.Integer, nullable = False, db.ForeignKey('deck.id')),
    )
