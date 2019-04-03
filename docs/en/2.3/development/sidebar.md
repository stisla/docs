# Sidebar

---

- [Sidebar](#sidebar)

<a name="sidebar"></a>

## Sidebar
As we mentioned before, we have provided layouts with sidebar and header. In this section you will gain more knowledge about the sidebar.

Sidebar in this template is written as follows.
```html
<!-- Sidebar outter -->
  <div class="main-sidebar"> 
    <!-- sidebar wrapper -->
    <aside id="sidebar-wrapper">
      <!-- sidebar brand -->
      <div class="sidebar-brand">
        <a href="index.html">Stisla</a>
      </div>
      <!-- sidebar menu -->
      <ul class="sidebar-menu">
        <!-- menu header -->
        <li class="menu-header">Dashboard</li>
        <!-- menu item -->
        <li class="active">
          <a href="index.html"><i class="fas fa-fire"></i><span>Dashboard</span></a>
        </li>
      </ul>
    </aside>
  </div>
```

And to create the sidebar toggle, use the following code.

```html
<li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></a></li>
```

You can also hide the sidebar by adding the sidebar-gone class in the `<body>` tag.

```html
<body class="sidebar-gone">
```

### Sidebar Mini

You would of provider a mini sidebar? Add an class `sidebar-mini` on `body` tag.


```html
<body class="sidebar-mini">
```

Open the assets/js/scripts.js file and search function: `toggle_sidebar_mini` will be inside `toggleLayout` change param for true:

```javascript
toggle_sidebar_mini(true)
```
Now, add these 02 functions after:

$("body").removeClass("sidebar-mini");
$("body").addClass("sidebar-gone");

Look:

```javascript
if($('body').hasClass('sidebar-mini')) {
  toggle_sidebar_mini(true);
  $("body").removeClass("sidebar-mini");
  $("body").addClass("sidebar-gone");

  $('.main-sidebar').niceScroll(sidebar_nicescroll_opts);
  sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
  }
 ```
 
 Soon after the **if** you finish you will see a code like this:
 
 ```javascript
 $("body").addClass("sidebar-gone");
  ```
  
 Change to:
 
 ```javascript
 $("body").addClass("sidebar-mini");
 ```
  
Search and comment this line... 
  ```javascript 
  $("body").removeClass("layout-2 layout-3 sidebar-mini sidebar-show");
  ``` 
