from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Student, Classroom


def student_exists(form, field):
    print("Checking if student exists", field.data)
    name = field.data
    student = Student.query.filter(Student.name == name).first()
    if not student:
        raise ValidationError("Name provided not found.")


def class_password_matches(form, field):
    print("Checking if password matches")
    password = field.data
    name = form.data['name']
    student = Student.query.filter(Student.name == name).first()
    classroom = Classroom.query.filter(student.classroom_id == Classroom.id).first()
    if not student:
        raise ValidationError("No such student exists.")
    if not classroom.check_password(password):
        raise ValidationError("Password was incorrect.")


class StudentLoginForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), student_exists])
    password = StringField('password', validators=[
                           DataRequired(), class_password_matches])
