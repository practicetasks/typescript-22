class Post {
    description: string;
    likes: number;

    constructor(description: string) {
        this.description = description;
        this.likes = 0;
    }
}

class User {
    name: string;
    email: string;
    posts: Post[];

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.posts = [];
    }

    addPost(post: Post) {
        this.posts.push(post);
    }
}

const user = new User('john', 'john@mail.com');

user.addPost(new Post('Hello world#1'));
user.addPost(new Post('Hello world#2'));

console.log(user.name);

user.posts.forEach(post => {
    console.log(" - " + post.description, post.likes);
});




