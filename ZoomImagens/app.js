const zoom = (zoomtype) => { 
    const images = document.querySelectorAll('.image')
    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        if (zoomtype == 'in') {
            if (image.classList.contains('image-50')) {
                image.classList.remove('image-50');
                image.classList.add('image-100');
            } else if (image.classList.contains('image-100')) {
                image.classList.remove('image-100');
                image.classList.add('image-150');
            }
        } else if (zoomtype == 'out') {
            if (image.classList.contains('image-150')) {
                image.classList.remove('image-150');
                image.classList.add('image-100');
            } else if (image.classList.contains('image-100')) {
                image.classList.remove('image-100');
                image.classList.add('image-50');
            }
        }
    }
};