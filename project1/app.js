const openface=document.querySelector('.open');
const closeface=document.querySelector('.close');

closeface.addEventListener('click',() => {
    if(openface.classList.contains('open')){
        openface.classList.add('active');
        closeface.classList.remove('active');
    }
})
openface.addEventListener('click',() => {
    if(closeface.classList.contains('close')){
        closeface.classList.add('active');
        openface.classList.remove('active');
    }
});

