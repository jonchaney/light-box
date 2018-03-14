class ImageIndex {
    constructor(images) {
        this.images = images;
    }
    
    // create the index and render it on DOM
    render() {
        // get main element
        let element = document.getElementById('main')
        // render each element to the DOM
        this.images.forEach((item) => {
            let img = document.createElement('img')
            let div = document.createElement('div')
            img.src = `${item.link}`
            div.appendChild(img)
            element.appendChild(div)
        })
        element.addEventListener('click', (event) => lightBox(event))
    }

    lightBox() {
        console.log(event.target.src);
    }
}

module.exports = ImageIndex;