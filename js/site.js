$(function() {
    var num_bgs = 8;
    var fade = 3000;
    var jump = randomIntRange(1, num_bgs);
    
    var bucket_url = 'https://s3-ap-southeast-1.amazonaws.com/vondich.com/';

    $.vegas('slideshow', {
      delay: 5000,
      backgrounds:[
        {src: bucket_url+'images/bw-1.jpg', fade: fade},
        {src: bucket_url+'images/bw-2.jpg', fade: fade},
        {src: bucket_url+'images/bw-3.jpg', fade: fade},
        {src: bucket_url+'images/bw-4.jpg', fade: fade},
        {src: bucket_url+'images/bw-5.jpg', fade: fade},
        {src: bucket_url+'images/bw-6.jpg', fade: fade},
        {src: bucket_url+'images/bw-7.jpg', fade: fade},
        {src: bucket_url+'images/bw-8.jpg', fade: fade}
      ]
    })('overlay', {
        src: bucket_url+'vegas/overlays/07.png'
    })('jump', jump);

    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function randomIntRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}