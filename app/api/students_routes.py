from flask import Blueprint, jsonify, request
from ..models import User, Deck, Classroom, Student
from app.models import db
students_routes = Blueprint('students', __name__)


@students_routes.route('/<id>')
def get_student(id):

    try:
        student_id = id
        student = Student.query.get(student_id)
    except Exception:
        return Exception

    return student.to_dict()


@students_routes.route('/from_class/<class_id>')
def get_students_from_class(class_id):
    students = Student.query.filter_by(classroom_id=class_id).all()

    students_return = [student.to_dict() for student in students]

    return {'list_of_students':students_return}


@students_routes.route('/', methods=['POST'])
def create_students():

    list_of_students = request.get_json().get('list_of_students')

    try:
        for name in list_of_students:
            new_student = Student()
            new_student.name = name
            new_student.classroom_id = request.get_json().get('classroom_id')

            db.session.add(new_student)

        db.session.commit()

        students = get_students_from_class(request.get_json().get('classroom_id'))

        return students
    except Exception:
        return Exception


@students_routes.route('/<id>', methods=['PUT'])
def edit_student(id):

    try:
        student_id = id
        student = Student.query.get(student_id)

        student.name = request.get_json().get('name')
        student.classroom_id = request.get_json().get('classroom_id')

        db.session.commit()

        return student.to_dict()

    except Exception:
        return Exception


@students_routes.route('/delete/<id>', methods=['POST'])
def delete_student(id):

    try:
        student_id = id
        student = Student.query.get(student_id)

        db.session.delete(student)
        db.session.commit()

        return 'deleted student'
    except Exception:
        return Exception
