var iconBar = document.querySelector('.heading i');
var sideBar = document.querySelector('.content__col:nth-child(1)');
var iconMinus = document.querySelector('i.fa.fa-minus');
var collapseSub = document.querySelector('.collapse-sub');
var sidebarCollapse = document.querySelector('.sidebar-position .dflex');
var contentCol = document.querySelector('.content__col:nth-child(3)');





iconBar.addEventListener('click', () => {
    sideBar.classList.toggle('open');
    contentCol.classList.toggle('small');
    collapseSub.classList.toggle('pd');




})
sidebarCollapse.addEventListener('click', () => {
    collapseSub.classList.toggle('hidden');


})