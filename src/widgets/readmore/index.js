(function () {
    "use strict";
    function ReadMore() {
        this.readmore = document.querySelectorAll('.e-readmore');
        this.readmoreBtn = document.querySelectorAll('.e-readmore__btn');
        this.readmoreOpenClass = 'e-readmore--open';
    }

    ReadMore.prototype.toggleState = function () {
        var readmoreOpenClass = this.readmoreOpenClass
        for (var i = 0; this.readmoreBtn.length > i; i++) {
            this.readmoreBtn[i].addEventListener('click', function (e) {
                e.stopPropagation();
                var currentReadmoreId = e.currentTarget.getAttribute('data-readmore'),
                    currentReadmore = document.getElementById(currentReadmoreId);
                currentReadmore.classList.toggle(readmoreOpenClass);
            });
        }
    };
    ReadMore.prototype.initReadMore = function () {
        if(this.readmore.length > 0){
            this.toggleState();
        }
    };
    function init() {
        var readmore = new ReadMore();
        readmore.initReadMore();
    }
    init();
})();