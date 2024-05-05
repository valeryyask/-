  fetch('./xml/cards.xml').then(response => {
    return response.text()
  }).then( xmlString => {
    const xmlDocument = new DOMParser().parseFromString(xmlString, 'text/xml')
    const cards = xmlDocument.querySelectorAll('card')

    for(const card of cards){
      const flowersCost = card.querySelector('cost').textContent
      const flowersImage = card.querySelector('image').textContent
      const flowersDescription = card.querySelector('description').textContent
  
      let divContent = document.createElement('div')
          divContent
          divContent.setAttribute('class', 'main_content')
      
      let a = document.createElement('a')
          a
          a.setAttribute('href', './delivery.html')

      let photoWrapper = document.createElement('div')
          photoWrapper
          photoWrapper.setAttribute('class', 'photo_wrapper')

      let photo = document.createElement('img')
          photo
          photo.setAttribute('class', 'photo')
          photo.setAttribute('src', flowersImage)

      let photoInfo = document.createElement('div')
          photoInfo
          photoInfo.setAttribute('class', 'photo_info')
          
      let spanDescription = document.createElement('span')
          spanDescription
          spanDescription.setAttribute('class', 'photo_description')
          spanDescription.innerHTML = flowersDescription
      
      let spanCost = document.createElement('span')
          spanCost
          spanCost.setAttribute('class', 'photo_cost')
          spanCost.innerHTML = flowersCost

      let galleryCards = document.querySelector('.main_flex_container')
      let setCard = galleryCards.appendChild(divContent)
          
      setCard.appendChild(a).appendChild(photoWrapper).appendChild(photo)
      setCard.appendChild(a).appendChild(photoInfo).appendChild(spanDescription)
      setCard.appendChild(a).appendChild(photoInfo).appendChild(spanCost)      
    }
  })