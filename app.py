from flask import Flask, request, jsonify, render_template, json

app = Flask(__name__)


class Author:
    def __init__(self, email, id_profile, name, avatar, footer):
        self.email = email
        self.id_profile = id_profile
        self.name = name
        self.avatar = avatar
        self.footer = footer


class Post:
    def __init__(self, id_post, text, author):
        self.id_post = id_post
        self.author = author
        self.text = text


@app.route('/hello', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        print('Incoming...')
        print(request.get_json(force=True))
        return 'OK', 200
    else:
        author = Author('bryan@gmail.com', 1, 'Bryan', 'xd.img', '???')
        author = json.dumps(author.__dict__)
        post = Post(1, 'XD', author)
        post = json.dumps(post.__dict__)
        message = post
        return jsonify(message)


@app.route('/test', methods=['POST'])
def test_page():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
