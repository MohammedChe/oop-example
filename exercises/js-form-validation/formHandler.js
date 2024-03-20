import CommentFormValidator from './classes/CommentFormValidator.js';

let formValidator = new CommentFormValidator();
let submitBtn = document.getElementById('submit_btn');
let commentForm = document.getElementById('comment_form');

submitBtn.addEventListener('click', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    console.log(formValidator.validate());

    if (!formValidator.validate()) {
        console.log('Success');
        commentForm.submit();
    }
}
