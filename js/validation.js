// Regex patterns required by the task.
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!]).{8,}$/;

function validateEmail(email) {
 return EMAIL_REGEX.test(email.trim());
}
function validatePassword(password) {
 return PASSWORD_REGEX.test(password);
}
