
const sendForm = () => {
  
  const errorMessage = "Ошибка отправки формы",
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо, мы скоро с Вами свяжемся!';
  
  const mainForm = document.querySelector('.main-form'),
    mainFormPhone = document.getElementById('phone_3'),
    captureForm1 = document.getElementById('capture-form1'),
    captureFormName1 = document.getElementById('name_1'),
    captureFormPhone1 = document.getElementById('phone_1'),
    captureForm2 = document.getElementById('capture-form2'),
    captureFormName2 = document.getElementById('name_2'),
    captureFormPhone2 = document.getElementById('phone_2'),
    captureForm4 = document.getElementById('capture-form4'),
    captureFormName4 = document.getElementById('name_12'),
    captureFormPhone4 = document.getElementById('phone_12'),
    directorForm = document.querySelector('.director-form'),
    directorBtn = document.querySelector('.director-btn'),
    question = document.getElementById('question'),
    input = document.querySelectorAll('input');
  
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem; color: #85be32;`;
  
  const post = (selectForm) => {
    
    selectForm.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    
    const formData = new FormData(selectForm);
    let body = {};
    for(let val of formData.entries()){
      body[val[0]] = val[1];
    }
    postData(body)
    .then ((response) => {
      if (response.status !== 200){
        input.forEach((item) => {item.value = '';});
        throw new Error ('status network not 200');
      }
      input.forEach((item) => {item.value = '';});
      statusMessage.textContent = successMessage;
      setTimeout(() => {
        statusMessage.textContent = '';
      }, 3000);
    })
    .catch ((error) => {
      statusMessage.textContent = errorMessage;
      console.error(error);
    });
  };
  
  /* подключение к mainForm */
  mainForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (mainFormPhone.classList.contains('error')){
      return false;
    } else
      post(mainForm);
  });
  
  /* подключение к captureForm1 */
  captureForm1.addEventListener('submit', (event) => {
    event.preventDefault();
    if (captureFormName1.classList.contains('error') || captureFormPhone1.classList.contains('error')){
      return false;
    } else
      post(captureForm1);
  });
  
  /* подключение к captureForm2 */
  captureForm2.addEventListener('submit', (event) => {
    event.preventDefault();
    if (captureFormName2.classList.contains('error') || captureFormPhone2.classList.contains('error')){
      return false;
    } else
      post(captureForm2);
  });
  
  /* подключение к captureForm4 */
  captureForm4.addEventListener('submit', (event) => {
    event.preventDefault();
    if (captureFormName4.classList.contains('error') || captureFormPhone4.classList.contains('error')){
      return false;
    } else
      post(captureForm4);
  });
  
  /* подключение к directorForm */
  directorBtn.addEventListener('click', (event) => {
    event.preventDefault();
    post(directorForm);
  });
  
  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };
};

export default sendForm;