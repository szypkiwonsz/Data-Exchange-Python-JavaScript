from flask import Flask, request, jsonify, render_template

app = Flask(__name__)


@app.route('/hello', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        print('Incoming...')
        print(request.get_json(force=True))
        return 'OK', 200
    else:
        message = {'greeting': 'Hello from Python!'}
        return jsonify(message)


@app.route('/test', methods=['GET', 'POST'])
def test_page():
    test = 'test'
    return render_template('index.html', test=test)


if __name__ == '__main__':
    app.run()
