// formUtils.js
export function validateForm(form) {
  const name = form.name.value.trim();
  const email = form.email1.value.trim();
  const phone = form.phone.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !phone || !subject || !message) {
    alert("All fields are required.");
    return false;
  }
  // Email validation (example)
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}
