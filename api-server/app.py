import os
from flask import Flask, Response, flash, request, redirect, url_for, send_file
from werkzeug.utils import secure_filename
from flask_cors import CORS
import logging
from datetime import date 
import subprocess
import os
import re

UPLOAD_FOLDER = '../public/uploads'
ALLOWED_EXTENSIONS = {'mp4', 'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
logging.getLogger('flask_cors').level = logging.DEBUG

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

CORS(app)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            alpr_file = (os.path.join(app.config['UPLOAD_FOLDER'], filename))
            alpr_arg1 = "-i"
            alpr_arg2 = "-listen"
            alpr_arg3 = "1"
            alpr_arg4 = "-f"
            alpr_arg5 = "mp4"
            alpr_arg6 = "-movflags"
            alpr_arg7 = "frag_keyframe+empty_moov"
            alpr_arg8 = "http://192.168.1.122:5001"
            output = subprocess.check_output(['ffmpeg',str(alpr_arg1), str(alpr_file), str(alpr_arg2), str(alpr_arg3), str(alpr_arg4), str(alpr_arg5), 
            str(alpr_arg6), str(alpr_arg7), str(alpr_arg8)]).decode('utf-8')
            #ffmpeg -i alprVideo_1.mp4 -listen 1 -f mp4 -movflags frag_keyframe+empty_moov http://192.168.1.122:5001
            print(output)
            return redirect(url_for('upload_file', name=filename))
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''

@app.route('/login', methods=['GET', 'POST'])
def login_page():
    return {
        "token": 'test123'
    }


@app.route("/video")
def video():
    data = "../public/uploads/alprVideo.mp4"
    print(type(data))
    return send_file(data)