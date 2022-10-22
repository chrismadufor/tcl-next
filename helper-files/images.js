import clients from '../assets/img/clients.jpg'
import services from '../assets/img/services.jpg'
import companyBg from '../assets/img/company-bg.jpg'
import resources from '../assets/img/resources.jpg'
import itOffer from '../assets/img/it-offer.jpg'
import itSupport from '../assets/img/it-support.jpg'
import cyberOffer from '../assets/img/cyber-offer.jpg'
import cyberServices from '../assets/img/cyber-services.jpg'
import cloudServices from '../assets/img/cloud-services.jpg'
import cloudOffer from '../assets/img/cloud-offer.jpg'
import contactBg from '../assets/img/contact-bg.jpg'
import valuesBg from '../assets/img/values-bg.jpg'

const pictures = [clients, services, companyBg, resources, itOffer, itSupport, cyberOffer, cyberServices, cloudServices, cloudOffer, contactBg, valuesBg,]

const exportedPictures = [];


for (let i = (pictures.length - 1); i >= 0; i--) {
    exportedPictures.push(pictures[i])
}

export default exportedPictures