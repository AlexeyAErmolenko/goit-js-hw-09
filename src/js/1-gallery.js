import SimpleLightbox from 'simplelightbox';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';
import { images } from './arrayImages.js';

const arrayImages = images.reduce((html, image) => {
  return (html += `<li class="gallery-item">
                      <a class="gallery-link" href="${image.original}">
                        <img
                          class="gallery-image"
                            src="${image.preview}"                            
                            alt="${image.description}"
                        />
                      </a>
                    </li>`);
}, '');

const areaGallery = document.querySelector('.gallery');
areaGallery.insertAdjacentHTML('beforeend', arrayImages);

const lightbox = new SimpleLightbox('.gallery a', {
  overlay: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// const colorOverlay = lightbox.elements('.sl-overlay');
// console.dir(lightbox.);

// console.log(lightbox.getAttribute('alt')); // "Rocks and waterfall"
// image.setAttribute('alt', 'Amazing nature');
