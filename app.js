let item = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumnail = document.querySelectorAll('.thumnail .item');

// config param
let countItem = item.length;
let itemActive = 0
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// // refresh uptodate
let refreshUpToDate = setInterval(() => {
    next.click();
},3000)

// event prev click
prev.onclick = function(){
    itemActive = itemActive-1;
    if(itemActive < 0){
        itemActive = countItem-1;
    }
    showSlider();
}
function showSlider(){
    //menghapus item active lama
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumnailActiveOld = document.querySelector('.thumnail .item.active');
    itemActiveOld.classList.remove('active');
    thumnailActiveOld.classList.remove('active');

    item[itemActive].classList.add('active');
    thumnail[itemActive].classList.add('active');
}

// click tumnail
thumnail.forEach((thumnail,index) => {
    thumnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})