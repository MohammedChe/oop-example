class CommentFormValidator {
    constructor() {
        // get inputs
        this.nameInput = document.getElementById('name');
        this.categoryInput = document.getElementById('category');
        this.experienceInput = document.getElementsByName('experience');

        //get error spans
        this.nameError = document.getElementById('name_error');
        this.categoryError = document.getElementById('category_error');
        this.experienceError = document.getElementById('experience_error');
        this.errorExists = false;
    }

    showError(_errorField, _errorMessage) {
        this.errorExists = true;
        _errorField.innerHTML = _errorMessage;
        _errorField.style.color = '#f44242';
    }

    clearErrors() {
        this.nameError.innerHTML = '';
        this.categoryError.innerHTML = '';
        this.experienceError.innerHTML = '';
        this.errorExists = false;
    }

    validateName() {
        if (this.nameInput.value === '') {
            this.showError(this.nameError, 'Name is required');
        } else if (this.nameInput.value.length < 3) {
            this.showError(this.nameError, 'Name must be over 3 characters');
        }
    }

    validateCategory() {
        if (this.categoryInput.value === '') {
            this.showError(this.categoryError, 'Category is required');
        }
    }

    validateExperience() {
        let expSelected = false;
        for (let i = 0; i != this.experienceInput.length; i++) {
            if (this.experienceInput[i].checked === true) {
                expSelected = true;
                break;
            }
        }

        if (!expSelected) {
            this.showError(this.experienceError, 'Experience is required');
        }
    }

    validate() {
        this.clearErrors();
        this.validateName();
        this.validateCategory();
        this.validateExperience();

        return this.errorExists;
    }
}

export default CommentFormValidator;
