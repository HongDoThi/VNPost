var iconBar = document.querySelector('.heading i');
var sideBar = document.querySelector('.content__col:nth-child(1)');
var iconMinus__first = document.getElementById('iconFirst');
var iconMinus__last = document.getElementById('iconLast');

var iconPlus = document.querySelector('i.fa.fa-plus');
var collapseSub = document.querySelectorAll('collapse-sub');
var collapseSub_two = document.getElementById('_two');
var collapseSub_one = document.getElementById('_one');
var sidebarCollapse_three = document.querySelector('.sidebar-position:nth-child(3) .dflex');
var sidebarCollapse_two = document.querySelector('.sidebar-position:nth-child(2) .dflex');
var contentCol = document.querySelector('.content__col:nth-child(3)');





iconBar.addEventListener('click', () => {
    sideBar.classList.toggle('open');
    contentCol.classList.toggle('small');
    collapseSub_one.classList.toggle('pd');
    collapseSub_two.classList.toggle('pd');
    // collapseSub_one.classList.toggle('show');


})

// sidebarCollapse_two.addEventListener('click', () => {

//     collapseSub_one.classList.toggle('hidden');
//     iconPlus.classList.toggle('fa-plus');

// })
sidebarCollapse_two.addEventListener('click', () => {
    iconMinus__first.classList.toggle('fa-plus');

})
sidebarCollapse_three.addEventListener('click', () => {
    iconMinus__last.classList.toggle('fa-plus');
})

$(document).ready(function() {
    $('.btn1').click(function() {
        $('#_one').slideToggle();
    })
})

$(document).ready(function() {
    $('.btn2').click(function() {
        $('#_two').slideToggle();
    })
})