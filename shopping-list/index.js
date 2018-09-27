'use strict';

console.log('pizza'); 

$('.shopping-list').click(function(event){ 
  //event.preventDefault(); 
  // eslint-disable-next-line no-console
  console.log('clicked button!'); 
  //$(event.target).addClass('shopping-item-checked'); 
  //$(this.)
}); 
/*eslint-env jquery*/
function addList(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let newInfo = $('input').val();

    // eslint-disable-next-line no-console
    console.log(newInfo);
    let newItem = 
    `<li>
      <span class="shopping-item">${newInfo}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
    // eslint-disable-next-line no-console
    console.log(newItem);
    $('.shopping-list').append(newItem);
  });
}

function check(){ 
  
}

addList();
//$(check()); 

console.log('pizza'); 