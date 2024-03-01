const container = document.querySelector(".container")

container.addEventListener("click", (e) => {
    const isReply = e.target.classList.contains("reply")
    const isSubmit = e.target.classList.contains("btn-submit")

    if(isReply){
        createReplyInput(e)
    }
    else if(isSubmit){
        createComment(e)
    }
})


{/* <div class="comment-reply-container">
                <input type="text" placeholder="Write your comment">
                <button class="btn-submit">Submit</button>
            </div> */}
function createReplyInput(e){
    const targetElement = e.target
    const commentContainer = targetElement.parentNode
    const replyContainerFragment = new DocumentFragment();

    const div = document.createElement('div')
    const input = document.createElement('input')
    const button = document.createElement('button')

    div.setAttribute("class", "comment-reply-container")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "Write your comment")
    button.setAttribute("class", "btn-submit")
    button.textContent = "Submit"

    div.appendChild(input)
    div.appendChild(button)

    replyContainerFragment.appendChild(div)

    commentContainer.appendChild(replyContainerFragment)

}

{/* <div class="comment-container">
            <h3 class="comment-text">Good Morning!How are you?</h3>
            <div class="reply">Reply</div>
        </div> */}

function createComment(e){
    const commentContainer = document.createElement('div')
    commentContainer.setAttribute("class", "comment-container")
    const inputNode = e.target.parentNode.children[0];


    commentContainer.innerHTML = `
    <h3 class="comment-text" > ${inputNode.value} </h3>
    <div class="reply"> Reply </div>
`
    const parentCommentContainer = e.target.parentNode.parentNode;
    const replyContainer = e.target.parentNode;


    parentCommentContainer.replaceChild(commentContainer, replyContainer);
}