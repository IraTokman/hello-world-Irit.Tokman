function toggle(e) {
    var element = e.target.nextElementSibling || e.target.parentElement.nextElementSibling;
    console.log(element.style.display);
    if(element.style.display === 'block')
        element.style.display = 'none';
    else 
        element.style.display = 'block';
    console.log(element.style.display);
}