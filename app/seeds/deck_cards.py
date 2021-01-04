from werkzeug.security import generate_password_hash
from app.models import db, Deck, Card, Classroom
# from app.seeds import cards

# Adds a demo user, you can add other users here if you want


def seed_deck_cards():

    demo_classroom = Classroom(name='Demo Classroom', password='password')

    demo_deck = Deck(name='Demo Deck', subject='Spanish', tags=[
                     'vocabulary', 'words'], created_by=1)
    demo_deck2 = Deck(name='Demo Deck 2', subject='Math',
                      tags=['addition'], created_by=1)

    demo_card1 = Card(title='What is 2 + 2 = ?', subject='Math',
                      possible_answers=['1', '3', '4', '5'], answer='4',
                      created_by=1)

    demo_card2 = Card(title='What is 4 + 6 = ?', subject='Math',
                      possible_answers=['5', '10', '4', '6'], answer='10',
                      created_by=1)

    demo_card3 = Card(title='What is 1 + 3 = ?', subject='Math',
                      possible_answers=['7', '13', '4', '5'], answer='4',
                      created_by=1)

    demo_card4 = Card(title='What is 6 - 2 = ?', subject='Math',
                      possible_answers=['3', '2', '4', '5'], answer='4',
                      created_by=1)

    demo_card5 = Card(title='What is 5 + 1 = ?', subject='Math',
                      possible_answers=['6', '15', '4', '5'], answer='6',
                      created_by=1)

    demo_card6 = Card(title='What is 5 - 4 = ?', subject='Math',
                      possible_answers=['2', '1', '4', '3'], answer='1',
                      created_by=1)

    demo_card7 = Card(title='What is 1 + 6 = ?', subject='Math',
                      possible_answers=['7', '0', '4', '5'], answer='7',
                      created_by=1)

    demo_card8 = Card(title='What is 1 + 1 = ?', subject='Math',
                      possible_answers=['3', '0', '2', '1'], answer='2',
                      created_by=1)

    demo_card9 = Card(title='How do you say "hello"?', subject='Spanish',
                      possible_answers=['hola', 'gato', 'perro', 'loco'],
                      answer='hola',
                      created_by=1)

    demo_card10 = Card(title='How do you say "no"?', subject='Spanish',
                       possible_answers=['No', 'Nien', 'Non', 'Null'],
                       answer='No',
                       created_by=1)

    demo_card11 = Card(title='How do you say "Thank You"?', subject='Spanish',
                       possible_answers=['Mas', 'Gracias', 'Gato', 'Loco'],
                       answer='Gracias',
                       created_by=1)

    demo_card12 = Card(title='How do you say "Good Morning"?',
                       subject='Spanish',
                       possible_answers=['Buenas tardes',
                                         'Buenas noches',
                                         'Buenos días'],
                       answer='Buenos días',
                       created_by=1)

    demo_card13 = Card(title='How do you say "Good Afternoon"?',
                       subject='Spanish',
                       possible_answers=['Buenas tardes',
                                         'Buenas noches',
                                         'Buenos días'],
                       answer='Buenos tardes',
                       created_by=1)

    demo_card14 = Card(title='How do you say "Good Evening"?',
                       subject='Spanish',
                       possible_answers=['Buenas tardes',
                                         'Buenas noches',
                                         'Buenos días'],
                       answer='Buenos noches',
                       created_by=1)

    db.session.add(demo_classroom)
    db.session.commit()

    db.session.add(demo_deck)
    db.session.add(demo_deck2)
    db.session.add(demo_card1)
    db.session.add(demo_card2)
    db.session.add(demo_card3)

    db.session.commit()

    demo_classroom.decks.append(demo_deck)
    demo_deck.cards.append(demo_card9)
    demo_deck.cards.append(demo_card10)
    demo_deck.cards.append(demo_card11)
    demo_deck.cards.append(demo_card12)
    demo_deck.cards.append(demo_card13)
    demo_deck.cards.append(demo_card14)

    demo_deck2.cards.append(demo_card1)
    demo_deck2.cards.append(demo_card2)
    demo_deck2.cards.append(demo_card3)
    demo_deck2.cards.append(demo_card4)
    demo_deck2.cards.append(demo_card5)
    demo_deck2.cards.append(demo_card6)
    demo_deck2.cards.append(demo_card7)
    demo_deck2.cards.append(demo_card8)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_deck_cards():
    db.session.execute('TRUNCATE deck_cards;')
    db.session.commit()
