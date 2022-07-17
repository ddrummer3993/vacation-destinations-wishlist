
//on submit button click: grab and store user inputs
const submitButton = document.querySelector('#submit_btn');
submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let destName = document.querySelector('#destination_name').value;
    let location = document.querySelector('#location').value;
    let photo = document.querySelector('#photo').value;
    let description = document.querySelector('#description').value;

    console.log(destName);
    console.log(location);
    console.log(photo);
    console.log(description);

    let card = document.createElement('div');
    card.classList.add('class');

    let bootstrapCard = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${photo}" class="img-fluid rounded-start" alt="destination image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${destName}</h5>
                        <h6 class="card-text">${location}</h6>
                        <p class="card-text">${description}</p>
                    </div>
                </div>
            </div>
        </div>`
    
    card.innerHTML = bootstrapCard;

    document.querySelector('#card_container').appendChild(card);


})