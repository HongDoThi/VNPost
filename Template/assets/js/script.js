var iconBar = document.querySelector('.heading i');
var sideBar = document.querySelector('.content__col:nth-child(1)');
var iconMinus = document.querySelector('i.fa.fa-minus');
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

sidebarCollapse_two.addEventListener('click', () => {

    collapseSub_one.classList.toggle('show');
    iconPlus.classList.toggle('fa-minus');

})

sidebarCollapse_three.addEventListener('click', () => {
    collapseSub_two.classList.toggle('hidden');
    iconMinus.classList.toggle('fa-plus');

})