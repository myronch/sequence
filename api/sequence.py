from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/number-sequence')
def number_sequence():
    sequence = [1, 2, 3, 4, 5, 6]  # Replace with your logic to generate sequence
    return jsonify(sequence)

if __name__ == '__main__':
    app.run(debug=True)