/**
 * Helpers
 */

function current_path() {
  let page = window.location.hash,
      start = page.slice(0,2);

  if(start != '#/') {
    return '#/' + page.slice(1, page.length);
  }

  return page;
}

let sidebarInit = false;
function sidebarFunc() {
  $(".main-sidebar aside ul li a").each(function() {
    $(this).attr('href', '#' + $(this).attr('href'));
  });

  $(".main-sidebar aside ul li a[href^='" + current_path() + "']").addClass("active");

  if($('.main-sidebar aside ul li a.active').length) {    
    setTimeout(function() {
      $(".main-sidebar").animate(
        $(".main-sidebar aside ul li a.active").closest('ul').closest('li').offset().top - 80
      );
    }, 500);
  }

  let sidebar_over = false;
  $(window).scroll(function() {
    if($(this).scrollTop() > 10 && !sidebar_over) {
      $(".main-sidebar").addClass('main-sidebar-top');
      sidebar_over = true;
    }
    
    if($(this).scrollTop() < 10 && sidebar_over) {
      $(".main-sidebar").removeClass('main-sidebar-top');
      sidebar_over = false;
    }
  });

  sidebarInit = true;
}

function sectionFunc() {
  $('.section-body table:not(.table)').addClass('table table-striped table-hover table-md');

  let next_obj = $(".main-sidebar ul li a.active").parent().next().find('a');

  if(!next_obj.length) {
    next_obj = $(".main-sidebar aside ul li a.active").closest("ul").closest("li").next().find("li a:eq(0)");
  }

  let next_text = "Skip to " + next_obj.text() + " <i class=\"fas fa-chevron-right\"></i>",
      next_href = next_obj.attr('href');

  if(!next_obj.length) {
    next_text = 'Back to Overview <i class=\"fas fa-fire\"></i>';
    next_href = overview;
  }

  $(".section-body h1")
    .wrap($('<div/>', { class: 'section-header' }))
    .after("<div class=\"ml-auto\"><a href=\"" + next_href + "\" class=\"btn btn-white btn-icon icon-right btn-lg\">" + next_text + "</a></div>");

    
  if(next_obj.length) {
    next_text = "Next: " + next_obj.text() + " <i class=\"fas fa-chevron-right\"></i>";
    $(".section-body").append($('<hr>', { class: 'mt-5 mb-5' }));
    $(".section-body").append($('<div/>', {
      class: 'd-flex justify-content-lg-end'
    }).append("<a href=\"" + next_href + "\" class=\"btn btn-white btn-icon icon-right btn-lg\">" + next_text + "</a>"));
  }

  $(".table").each(function() {
    $(this).wrap($("<div>", {
      class: 'table-responsive'
    }));
  });

  Prism.highlightAll();
}

function demoScript() {
  $('#toggle-modal').fireModal({
    title: 'My Modal',
    body: 'Hello!'
  });
  $('#toggle-modal-1').fireModal({
    title: 'My Modal',
    body: 'Hello, dude!',
    buttons: [
      {
        text: 'Close',
        class: 'btn btn-secondary',
        handler: function(current_modal) {
        $.destroyModal(current_modal);
        }
      }
    ]
  });

  $.chatCtrl('#mychatbox', {
    text: 'Halo',
    picture: base_url + 'dist/img/avatar/avatar-1.png'
  });

  $("#chat-form").submit(function() {
    var me = $(this),
        this_text = me.find('input').val(),
        this_picture = base_url + 'dist/img/avatar/avatar-1.png';

    me.find('input').val('');
    $.chatCtrl("#mychatbox-1", {
      text: this_text,
      picture: this_picture
    });
    return false;
  });
}

function errorTpl(type) {
  if(type == 404) {
    return '\
    <div class="text-center">\
      <img class="img-fluid" src="assets/img/drawkit-nature-man-colour.svg" width="400">\
      <h1>Whoops. Page couldn\'t be found.</h1>\
      <p class="lead text-muted">Sorry, we were unable to find the page you were looking for. Make sure the path isn\'t wrong and try again.</p>\
      <div class="mt-5">\
        <a class="btn btn-primary btn-lg" href="#/">Back to Home</a>\
      </div>\
    </div>\
    ';
  }
}

function skelContent() {
  $('.main-content .section-body').html('\
    <div class="skeload-group pt-4">\
      <div class="skeload" style="width:250px;height:40px;"></div>\
      <div class="skeload mt-5 mb-5" style="height:4px;"></div>\
      <div class="skeload" style="width:150px;height:20px;"></div>\
      <div class="skeload mt-4" style="height:10px;"></div>\
      <div class="skeload mt-4" style="height:10px;"></div>\
      <div class="skeload mt-4" style="height:10px;"></div>\
      <div class="skeload mt-4" style="width:400px;height:10px;"></div>\
      <div class="skeload mt-5" style="width:150px;height:20px;"></div>\
      <div class="skeload mt-4" style="height:10px;"></div>\
      <div class="skeload mt-4" style="height:10px;"></div>\
      <div class="skeload mt-4" style="height:10px;"></div>\
      <div class="skeload mt-4" style="width:400px;height:10px;"></div>\
    </div>\
  ');
}

function skelSidebar() {
  $('.main-sidebar .sidebar-brand').after('\
    <div class="skeload-group pt-5 pl-5 pr-5">\
      <div class="skeload" style="width:60px;height:10px;"></div>\
      <div class="skeload"></div>\
      <div class="skeload"></div>\
      <div class="skeload"></div>\
      <div class="skeload"></div>\
    </div>\
    <div class="skeload-group pt-5 pl-5 pr-5">\
      <div class="skeload" style="width:60px;height:10px;"></div>\
      <div class="skeload"></div>\
      <div class="skeload"></div>\
      <div class="skeload"></div>\
      <div class="skeload"></div>\
    </div>\
    <div class="skeload-group pt-5 pl-5 pr-5">\
      <div class="skeload" style="width:60px;height:10px;"></div>\
      <div class="skeload"></div>\
      <div class="skeload"></div>\
      <div class="skeload"></div>\
      <div class="skeload"></div>\
    </div>\
  ');
}

function req(path) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: path,
      beforeSend: function() {

      },
      success: function(data) {
        resolve(data);
      },
      error: function(error) {
        reject(error);
      }
    })
  });
}

function scripts(arr) {
  arr.forEach((item) => {
    var el = $('<script/>', {
      src: item
    });

    $(document).find(el).remove();
    console.log($('html', el));
   
    $("#page-js").before(el);
  });
}

/**
 * Routing
 */

var root = null;
var useHash = true; // Defaults to: false
var hash = '#'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on(() => {
    router.navigate('/en/2.2.0/overview');
  })
  .on(/([a-zA-Z]+)\/([a-zA-Z0-9.]+)\/([a-zA-Z0-9\-/]+)\/?/, (lang, version, page) => {
    let base_path = 'docs/' + lang + '/' + version;

    /**
     * Sidebar
     */
    
    if(!sidebarInit) {
      skelSidebar();

      req(base_path + '/sidebar.md')
      .then((data) => {
        let html = marked(data);

        $('.main-sidebar .skeload-group').remove();
        $('.main-sidebar .sidebar-brand').after($(html));

        sidebarFunc();
      });
    }
  
    $(".main-sidebar aside ul li a").removeClass("active");
    $(".main-sidebar aside ul li a[href^='" + current_path() + "']").addClass("active");

    /**
     * Content
     */
    
    skelContent();
    req(base_path + '/' + page + '.md')
    .then((data) => {
      let html = marked(data);

      $('.main-content .section-body').html(html);
      $('html,body').animate({
        scrollTop: 0
      });

      sectionFunc();
      demoScript();
    })
    .catch((error) => {
      let template = errorTpl(error.status)

      $('.main-content .section-body').html(template);
      scripts(load_scripts);
    });
  })
  .resolve();
