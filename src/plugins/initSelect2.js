import $ from 'jquery';
import 'select2';

const initSelect2 = () => {
  $('.select2').select2({ width: '100%' }); // (~ document.querySelector)
};

export { initSelect2 };