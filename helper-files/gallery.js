// import tcl1 from '../assets/img/gallery/pic1.jpg'
// import tcl2 from '../assets/img/gallery/pic2.jpg'
// import tcl3 from '../assets/img/gallery/pic3.jpg'

// these are dummy pictures. Feel free to replace them
const pictures = ["/assets/img/gallery/pic1.jpg", "/assets/img/gallery/pic2.jpg", "/assets/img/gallery/pic3.jpg",]

const exportedPictures = [];


for (let i = (pictures.length - 1); i >= 0; i--) {
    exportedPictures.push(pictures[i])
}

export default exportedPictures