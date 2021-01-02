from flask import Blueprint, jsonify, request
from ..models import User, Classroom
from app.models import db
class_routes = Blueprint('classrooms', __name__)


@class_routes.route('/<id>')
def get_classroom(id):
    classroom_id = id
    classroom = Classroom.query.get(classroom_id)

    # print('Im printing this', classroom.to_dict())
    # return 'whatever'
    return classroom.to_dict()


@class_routes.route('/<teacher_id>', methods=['POST'])
def create_classroom(teacher_id):
    teacher_id = teacher_id
    new_classroom = Classroom()

    name = request.get_json().get('name')
    password = request.get_json().get('password')
    new_classroom.name = name
    new_classroom.password = password

    db.session.add(new_classroom)

    teacher = User.query.get(teacher_id)
    teacher.classrooms_id = new_classroom.id

    db.session.commit()

    return new_classroom.to_dict()


@class_routes.route('/<id>', methods=['PUT'])
def edit_classroom(id):
    classroom_id = id

    try:
        classroom_edit = Classroom.query.get(classroom_id)
    except Exception:
        return 'No classroom found'

    name = request.get_json().get('name')
    # password = request.get_json().get('password')

    classroom_edit.name = name
    # classroom_edit.password = password

    db.session.commit()

    return classroom_edit.to_dict()


@class_routes.route('/delete/<id>', methods=['POST'])
def delete_classroom(id):
    classroom_id = id

    try:
        classroom_delete = Classroom.query.get(classroom_id)
    except Exception:
        return 'No classroom found'

    db.session.delete(classroom_delete)
    db.session.commit()

    return 'classroom deleted'
