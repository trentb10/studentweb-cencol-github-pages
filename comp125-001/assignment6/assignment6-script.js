// Global Vars

let galleryPosition = 1;
let timer;

// Elements

let imageSpace = $(".galleryImg");
let nextArrow = $(".galleryNext");
let previousArrow = $(".galleryPrevious");

// Event Listeners

window.addEventListener("load", function() {
    main();
});

nextArrow.click(function(){
    imageSpace.fadeOut(nextImage);
});
previousArrow.click(function(){
    imageSpace.fadeOut(previousImage);
});

// Functions

function main() {
    TMSignOn();
    showImage();
}

function showImage() {
    imageSpace.html('<img src = "images/IMG_0' + galleryPosition + '.jpg"></img>');
    resetTimer();
}

function nextImage() {
    if (galleryPosition < 5) {
        galleryPosition++;
    } else if (galleryPosition = 5) {
        galleryPosition = 1;
    }
    showImage();
    imageSpace.fadeIn();
}

function previousImage() {
    if (galleryPosition > 1) {
        galleryPosition--;
    } else if (galleryPosition = 1) {
        galleryPosition = 5;
    }
    showImage();
    imageSpace.fadeIn();
}

function startTimer() {
    timer = setTimeout(function() { imageSpace.fadeOut(nextImage); }, 5000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

function TMSignOn() {
	console.log("TMinus10 is signing on. (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧");
}