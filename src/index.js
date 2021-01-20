console.log('%c HI', 'color: firebrick')

function fetchImg() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImg(json));
}

function renderImg(images) {
  
  console.log("images", images)
  
  const contain = document.querySelector('dog-image-container');
  console.log(contain)
  const newImage = document.createElement('img');
  images.message.forEach(element => 
  
  
  newImage.src = element)
  //newImage.innerHTML = `<img src="${element}">`
  contain.appendChild(newImage);
 console.log(element)
}



document.addEventListener('DOMContentLoaded', function() {
  fetchImg()
})
