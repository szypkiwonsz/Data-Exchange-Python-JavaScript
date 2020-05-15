fetch('/message')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        json = JSON.parse(json);

        let idPost = json['id_post'];
        let text = json['text'];

        let author = JSON.parse(json['author']);
        let authorEmail = author['email'];
        let authorIdProfile = author['id_profile'];
        let authorName = author['name'];
        let authorAvatar = author['avatar'];
        let authorFooter = author['footer'];

        document.getElementById('idGet').innerText += 'Post ID: ' + idPost + ', Author ID: ' + authorIdProfile;
        document.getElementById('authorNameGet').innerText += ' ' + authorName;
        let authorEmailGet = document.getElementById('authorEmailGet');
        authorEmailGet.innerText += authorEmail;
        authorEmailGet.setAttribute('href', 'mailto:' + authorEmail);
        document.getElementById('authorFooterGet').innerText += authorFooter;
        let authorAvatarGet = document.getElementById('authorAvatarGet');
        authorAvatarGet.setAttribute('src', authorAvatar);
        document.getElementById('postTextGet').innerText += text;
    });

function postData() {

    let authorAvatarPost = document.getElementById('authorAvatarPost');
    authorAvatarPost = authorAvatarPost.getAttribute('src');
    let authorEmailPost = document.getElementById('authorEmailPost').textContent;
    let authorFooterPost = document.getElementById('authorFooterPost').textContent;
    let authorIdProfilePost = document.getElementById('postIdPost').textContent;
    let authorNamePost = document.getElementById('authorNamePost').textContent;
    let idPostPost = document.getElementById('authorIdPost').textContent;
    let postTextPost = document.getElementById('postTextPost').textContent;

    fetch('/message', {
        method: 'POST',
        body: JSON.stringify({
            'author': {
                'avatar': authorAvatarPost, 'email': authorEmailPost, 'footer':
                authorFooterPost, 'id_profile': authorIdProfilePost, 'name': authorNamePost
            }, 'id_post': idPostPost,
            'text': postTextPost
        })
    }).then(function (response) {
        return response.text();
    });
}