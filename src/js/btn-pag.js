import { renderWeb } from '../index';

const btnList = document.querySelector('.btn__list');
const counterPage = document.querySelector('.counter');
const prevBtn = document.querySelector('#prev_btn');
const firstBtn = document.querySelector('#first_btn');
const dotLeftBtn = document.querySelector('#left_dot_btn');
const leftSecBtn = document.querySelector('#left_sec_btn');
const leftBtn = document.querySelector('#left_btn');
const centertBtn = document.querySelector('#center_btn');
const rightBtn = document.querySelector('#right_btn');
const rightSecBtn = document.querySelector('#right_sec_btn');
const dotRightBtn = document.querySelector('#right_dot_btn');
const lastBtn = document.querySelector('#last_btn');
const nextBtn = document.querySelector('#next_btn');

function counter(totalPage, counterValue = 1) {
  firstBtn.textContent = 1;
  if (Number(firstBtn.textContent) + 3 >= counterValue) {
    dotLeftBtn.classList.add('visually-hidden');
  } else {
    dotLeftBtn.classList.remove('visually-hidden');
  }

  if (Number(firstBtn.textContent) + 2 >= counterValue) {
    firstBtn.classList.add('visually-hidden');
  } else {
    firstBtn.classList.remove('visually-hidden');
  }

  leftSecBtn.textContent = counterValue - 2;
  if (Number(leftSecBtn.textContent) <= 0) {
    leftSecBtn.classList.add('visually-hidden');
  } else {
    leftSecBtn.classList.remove('visually-hidden');
  }

  leftBtn.textContent = counterValue - 1;
  if (Number(leftBtn.textContent) <= 0) {
    leftBtn.classList.add('visually-hidden');
  } else {
    leftBtn.classList.remove('visually-hidden');
  }

  centertBtn.textContent = counterValue;
  if (Number(centertBtn.textContent) === totalPage) {
    nextBtn.classList.add('visually-hidden');
  } else {
    nextBtn.classList.remove('visually-hidden');
  }
  if (Number(centertBtn.textContent) === 1) {
    prevBtn.classList.add('visually-hidden');
  } else {
    prevBtn.classList.remove('visually-hidden');
  }
  rightBtn.textContent = counterValue + 1;
  if (Number(rightBtn.textContent) > totalPage) {
    rightBtn.classList.add('visually-hidden');
  } else {
    rightBtn.classList.remove('visually-hidden');
  }
  rightSecBtn.textContent = counterValue + 2;
  if (Number(rightSecBtn.textContent) > totalPage) {
    rightSecBtn.classList.add('visually-hidden');
  } else {
    rightSecBtn.classList.remove('visually-hidden');
  }

  lastBtn.textContent = totalPage;
  if (Number(lastBtn.textContent) - 3 <= counterValue) {
    dotRightBtn.classList.add('visually-hidden');
  } else {
    dotRightBtn.classList.remove('visually-hidden');
  }

  if (Number(lastBtn.textContent) - 2 <= counterValue) {
    lastBtn.classList.add('visually-hidden');
  } else {
    lastBtn.classList.remove('visually-hidden');
  }

  counterPage.textContent = counterValue;

  btnList.addEventListener('click', onClick);
  function onClick(evt) {
    if (evt.target.id === 'next_btn') {
      counterValue += 1;
    }
    if (evt.target.id === 'prev_btn') {
      counterValue -= 1;
    }
    if ([...evt.target.classList].includes('num')) {
      counterValue = Number(evt.target.textContent);
    }

    counterPage.textContent = counterValue;
    renderWeb(counterValue);

    // console.log(counterValue);
    // if (counterValue > 1) {
    //   prevBtn.classList.remove('visually-hidden');
    // } else {
    //   prevBtn.classList.add('visually-hidden');
    // }
    // if (totalPage > 7 && counterValue > 3) {
    //   dotLeftBtn.classList.remove('visually-hidden');
    // } else {
    //   dotLeftBtn.classList.add('visually-hidden');
    // }
    // if (totalPage > 7 && counterValue < totalPage - 3) {
    //   dotRightBtn.classList.remove('visually-hidden');
    // } else {
    //   dotRightBtn.classList.add('visually-hidden');
    // }
    // if (totalPage === counterValue) {
    //   nextBtn.classList.add('visually-hidden');
    // } else {
    //   nextBtn.classList.remove('visually-hidden');
    // }

    // if (counterValue === 1) {
    //   firstBtn.classList.add('activ-btn');
    //   leftSecBtn.textContent = counterValue + 1;
    //   leftBtn.textContent = counterValue + 2;
    //   centertBtn.textContent = counterValue + 3;
    //   rightBtn.textContent = counterValue + 4;
    //   rightSecBtn.textContent = counterValue + 5;
    // } else {
    //   firstBtn.classList.remove('activ-btn');
    // }
    // if (counterValue === 2) {
    //   leftSecBtn.classList.add('activ-btn');
    //   leftSecBtn.textContent = counterValue;
    // } else {
    //   leftSecBtn.classList.remove('activ-btn');
    // }
    // if (counterValue === 3) {
    //   leftBtn.classList.add('activ-btn');
    //   leftBtn.textContent = counterValue;
    // } else {
    //   leftBtn.classList.remove('activ-btn');
    // }
    // if (counterValue === totalPage) {
    //   lastBtn.classList.add('activ-btn');
    //   leftSecBtn.textContent = counterValue - 5;
    //   leftBtn.textContent = counterValue - 4;
    //   centertBtn.textContent = counterValue - 3;
    //   rightBtn.textContent = counterValue - 2;
    //   rightSecBtn.textContent = counterValue - 1;
    // } else {
    //   lastBtn.classList.remove('activ-btn');
    // }
    // if (counterValue === totalPage - 1) {
    //   rightSecBtn.classList.add('activ-btn');
    //   rightSecBtn.textContent = counterValue;
    // } else {
    //   rightSecBtn.classList.remove('activ-btn');
    // }
    // if (counterValue === totalPage - 2) {
    //   rightBtn.classList.add('activ-btn');
    //   rightBtn.textContent = counterValue;
    // } else {
    //   rightBtn.classList.remove('activ-btn');
    // }
    // if (counterValue < totalPage - 2 && counterValue > 3) {
    //   centertBtn.classList.add('activ-btn');
    //   leftSecBtn.textContent = counterValue - 2;
    //   leftBtn.textContent = counterValue - 1;
    //   centertBtn.textContent = counterValue;
    //   rightBtn.textContent = counterValue + 1;
    //   rightSecBtn.textContent = counterValue + 2;
    // } else {
    //   centertBtn.classList.remove('activ-btn');
    // }
  }
}

export { counter };
