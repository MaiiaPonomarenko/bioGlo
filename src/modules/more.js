const more = () => {
  const addSentenceBtn = document.querySelector('.add-sentence-btn'),
    itemSentence = document.querySelectorAll('.item-sentence');
  
  addSentenceBtn.addEventListener('click', () => {
    itemSentence.forEach((item) => {
      if (item.classList.contains('hidden') || item.classList.contains('visible-sm-block')){
        item.classList.remove('visible-sm-block');
        item.classList.remove('hidden');
        addSentenceBtn.style.display = 'none';
      }
    })
  });
};

export default more;