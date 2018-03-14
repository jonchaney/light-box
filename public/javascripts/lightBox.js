class LightBox {
    constructor(images) {
        this.images = images;
    }

    // create a light box modal and put it on DOM
    render() {
        // get main element
        let element = document.getElementById('main')
        // create modal
        let modal = document.createElement('div')
        modal.setAttribute('id', 'modal');
        modal.display - "none";
        // render each element to the DOM
        this.images.forEach((item) => {
            let img = document.createElement('img')
            let div = document.createElement('div')
            img.src = `${item.link}`
            div.appendChild(img)
            element.appendChild(div)
        })
        element.addEventListener('click', (event) => lightBox(event))

        const lightBox = (event) => {
            // change css class to render light box
            console.log(event.target.src)
        }
    }

    lightBox() {

    }
}

module.exports = LightBox;