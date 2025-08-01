document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    const formMessage = document.getElementById('form-message');
    if (name && email && message) {
        formMessage.textContent = 'Thank you for reaching out, ' + name + '!';
        formMessage.style.color = 'green';
        this.reset();
    } else {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
    }
});
