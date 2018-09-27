'use strict';

//console.log('pizza'); 


/*eslint-env jquery*/
function addList(){
  $('#js-shopping-list-form').submit(function(event) {
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
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){ 
    //console.log($(this).parent().parent());
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked'); 
  }); 
}

function deleteLI(){ 
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){ 
    $(event.currentTarget).closest('li').remove(); 
  }); 
}

addList();
check(); 
deleteLI(); 


console.log('pizza'); 