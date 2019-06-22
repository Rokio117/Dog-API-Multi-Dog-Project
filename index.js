let userNum = 3;

function getDogPhotos() {
  dogUrl = `https://dog.ceo/api/breeds/image/random/${userNum}`;
  fetch(dogUrl)
    .then(response => response.json())
    .then(function(responseJson) {
      displayDogs(responseJson);
    });
}

function handleSubmit() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('#dog-picture').empty()
    userNum = $('#dog-number').val();
    getDogPhotos();
  });
}

function displayDogs(response) {
  dogNum = 0;
  for (i = 0; i < userNum; i++) {
    $('#dog-picture').prepend(
      `<img src="${response.message[dogNum]}" class="dog-image"></img>`
    );
    dogNum++;
  }
}

$(handleSubmit);
