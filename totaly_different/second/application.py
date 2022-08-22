from flask import Flask

app=Flask(__name__)
app.config["DEBUG"] = True

@app.route('/')
def index():
    return 'hello'

@app.route('/data')
def index1():
    return ';lkjrslidfxkcj'

app.run()