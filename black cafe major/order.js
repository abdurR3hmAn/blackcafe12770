let total = 0;

function addToOrder(item, price) {
  total += price;
  
  let orderList = document.getElementById('orderList');
  let listItem = document.createElement('li');
  listItem.textContent = item + ' - $' + price;
  orderList.appendChild(listItem);
  
  let totalElement = document.getElementById('total');
  totalElement.textContent = '$' + total;
}
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
    
}
