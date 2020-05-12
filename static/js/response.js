// GET is the default method, so we don't need to set it
const jsonData = [];
fetch('/hello')
    .then(function (response) {

        return response.text();

    }).then(function (text) {

    // Print the greeting as text
    console.log('GET response text:');
    console.log(text);
});
// Send the same request
fetch('/hello')
    .then(function (response) {

        // But parse it as JSON this time
        return response.json();
    })
    .then(function (json) {

        // Do anything with it!
        console.log('GET response as JSON:');
        json = JSON.parse(json);
        jsonData.push(json);
        console.log(json);
        let author = JSON.parse(json.author);
        console.log(author['name']);
    });

// POST
fetch('/hello', {

    // Specify the method
    method: 'POST',
    // A JSON payload
    body: JSON.stringify(jsonData)
}).then(function (response) {
    return response.text();

}).then(function (text) {

    console.log('POST response: ');

    // Should be 'OK' if everything was successful
    console.log(text);
});