from flask import Flask
from AOPWorkflow import AOPWorker, AOPRunner, AOPException

import config
import model

workflows = {}

# def initWorkflow():
    
app = Flask(__name__)
@app.route('/', methods=['GET'])
def index():
    return "Homepage"

@app.route('/login', methods=['POST'])
def login():
    return "Userlogin page"

@app.route('/logout', methods=['GET'])
def logout():
    return "user logout page"

@app.route('/search', methods=['POST'])
def search():
    return "do search and redirect to result page"

@app.route('/rate')
def rate():
    return "need userId, entry id, and rated tags"

@app.errorhandler(404)
def handle_404(e):
    return "404 Error"

if __name__ == '__main__':
    config.init()
    model.connectDB()
    app.run()