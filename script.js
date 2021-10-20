'use strict';
// localStorage.setItem('theme', 'light');
// localStorage.setItem('font', 'bold');
// localStorage.removeItem('font');
// localStorage.clear();

// const theme = localStorage.getItem('theme');
// console.log(theme);

// const userSettings = {
//   theme: 'dark',
//   font: 'light',
//   score: 100,
// };

// const settingString = JSON.stringify(userSettings);

// localStorage.setItem('userSetting', settingString);

// const uSetting = JSON.parse(localStorage.getItem('userSetting'));

// console.log(typeof uSetting);

// console.log(uSetting.theme);
window.addEventListener('load', function (e) {
  const themeSelector = document.querySelector('#themeSelector');

  const theme = localStorage.getItem('theme');
  changeTheme(theme);

  themeSelector.addEventListener('change', e => {
    // console.log(e.target);
    localStorage.setItem('theme', e.target.value);
    changeTheme(e.target.value);
  });

  function changeTheme(theme) {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#222';
    } else if (theme === 'light') {
      document.body.style.backgroundColor = '#e5e5e5';
    } else {
      document.body.style.backgroundColor = '#fff';
    }
  }
  window.addEventListener('storage', e => {
    if (e.key === 'theme') {
      changeTheme(e.newValue);
      themeSelector.value = e.newValue;
    }
  });

  function storageAvilable(type) {
    let storage;

    try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        (e.code === 22 ||
          e.code === 1014 ||
          e.name === 'QuotaExceededError' ||
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        storage &&
        storage.length !== 0
      );
    }
  }

  if (storageAvilable('localStorage')) {
    console.log('Yeppe!! working.');
  } else {
    console.log('OOPS!! not working.');
  }
});
