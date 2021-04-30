function showModal() {
    document.querySelector('.modal-container').classList.add('modal-container--active');
}

function hideModal() {
    document.querySelector('.modal-container').classList.remove('modal-container--active');
    let imageUrl = document.querySelector('#product-url').value;
    document.querySelector('.image > img').src = imageUrl;
}



function newProduct() {

    let product = {
        name: document.querySelector('#name').value,
        ref: document.querySelector('#ref').value,
        price: parseFloat(document.querySelector('#price').value),
        quantity: parseFloat(document.querySelector('#quantity').value),
        imageUrl: document.querySelector('#product-url').value
    }
    console.log(product);
    const options = {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(product)
    }

    fetch('http://localhost:3000/api/new', options)
        .then(resp => console.log(resp.status));

    document.querySelector('#name').value = '';
    document.querySelector('#ref').value = '';
    document.querySelector('#price').value = '';
    document.querySelector('#quantity').value = '';
}