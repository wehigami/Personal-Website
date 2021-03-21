document.addEventListener('mousemove', parallax);
        function parallax(e){
            this.querySelectorAll('.bgVid').forEach(fg => {
                let speed = fg.getAttribute('data-speed')
                let x = (window.innerWidth - e.pageX * speed)/100
                let y = (window.innerWidth - e.pageY * speed)/100
                fg.style.transform = `translateX(${x}px)
                translateY(${y}px)`
            })
        }