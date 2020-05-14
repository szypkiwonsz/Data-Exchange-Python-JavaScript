fetch('/hello', {})
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

        document.getElementById('authorNameGet').innerText += ' ' + authorName;
        let authorEmailGet = document.getElementById('authorEmailGet');
        authorEmailGet.innerText += authorEmail;
        authorEmailGet.setAttribute('href', 'mailto:' + authorEmail);
        document.getElementById('authorFooterGet').innerText += authorFooter;
        let authorAvatarGet = document.getElementById('authorAvatarGet');
        authorAvatarGet.setAttribute('src', authorAvatar);

        document.getElementById('postTextGet').innerText += text;
    });

fetch('/hello', {

    // Specify the method
    method: 'POST',
    async: false,
    // A JSON payload
    body: JSON.stringify({"Author": 'o'})
}).then(function (response) {
    return response.text();

}).then(function (text) {

    console.log('POST response: ');

    // Should be 'OK' if everything was successful
    console.log(text);
});