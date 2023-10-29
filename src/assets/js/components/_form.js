function serializeForm(formNode) {
  return new FormData(formNode)
}
async function sendData(data) {
  // но я не знаю, туда ли отправляю( Не открывается localhost3001, swagger, соответственно, тоже
  return await fetch('/server/controllers/', {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  })
}

function toggleLoader() {
  const loader = document.querySelector('.form__loader')
  loader.classList.toggle('_active')
}
function onSuccess() {
  const success = document.querySelector('.form__success')
  success.classList.toggle('_active')  
}
function hideForm (formNode) {
  let modalWrap = formNode.closest("#form__wrap")
  modalWrap.style.display = "none"
  document.body.style.overflowY = "visible"
}
function onError() {
  const errorDiv = document.querySelector('.form__error')
  errorDiv.classList.toggle('_active')  
}  
  
  
async function handleFormSubmit(event) {
  event.preventDefault()
  const data = serializeForm(event.target)

  toggleLoader()
  const { status } = await sendData(data)
  toggleLoader()

  if (status === 200) {
    onSuccess()
    let timer = setTimeout(hideForm(event.target), 3000)
    onSuccess()
  } else {
    onError()
    let timer = setTimeout(hideForm(event.target), 3000)
    onError()
  }
}



const applicantForm = document.getElementById('common-form')
applicantForm.addEventListener('submit', handleFormSubmit)


