document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const commentText = document.getElementById('commentInput').value;
    if (commentText) {
        addComment(commentText);
        document.getElementById('commentInput').value = ''; // Clear input field
    }
});

function addComment(text, isReply = false, parentElement = null) {
    const comment = document.createElement('div');
    comment.className = isReply ? 'reply' : 'comment';
    comment.innerHTML = `
        <p>${text}</p>
        <span class="reply-button">Reply</span>
    `;

    const replyButton = comment.querySelector('.reply-button');
    replyButton.addEventListener('click', () => showReplyForm(comment));

    if (isReply) {
        parentElement.appendChild(comment);
    } else {
        document.getElementById('commentsContainer').appendChild(comment);
    }
}

function showReplyForm(comment) {
    const replyForm = document.createElement('div');
    replyForm.className = 'reply-form';
    replyForm.innerHTML = `
        <textarea class="reply-input" placeholder="Write a reply..." required></textarea>
        <button class="reply-submit">Post Reply</button>
    `;

    const replyInput = replyForm.querySelector('.reply-input');
    const replyButton = replyForm.querySelector('.reply-submit');
    replyButton.addEventListener('click', () => {
        const replyText = replyInput.value;
        if (replyText) {
            addComment(replyText, true, comment);
            replyForm.remove();
        }
    });

    comment.appendChild(replyForm);
    replyInput.focus();
}
