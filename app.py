# setup flask app with routes to index.html

# import dependencies
from flask import Flask,render_template

# create an app
app = Flask(__name__)

# create route to index.html
@app.route('/')
def index():
    return render_template('index.html')

# run the app
if __name__ == '__main__':
    app.run(debug=True)
    
