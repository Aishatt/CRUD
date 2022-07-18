let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('button clicked');
    formvalidation();
    acceptData();
})

let formvalidation = ()=>{
    if(input.value == ''){
        msg.innerHTML='Textarea cannot be blank'
    }else{
        console.log('clear')
    }
}
//store data in the array
let data={};

let acceptData=()=>{
    data['text']=input.value;
    console.log(data);
    console.log(data.text);
    createPost();
}
//create and display post
let createPost=()=>{
    posts.innerHTML +=` 
    <div  class="posts-here">
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
            </div>
    `;
    input.value='';
};

//delete post method
let deletePost=(e)=>{
    alert('you want to delete this post?');
    e.parentElement.parentElement.remove();
};
let editPost=(e)=>{
input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}
pic=["cake-1",'cake-2','cake-3'];
counter=0;

let slide= document.getElementById('slide');
slide.style.backgroundImage=`url('./images/${pic[counter]}.jpeg')`;

let arrows= document.querySelectorAll('.arrow');
arrows.forEach((arrow)=>{
    arrow.addEventListener('click',(e)=>{
        if(e.target.id=='left'){
            counter--;
            if(counter < 0){
                counter= pic.length-1
               
            } slide.style.backgroundImage=`url('./images/${pic[counter]}.jpeg')`;
        }
        if(e.target.id == 'right'){
            counter++;
            if(counter > pic.length-1){
                counter= 0
            }
           
            slide.style.backgroundImage=`url('./images/${pic[counter]}.jpeg')`;
        }
    
        })
})
