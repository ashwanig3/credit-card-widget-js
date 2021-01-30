var cardNo = document.getElementById('card-no');
var nameVal = document.getElementById('name-val');
var validUpto = document.getElementById('valid-upto');
// var name = document.getElementById('name');

card_number.addEventListener('keyup',function (e) {
    if (e.keyCode !== 8) {
      if (this.value.length === 4 || this.value.length === 9 || this.value.length === 14) {
        this.value = this.value += ' ';
      }
      cardNo.innerHTML = addTrailingNo(this.value, 19);
    }
  });

  function addTrailingNo(number, len) {
    const digit = new Array(len - String(number).length + 1).join('*');
    return number + digit;
  }

  valid_thru.addEventListener('keyup',function (e) {
    if (e.keyCode !== 8) {
      if (this.value.length === 2) {
        this.value = this.value += '/';
      }
      validUpto.innerHTML = addTrailingNo(this.value, 5);
    }
  });

  username.addEventListener('input', (e) => {
    var val = e.target.value;
      nameVal.innerHTML = val;
})



