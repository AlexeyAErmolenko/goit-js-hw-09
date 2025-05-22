let formData = { email: '', message: '' };

const formRefs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[type="email"]'),
  textarea: document.querySelector('textarea'),
};
const { form, input, textarea } = formRefs;

if (JSON.parse(localStorage.getItem('feedback-form-state')) !== null) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  // const parced = JSON.parse(localStorage.getItem('feedback-form-state'));

  input.value = formData.email;
  textarea.value = formData.message;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    console.log('Fill please all fields');
    return;
  }

  console.log('🚀 ~ email:', formData.email);
  console.log('🚀 ~ message:', formData.message);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
}
formRefs.form.addEventListener('submit', onFormSubmit);

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
formRefs.form.addEventListener('input', onInput);
