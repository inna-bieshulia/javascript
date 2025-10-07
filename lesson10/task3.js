async function fetchPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();
    return post;
}

async function fetchComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    const comments = await response.json();
    return comments;
}

async function getPostAndComments() {
    try {
        console.log("Getting post...");
        const post = await fetchPost();
        console.log("Post received:");
        console.log(`${post.title}`);
        console.log(`Text: ${post.body}`);

        console.log("Getting comments...");
        const comments = await fetchComments();
        console.log(`Comments received: ${comments.length}`);
        comments.forEach((comment) => {
            console.log(`${comment.name}`);
            console.log(`Email: ${comment.email}`);
        });

        return { post, comments };
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}

getPostAndComments();

