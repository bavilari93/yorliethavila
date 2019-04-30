$(()=>{
	// modal
    const openModalButton = document.querySelectorAll('.modal-open'); 
    const element = document.getElementById('scroll-top');


    openModalButton.forEach(button=>{
         const contentWrappper = document.querySelector('.content-wrapper');
         const modal = document.getElementById('work');
    const span = modal.querySelector('span');   
            
        button.addEventListener('click',()=>{
            element.style.display='-webkit-inline-box';
            modal.style.width = '100%';
            contentWrappper.style.display = 'none';
        })
        span.onclick = function() {

            element.style.display='none';
            modal.style.width = "0%";
            contentWrappper.style.display = 'flex';
        }
    })

     // scroll icon top on click 

    element.addEventListener('click',((event)=>{
        console.log('yaya')
        event.preventDefault();
        $("#work").animate({ scrollTop: 0 }, "slow");
        return false;
    }))

    // slider projetcs
    var elementCount = $('.slide').length,
          current      = 1,
          elemWidth    =280,
          move         = 0;
    $('.next').click(()=>{
        if(current<elementCount){ 
            $('.thumbs').toggleClass('move');
            move+= elemWidth;
            current++;
            $('.thumbs').css('transform','translateX(-'+move+'px)');
        }

    })
    $('.prev').click(()=>{
        console.log('click')
        if(current > 0){
            $('.thumbs').toggleClass('move');       
            move -= elemWidth;
            current--;
            $('.thumbs').css('transform','translateX(-'+move+'px)');
        }
    })

  // Listed for the scroll event and move the image with translate.
  $('.slider').on('scroll', function() {
    $('.thumbs').css('transform','translate3d(-' + (30-$(this).scrollLeft()/6) + 'px,0,0)');
  });


    



	// typing 

	    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };


    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
 })
// end jquery