const accordion = () => {
  const collapseOnTwo = document.getElementById('collapseOne-two'),
    collapseTwoTwo = document.getElementById('collapseTwo-two'),
    collapseThreeTwo = document.getElementById('collapseThree-two'),
    accordionTwo = document.getElementById('accordion-two');
  
  accordionTwo.addEventListener('click', () => {
    if (event.target.classList.contains('collapseOne-two')){
      collapseOnTwo.classList.toggle('in');
      if (collapseTwoTwo.classList.contains('in') || collapseThreeTwo.classList.contains('in')){
        collapseTwoTwo.classList.remove('in');
        collapseThreeTwo.classList.remove('in');
      }
    }
    else if (event.target.classList.contains('collapseTwo-two')){
      collapseTwoTwo.classList.toggle('in');
      if (collapseOnTwo.classList.contains('in') || collapseThreeTwo.classList.contains('in')){
        collapseOnTwo.classList.remove('in');
        collapseThreeTwo.classList.remove('in');
      }
    }
    else if (event.target.classList.contains('collapseThree-two')){
      collapseThreeTwo.classList.toggle('in');
      if (collapseTwoTwo.classList.contains('in') || collapseOnTwo.classList.contains('in')){
        collapseTwoTwo.classList.remove('in');
        collapseOnTwo.classList.remove('in');
      }
    }
  });
};

export default accordion;
