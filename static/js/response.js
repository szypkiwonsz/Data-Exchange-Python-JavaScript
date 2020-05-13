// GET is the default method, so we don't need to set it
fetch('/hello')
    .then(function (response) {

        return response.text();

});
// Send the same request
fetch('/hello', {
})
    .then(function (response) {

        // But parse it as JSON this time
        return response.json();
    })
    .then(function (json) {

        // Do anything with it!
        console.log('GET response as JSON:');
        json = JSON.parse(json);

        let idPost = json['id_post'];
        let text = json['text'];

        let author = JSON.parse(json['author']);
        let authorEmail = author['email'];
        let authorName = author['name'];
        let authorIdProfile = author['id_profile'];
        let authorAvatar = author['avatar'];
        let authorFooter = author['footer'];

        let result = document.createTextNode(idPost + " " + text + " " + authorEmail + " " +
            authorIdProfile + " " + authorAvatar + " " + authorFooter);
        // authorName = document.createTextNode(' ' + authorName);
        document.getElementById('post').appendChild(result);
        let authorNameValue = document.getElementById('authorName').getAttribute('value');
        document.getElementById('authorName').setAttribute('value', authorNameValue);



        let xd = document.getElementById('post').textContent;
        // authorName = document.getElementById('authorName').getAttribute('value');
        console.log(authorName);
        let lol = json;
        lol['text'] = authorName;
        console.log(lol['text']);
        xd['text'] = 'xdd';
        console.log(xd);
        fetch('/hello', {

            // Specify the method
            method: 'POST',
            async: false,
            // A JSON payload
            body: JSON.stringify(json)
        }).then(function (response) {
            // authorName = document.getElementById('authorName').getAttribute('value');
            // let authorNameValue = authorName;
            // document.getElementById('authorName').setAttribute('value', authorNameValue);
            // // authorName = author['name'];
            // console.log(authorName);
            return response.text();

        }).then(function (text) {

            console.log('POST response: ');

            // Should be 'OK' if everything was successful
            console.log(text);
        });

        console.log(author['name']);
    });