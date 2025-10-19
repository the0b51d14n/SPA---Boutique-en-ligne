const productSection = document.querySelector('.product-description');

if (productSection) {
    const priceElement = document.getElementById('price');
    const quantitySelect = document.getElementById('quantity');
    const unitPrice = parseFloat(productSection.dataset.price);

    quantitySelect.addEventListener('change', () => {
        const quantity = parseInt(quantitySelect.value) || 1;
        priceElement.textContent = (unitPrice * quantity).toFixed(2);
    });
}

const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumb');

if (mainImage && thumbnails.length) {
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImage.classList.add('fade');
            mainImage.addEventListener(
                'transitionend',
                function handler() {
                    mainImage.src = thumb.src.replace('-mini', '');
                    mainImage.classList.remove('fade');
                    mainImage.removeEventListener('transitionend', handler);
                }
            );
        });
    });
}