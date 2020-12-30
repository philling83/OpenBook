from .db import db
from sqlalchemy.dialects import postgresql
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.schema import Table

# Base = declarative_base()
deck_cards = db.Table('deck_cards',
                      # db.Model.metadata,
                      db.Column('card_id', db.Integer, db.ForeignKey(
                          'cards.id'), nullable=False),
                      db.Column('deck_id', db.Integer, db.ForeignKey(
                          'decks.id'), nullable=False),
                      )
