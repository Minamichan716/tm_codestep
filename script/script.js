

// ローディング表示
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }


//   ふわっと表示させる
const animateFadein = (entries, obs) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.animate(
                {
                    opacity:[0,1],
                    filter:['bluer(.4rem)','buler(0)']
                },
                {
                    duration:2000,
                    easing:'ease',
                    fill:'forwards'
                }
            );
            obs.unobserve(entry.target)
        }
    });
};

const fadeinObserver = new IntersectionObserver(animateFadein);

const fadeElements = document.querySelectorAll('.scrollin');
fadeElements.forEach((fadeElements) => {
    fadeinObserver.observe(fadeElements);
})
