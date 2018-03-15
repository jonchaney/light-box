class LightBox {
    constructor(images) {
        this.images = images;
        this.currentImageIndex;
    }

    render(index) {
        console.log(index, 'passed in');
        console.log(this.currentImageIndex, 'current')
        this.currentImageIndex = index;
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
        p.addEventListener('click', (event) => this.leftClick(event))
        lightBox.appendChild(p)
        lightBox.appendChild(section)
        x.innerHTML = right;
        x.addEventListener('click', (event) => this.rightClick(event))
        lightBox.appendChild(x)
        element.appendChild(lightBox);
    }

    leftClick(event) {
        this.render(parseInt(this.currentImageIndex) + this.images.length - 1)
    }

    rightClick(event) {
        this.render(parseInt(this.currentImageIndex) + 1)
    }
}

module.exports = LightBox;