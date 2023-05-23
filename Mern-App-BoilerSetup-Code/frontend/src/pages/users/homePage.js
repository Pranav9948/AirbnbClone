window.onload = function() {
    
    // Making  API call here

    const feedDisplay = document.querySelector('#feed');
  
    fetch('http://localhost:5500/api/rooms/getDetails')
      .then(response => response.json())
      .then(data => {
        console.log('123', data);


        const cards = data?.rooms?.map(room =>
            
            `
    
          <div class="card">
            <img src="${room.image}" alt="Card Image" class="card-image">
            <div class="card-content">
              <h3 class="card-title">${room.place}</h3>
              <p class="card-field"><strong>Name:</strong> ${room.name}</p>
              <p class="card-field"><strong>Place:</strong> ${room.place}</p>
              <p class="card-field"><strong>From Date:</strong> ${room.fromDate} <strong>To Date:</strong> ${room.toDate}</p>
              <p class="card-field"><strong>from Time:</strong> ${room.fromTime.substring(0,4)} <strong>To Date:</strong> ${room.toTime.substring(0,4)}</p>
              <a href="http://localhost:3000/booking/${room._id}">
              <button class='roomButton'>view Details</button> </a>
            
            
              </div>
          </div>
        `);
  
        if (feedDisplay) {
          feedDisplay.innerHTML += cards.join('');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  