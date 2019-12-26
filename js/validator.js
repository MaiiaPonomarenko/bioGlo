  const valid = () => {
    class Validator {
      constructor({selector, pattern = {}, method}){
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter(item => {
          return item.tagName.toLowerCase() !== 'button' &&
            item.type !== 'button';
        });
        this.error = new Set();
      }
    
      init(){
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
        this.form.addEventListener('submit', (e) => {
          this.elementsForm.forEach( elem => this.checkIt({target: elem}));
          if(this.error.size){
            e.preventDefault();
          }
        });
      }
    
      isValid(elem){
        const validatorMethod = {
          notEmpty(elem) {
            if (elem.value.trim() === '')
              return false;
            return true;
          },
          pattern(elem, pattern) {
            return pattern.test(elem.value);
          }
        };
      
        if(this.method){
          const method = this.method[elem.id];
          if(method){
            return method.every(item => {
              return validatorMethod[item[0]](elem, this.pattern[item[1]]);
            });
          }
        }
        return true;
      }
    
      checkIt(event) {
        const target = event.target;
        if (this.isValid(target)){
          this.showSuccess(target);
          this.error.delete(target);
        }
        else{
          this.showError(target);
          this.error.add(target);
        }
        //console.log(this.error);
      }
    
      showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
      
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error'))
          return;
      
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
      }
    
      showSuccess(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');
        if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
          elem.nextElementSibling.remove();
        }
      }
    
      applyStyle(){
        const style = document.createElement('style');
        style.textContent = `
      input.success {
        border: 2px solid green !important
      }
      input.error {
         border: 2px solid red !important
      }
      .validator-error {
        font-size: 12px;
        font-family: sans-serif;
        color: red;
      }
    `;
        document.head.appendChild(style);
      }
    
      setPattern() {
        if (!this.pattern.phone)
          this.pattern.phone = /^\+?[78]([-()]*\d){10}$/; ///^\+?[78]([-()]*\d){10}$/;
        if (!this.pattern.email)
          this.pattern.email = /^\w+@w+\.\w{2,}$/;
        if (!this.pattern.name)
          this.pattern.name = /^[А-ЯЁа-яё\s]*$/;
      }
    }
  
    const mainForm = new Validator({
      selector: '.main-form',
      pattern: {
        phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
      },
      method: {
        'phone_3': [
          ['notEmpty'],
          ['pattern', 'phone']
        ]
      }
    });
    const captureForm1 = new Validator({
      selector: '#capture-form1',
      pattern: {
        phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        name: /^[А-ЯЁа-яё\s]*$/
      },
      method: {
        'phone_1': [
          ['notEmpty'],
          ['pattern', 'phone']
        ],
        'name_1': [
          ['notEmpty'],
          ['pattern', 'name']
        ]
      }
    });
    const captureForm2 = new Validator({
      selector: '#capture-form2',
      pattern: {
        phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        name: /^[А-ЯЁа-яё\s]*$/
      },
      method: {
        'phone_2': [
          ['notEmpty'],
          ['pattern', 'phone']
        ],
        'name_2': [
          ['notEmpty'],
          ['pattern', 'name']
        ]
      }
    });
    const captureForm3 = new Validator({
      selector: '#capture-form3',
      pattern: {
        phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        name: /^[А-ЯЁа-яё\s]*$/
      },
      method: {
        'phone_11': [
          ['notEmpty'],
          ['pattern', 'phone']
        ],
        'name_11': [
          ['notEmpty'],
          ['pattern', 'name']
        ]
      }
    });
    const captureForm4 = new Validator({
      selector: '#capture-form4',
      pattern: {
        phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        name: /^[А-ЯЁа-яё\s]*$/
      },
      method: {
        'phone_12': [
          ['notEmpty'],
          ['pattern', 'phone']
        ],
        'name_12': [
          ['notEmpty'],
          ['pattern', 'name']
        ]
      }
    });
  
    mainForm.init();
    captureForm1.init();
    captureForm2.init();
    captureForm3.init();
    captureForm4.init();
  };
valid();


  