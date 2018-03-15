class LightBox {
    constructor(images) {
        this.images = images
        this.currentImageIndex
    }

    render(index) {
        this.currentImageIndex = index;
        let element = document.getElementById('main') // get main element

        let lightBox = document.createElement('div')  
        lightBox.setAttribute('id', 'lightbox')     // create lightbox
        
        let img = document.createElement('img')
        img.src = this.images[index % this.images.length].link   // create img

        let section = document.createElement('section') // create img container
        section.appendChild(img)
        
        let leftIconElement = this.createIconElement('left')
        let rightIconElement = this.createIconElement('right') // create elements for icon

        leftIconElement.addEventListener('click', (e) => this.leftClick(e))
        rightIconElement.addEventListener('click', (e) => this.rightClick(e)) // add right and left click listeners

        lightBox.appendChild(leftIconElement)
        lightBox.appendChild(section)
        lightBox.appendChild(rightIconElement)

        lightBox.addEventListener('click', (e) => this.removeChild(e))
        element.appendChild(lightBox);
    }

    createIconElement(str){
        let iconElement = document.createElement('p')
        iconElement.innerHTML = `<i class="fas fa-angle-${str}"></i>`
        return iconElement
    }

    leftClick(event) {
        this.removeChild(event);
        this.render(parseInt(this.currentImageIndex) + this.images.length - 1)
    }

    removeChild(e) {
        let element = document.getElementById('lightbox')
        element.parentElement.removeChild(element)

        // stop event from bubbling when arrows are clicked
        if (!e) { let e = window.event }
        e.cancelBubble = true
        if (e.stopPropagation) { e.stopPropagation() }
    }

    rightClick(event) {
        this.removeChild(event);
        this.render(parseInt(this.currentImageIndex) + 1)
    }
}

module.exports = LightBox;