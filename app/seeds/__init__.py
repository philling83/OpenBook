from flask.cli import AppGroup
from .users import seed_users, undo_users
from .students import seed_students, undo_students
from .deck_cards import seed_deck_cards, undo_deck_cards

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_deck_cards()
    seed_students()

    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():

    undo_users()
    # Add other undo functions here
