from flask.cli import AppGroup
from .users import seed_users, undo_users
# from .classrooms import seed_classrooms, undo_classrooms
from .students import seed_students, undo_students
from .deck_cards import seed_deck_cards, undo_deck_cards
# from .assignments import seed_assignments, undo_assignments

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # seed_classrooms()
    seed_deck_cards()
    seed_students()
    # seed_assignments()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_assignments()
    undo_students()
    undo_deck_cards()
    # undo_cards()
    # undo_decks()
    # undo_classrooms()
    undo_users()
    # Add other undo functions here
