function request(method,url,body,callback){
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.onload=function(){
        if(xhr.status>=200 && xhr.status<300){
            callback(null,JSON.parse(xhr.responseText))
        }else{
            callback(new Error("request failed"))
        }
    };

    xhr.onerror=function(){
        callback(new Error("network error"));
    };

    xhr.send(body? JSON.stringify(body): null)
}


function createElement(tag,text){
    const el= document.createElement(tag);
    if(text) el.textContent=text;
    return el;
}


function loadPosts(){
    request("GET","https://jsonplaceholder.typicode.com/posts",null,function(err,data){
        
        
        if(err) return console.error(err)
        
        renderPosts(data.slice(0,5));
        
        })
}


function createNewPost(){
    const newPost={
        title: inputTitle.value,
        body: inputBody.value,
        userId:1
    };

    request("POST","https://jsonplaceholder.typicode.com/posts",newPost,function(err,data){

        if (err) return console.error(err);
        alert("Post submitted");
        loadPosts();
    })
}

function updatePost() {
    const updatedPost = {
        title: inputTitle.value,
        body: inputBody.value,
        userId: 1
    };

    const id = Number(inputId.value);

    request("PUT", "https://jsonplaceholder.typicode.com/posts/" + id, updatedPost, function (err, data) {
        if (err) return console.error(err);
        alert("Post Updated!");
        loadPosts();
    });
}

function deletePost(){
    const id = Number(inputId.value);
    request("DELETE", "https://jsonplaceholder.typicode.com/posts/" + id, null,function (err, data) {
        if (err) return console.error(err);
        alert("Post deleted");
        loadPosts();
    }
    
)}




function renderPosts(posts){
    posts.forEach(function (post){
        const box = createElement("div");
        box.style.margin="10px 0";

        const title= createElement("h3", post.title);
        const body = createElement("p", post.body);

        box.appendChild(title);
        box.appendChild(body);
        container.appendChild(box);
    });
}


const inputId = createElement("input");
inputId.placeholder = "Post ID (for update/delete)";

const inputTitle = createElement("input");
inputTitle.placeholder = "Title";

const inputBody = createElement("input");
inputBody.placeholder = "Body";

const btnLoad = createElement("button", "Load Posts");
btnLoad.onclick = loadPosts;

const btnCreate = createElement("button", "Create Post");
btnCreate.onclick = createNewPost;

const btnUpdate = createElement("button", "Update Post");
btnUpdate.onclick = updatePost;

const btnDelete = createElement("button", "Delete Post");
btnDelete.onclick = deletePost;

const container = createElement("div");

document.body.appendChild(inputId);
document.body.appendChild(document.createElement("br"));

document.body.appendChild(inputTitle);
document.body.appendChild(document.createElement("br"));

document.body.appendChild(inputBody);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

document.body.appendChild(btnLoad);
document.body.appendChild(btnCreate);
document.body.appendChild(btnUpdate);
document.body.appendChild(btnDelete);

document.body.appendChild(document.createElement("hr"));
document.body.appendChild(container);


loadPosts();



