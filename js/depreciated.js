var disqus_shortname = 'nickclarkson';

var s = document.createElement('script'); s.async = true;
s.src = '//' + disqus_shortname + '.disqus.com/count.js';
(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);


if($('#disqus_thread').length > 0){
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
}

////////

$('.dismissable').each(function(){
  var $this = $(this),
      id = $this.attr('id'),
      $close = $this.find('.close').on('click', function(){
        $.cookie(id, true);
        $('body').toggleClass('show-dismissable');
      });
  if(!$.cookie(id)){
    $('body').toggleClass('show-dismissable');
  }
});


////////


var paginator = function($el){
  var $lis = $el.children('li'),
      lisPerPage = 3,
      cursor = 0,
      totalPages = Math.ceil( $lis.length / lisPerPage ),
      turn = function(i){
        if(i < totalPages && i > -1){
          cursor = i;
          var start = cursor*lisPerPage,
              end = start+lisPerPage;
          $lis.hide().slice(start,end).show();
          $pagination.removeClass('active').eq(cursor+1).addClass('active');
        }
      };

      // console.log(lisPerPage < $lis.length);

  if(lisPerPage < $lis.length){

    var tmp = _.template($('#paginator').html());

    var $pagination = $(tmp({
      pages: totalPages,
      cursor: cursor
    })).insertAfter($el).find('li').on('click', function(e){
      e.preventDefault();
      var $this = $(this),
          i = $this.index()-1;
      if($this.is(':first-child')){
        i = cursor-1;
      } else if($this.is(':last-child')){
        i = cursor+1;
      }
      turn(i);
    });
    turn(cursor);
  }
}

////////

$(".paginate").each(function(){
  new paginator($(this));
});



var $window = $(window),
    md = function(){
      return $window.width() > 768;
    }
