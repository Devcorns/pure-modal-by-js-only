var getModal = document.querySelectorAll('[data-target]');

if(getModal.length) {
    getModal.forEach( function( data ) {
        data.addEventListener("click", function(e) {
            e.preventDefault();
            let modalId = e.target.getAttribute("data-target");
            let getModalBox = document.getElementById(modalId);
            console.log(modalId)
            getModalBox.classList.toggle("d-none");
            getModalBox.addEventListener("click", function(e) {
                if( e.target.id == modalId ) {
                    e.target.classList.add("d-none");
                }
            });
        });
    });
}

let closeIcon = document.querySelectorAll("[data-target='close-modal']");
closeIcon.forEach( elm => {
    elm.addEventListener("click", function(e) {
        e.target.closest(".modal").classList.add('d-none');
    });
});

window.resize = function(e) {
 this.alert();
}