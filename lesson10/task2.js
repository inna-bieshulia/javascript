function fetchPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            return response.json();
        })
        .then((post) => {
            return post;
        });
}

function fetchComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then((response) => {
            return response.json();
        })
        .then((comments) => {
            return comments;
        });
}
