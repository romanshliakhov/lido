let replaceSettings = {
  beforebegin: 'beforebegin', // перед самим элементом targetElement
  afterbegin: 'afterbegin', // внутри элемента targetElement, перед его первым потомком
  beforeend: 'beforeend', //  внутри элемента targetElement, после его последнего потомка
  afterend: 'afterend', // после самого элемента targetElement
  mobile: 576,
  smallTablet: 768,
  tablet: 1007
}

let elementName = {
  sortingBtn : '.consultation__title',
  formParentBtn: '.consultation__info',
  mobileSiblingstBtn: '.seo__consultation',
}

let items = [...document.querySelectorAll('.container')];

const replaceElements = (elements, elementClass, desktopClass, mobileClass, mobileSetting, desktopSetting, breakpointSetting) => {
  let containerWidth = document.documentElement.clientWidth;

  elements.map(function (item) {
    const myElement = item.querySelector(elementClass);
    const myDesktop = item.querySelector(desktopClass);
    const myMobile = item.querySelector(mobileClass);

    (function() {
      if (myDesktop && myElement && myMobile) {
        containerWidth <= breakpointSetting ?
        myMobile.insertAdjacentElement(mobileSetting, myElement) :
        myDesktop.insertAdjacentElement(desktopSetting, myElement);
      }
    }());
  });
}

window.addEventListener('resize', () => {
  replaceElements(items, elementName.sortingBtn, elementName.formParentBtn, elementName.mobileSiblingstBtn, replaceSettings.beforebegin, replaceSettings.afterbegin, replaceSettings.tablet);
});

window.addEventListener('DOMContentLoaded', () => {
  replaceElements(items, elementName.sortingBtn, elementName.formParentBtn, elementName.mobileSiblingstBtn, replaceSettings.beforebegin, replaceSettings.afterbegin, replaceSettings.tablet);
});
