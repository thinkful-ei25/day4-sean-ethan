'use strict';


function addList(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let newInfo = $('input').val();
    console.log(newInfo);
    let newItem = `<li>
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
    console.log(newItem);
    $('.shopping-list').append(newItem);
  });
}

addList();