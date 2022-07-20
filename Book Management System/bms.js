document.querySelectorAll('.container img').forEach(image =>{
    image.onclick =() => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.src;
    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

$(document).ready( function () {
    $('#myTable').DataTable();
} );