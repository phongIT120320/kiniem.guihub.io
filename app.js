const getEle = (id) => ( document.getElementById(id));

let nameEle = getEle('name');
let btnLogIn = getEle('logIn');
let labelEle = getEle('label');
let addressEle = getEle('address');
let footerEle = getEle('footer');

btnLogIn.onclick = () => {
      if(nameEle.value == '24112021' && addressEle.value == 'biển'){
         let btn = document.createElement('a');
         footer.appendChild(btn);
         btn.innerHTML = 'Món quà ở đây';
         btn.setAttribute('class',' link');
         btn.href='./tym.html'
         btnLogIn.style.display = 'none';
      }else{
            alert('Câu trả lời của em không chính xác!!huhu');
      }
}

let btnNext = document.querySelector('.link');
console.log(btnNext);



