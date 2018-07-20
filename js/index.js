// Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/img-1.jpg",
           "./img/img-2.jpg",
           "./img/img-3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    var buttons = document.querySelectorAll('.btn');
    /* 
    Complete your resource-object that will store the dynamic content. Resource object should 3 sub-objects. Give your sub-objects meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    var resources = {
        firstTip: {   
            headingContent: "<i class='fas fa-recycle'></i>", 
            textTitle: "Tip 1",
            bodyText: "Reduce, Re-Use and Recycle. While it is seems a bit redundant it is one of the impactful ways to help the evironment and save a few pennies. Find another use for a grocery shop bag, return bottles for change or even use containers a few times to transport. A little goes a long way.", 
            imgUrl: "./img/recycle-1.jpg",
            imgAlt: "cloth grocery bag"
        },
        secondTip: {   
            headingContent: "<i class='fas fa-leaf'></i>",
            textTitle: "Tip 2",
            bodyText: "Buy local or harvest in your own! A great activity for kids in the summer is to plant and nurture a garden. Keeps them active and sets-up a household to harvest produce straight out of your own backyard.", 
            imgUrl: "./img/basil.jpg",
            imgAlt: "Basil plant"
        },
        thirdTip: {   
            headingContent: "<i class='fas fa-lightbulb'></i>",
            textTitle: "Tip 3",
            bodyText: "Swap out your lightbulbs! Save on hydro by swapping out regular lightbulbs for LEDs.", 
            imgUrl: "./img/bulb.jpg",
            imgAlt: "Field of wind turbines"
        },
        
    }
    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    var content = document.getElementById('content');
    var img = document.getElementById('img');
    /* 
    The first button in a NODE LIST of buttons will initially have the id: active-button - this will uniquely style the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 
    Start your handleSelection function here. */ 
content.innerHTML = `<div class="title">
          ${resources.firstTip.headingContent}
          <h3>${resources.firstTip.textTitle}</h3>
          <p>${resources.firstTip.bodyText}</p>`; 
img.innerHTML = `<img class="img-fluid" src="${resources.firstTip.imgUrl}" alt="${resources.firstTip.imgAlt}">`;

function handleSelection(e) {
    for(var a of buttons){
        if(a.hasAttribute('id')===true){
            a.removeAttribute('id');
        }
    } 
    e.target.setAttribute('id','active-btn');
    
    if(e.target.textContent=="Tip 1"){
        content.innerHTML = 
          `<div class='title'>
            ${resources.firstTip.headingContent}
          </div>
          <h3>${resources.firstTip.textTitle}</h3>
          <p>${resources.firstTip.bodyText}</p>`; 
        img.innerHTML =
            `<img class="img-fluid" src="${resources.firstTip.imgUrl}" alt="${resources.firstTip.imgAlt}">`;
    }
    if(e.target.textContent=="Tip 2"){
        content.innerHTML = 
          `<div class='title'>
            ${resources.secondTip.headingContent}
          </div>
          <h3>${resources.secondTip.textTitle}</h3>
          <p>${resources.secondTip.bodyText}</p>`; 
        img.innerHTML =
            `<img class="img-fluid" src="${resources.secondTip.imgUrl}" alt="${resources.secondTip.imgAlt}">`;
    }
        if(e.target.textContent=="Tip 3"){
        content.innerHTML = 
          `<div class='title'>
            ${resources.thirdTip.headingContent}
          </div>
          <h3>${resources.thirdTip.textTitle}</h3>
          <p>${resources.thirdTip.bodyText}</p>`; 
        img.innerHTML =
            `<img class="img-fluid" src="${resources.thirdTip.imgUrl}" alt="${resources.thirdTip.imgAlt}">`;
    }
}

for(var a of buttons){
    a.addEventListener("click", handleSelection);
}
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
    
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
    
    /* 
    Close your handleSelection function here. */  
    
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 