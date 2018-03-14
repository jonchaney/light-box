class ImageIndex {
    constructor(images) {
        this.images = images;
    }
    
    // create the index and render it on DOM
    render() {
        // get main element
        let element = document.getElementById('main')
        let parent = document.createElement('div')
        parent.setAttribute('id', 'image-index');
        // render each element to the DOM
        this.images.forEach((item) => {
            let img = document.createElement('img')
            let div = document.createElement('section')
            img.src = `${item.link}`
            div.appendChild(img)
            parent.appendChild(div)
        })
        element.appendChild(parent)
        element.addEventListener('click', (event) => lightBox(event))
    }

    lightBox() {
        console.log(event.target.src);
    }
}

module.exports = ImageIndex;