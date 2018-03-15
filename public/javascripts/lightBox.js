class LightBox {
    constructor(images) {
        this.images = images;
    }

    render(index) {
        let element = document.getElementById('main') // get main element
        let lightBox = document.createElement('div')  // create lightbox
        lightBox.setAttribute('id', 'lightbox');
        
        let img = document.createElement('img'); /// create img
        img.src = this.images[index % this.images.length].link

        let section = document.createElement('section') // create img container
        section.appendChild(img)
        
        // create element for icon
        let left = '<i class="fas fa-angle-left"></i>';
        let right = '<i class="fas fa-angle-right"></i>';
        let p = document.createElement('p');
        let x = document.createElement('p');
        p.innerHTML = left;
        lightBox.appendChild(p)
        lightBox.appendChild(section)
        x.innerHTML = right;
        lightBox.appendChild(x)
        element.appendChild(lightBox);

        
    }


}

module.exports = LightBox;