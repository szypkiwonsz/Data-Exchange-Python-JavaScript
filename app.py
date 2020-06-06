from flask import Flask, request, jsonify, render_template, json

app = Flask(__name__)


class Author:
    def __init__(self, id_profile, email, name, avatar, footer):
        self.id_profile = id_profile
        self.email = email
        self.name = name
        self.avatar = avatar
        self.footer = footer


class Post:
    def __init__(self, id_post, text, author):
        self.id_post = id_post
        self.author = author
        self.text = text


@app.route('/message', methods=['GET', 'POST'])
def get_post():
    if request.method == 'POST':
        message = request.get_json(force=True)
        json_message = json.dumps(message, indent=2)
        print(json_message)
        return 'OK', 200
    else:
        post_id = 1
        post_text = 'My first post.'
        author_id = 1
        author_email = 'kacpersawicki321@gmail.com'
        author_name = 'szypkiwonsz'
        author_avatar = '../static/media/avatar.jpg'
        author_footer = 'Sample footer'

        author = Author(author_id, author_email, author_name, author_avatar, author_footer)
        author = json.dumps(author.__dict__)

        post = Post(post_id, post_text, author)
        post = json.dumps(post.__dict__)
        message = post
        return jsonify(message)


@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
