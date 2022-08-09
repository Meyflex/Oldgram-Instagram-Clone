const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let user=document.getElementById("user-info")

for(let i=0;i<posts.length;i++){
    user.innerHTML+=`
    <div class="publisher container" >
        <img src="${posts[i].avatar}" class="avatar">
        <div class="name-location">
            <h1>
                ${posts[i].name}
            </h1>
            <p>
                ${posts[i].location} 
            </p>
         </div>
    </div>
    <div class="img-publisher">
        <img src=" ${posts[i].post}">
    </div>
    <div class="like-section container">
        
        <div class="icones">
            <img src="images/icon-heart.png">
            <img src="images/icon-comment.png">
            <img src="images/icon-dm.png">
        </div>
        <h2>${posts[i].likes} likes</h2>
        <h2> ${posts[i].username} <span class="bold"> ${posts[i].comment}</span></h2>
    </div>
        

    
        `
}

