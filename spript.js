const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
    navDialog.classList.toggle('hidden');
}

for( var i = 0; i < 6; i++){
    document.querySelectorAll('#nav-links')[i].addEventListener('click', function() {
        navDialog.classList.toggle('hidden');
    })
}