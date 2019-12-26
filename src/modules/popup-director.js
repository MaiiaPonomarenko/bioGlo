const getPopupDirector = () => {
  const directorBtn = document.querySelector('.director-btn'),
        popupConsultation = document.querySelector('.popup-consultation'),
        question = document.getElementById('question');
  
  directorBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const questionObj = {
      questionFooter: question.value
    };
    
    popupConsultation.style.display = 'block';
    
    popupConsultation.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('popup-close'))
        popupConsultation.style.display = 'none';
      else{
        target = target.closest('.popup-content');
        if (!target)
          popupConsultation.style.display = 'none';
      }
    });
  
    /*** ajax ***/
    const errorMessage = "Ошибка отправки формы",
      loadMessage = 'Загрузка...',
      successMessage = 'Спасибо, мы скоро с Вами свяжемся!';
  
    const
      captureForm5 = document.getElementById('capture-form5'),
      captureFormName5 = document.getElementById('name_13'),
      captureFormPhone5 = document.getElementById('phone_13'),
      input = document.querySelectorAll('input');
  
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem; color: #85be32;`;
  
    captureForm5.addEventListener('submit', (event) => {
      event.preventDefault();
      if (captureFormName5.classList.contains('error') || captureFormPhone5.classList.contains('error')){
        return false;
      } else{
        captureForm5.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
      
        const formData = new FormData(captureForm5);
        let address = {};
        for(let val of formData.entries()){
          address[val[0]] = val[1];
        }
        let body = Object.assign(address, questionObj);
      
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
      }
    
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
  });
};

export default getPopupDirector;
