const LightBox = require('./lightBox.js')

class ImageIndex {
    constructor(images) {
        this.images = images;
        this.lightBox = new LightBox(this.images);
    }
    
    // create the index and render it on DOM
    render() {
        // get main element
        let element = document.getElementById('main')
        let parent = document.createElement('div')
        parent.setAttribute('id', 'image-index');
        // create image elements
        this.images.forEach((item, idx) => {
            let img = document.createElement('img')
            let section = document.createElement('section')
            img.src = `${item.link}`
            img.dataset.indexNumber = idx;
            section.appendChild(img)
            parent.appendChild(section)
        })
        // render to DOM
        element.appendChild(parent)
        parent.addEventListener('click', (event) => this.renderLightBox(event))
    }
    
    // render the light box
    renderLightBox(event) {
        this.lightBox.render(event.target.dataset.indexNumber);
    }
}

module.exports = ImageIndex;