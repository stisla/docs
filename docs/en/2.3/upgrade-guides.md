# Upgrade Guides

---

- [Upgrade Guides](#upgrade-guides)

<a name="upgrade-guides"></a>

## Upgrade Guides

To upgrade version 2.2 to version 2.3, you need to copy some files, and make some changes to the code structure. The following are some of the changes:

## Welcome Yarn
Since version 2.3, we use Yarn for the package manager. Therefore, you need to install Yarn inside your machine. Yarn will easier for you to manage third-party libraries. You can see all the third-party libraries we use in the `package.json` file. Get started with [Yarn](https://yarnpkg.com/en/docs/getting-started). After installing Yarn on your machine, run the following command:

```bash
yarn stisla-start
```

## Welcome Gulp
Besides Yarn, we also added Gulp to make it easier in the development phase. You can [learn Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) on the official site, we add the following commands:

```bash
# Creating directories
gulp folder

# Minify images
gulp image

# Compiling SCSS
gulp scss

# Compiling Nunjucks
gulp html

# Compiling all for distribution
gulp dist

# Start development
yarn dev # or `gulp`
```

## Welcome Nunjucks
Since version 2.3, we started using template engine to make it easy to develop. All HTML files in the `pages/` folder are compiled from the template engine we use. We use [Nunjucks](https://github.com/mozilla/nunjucks) as a template engine, because the syntax is readable and easy to learn.

<div class="alert alert-danger">
	Beware! If you recompile the template engine, you will lose all the changes you have made to all files in the <code>pages/</code> folder
</div>

## Restructuring Directories
In version 2.2, we have only 2 directories, `dist` and `sources`. For version 2.3, we changed the directory structure to make it easier for development. 

```html
- assets
  - css
  - js
  - img
  - fonts
- pages
- sources
  - ai
  - scss
  - pages
```
The above is a new directory structure. All source codes such as `scss`, `nunjucks` etc. are placed in the `sources` folder. Meanwhile, outside it is a folder for distribution.

## All Common Dependencies Use CDN
All common dependencies, such as Bootstrap, Font Awesome, jQuery, Popper, NiceScroll, Moment.js and Google Fonts are using CDN. With this, you can save space and be faster.

```html
  <!-- General CSS Files -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

  <!-- General JS Scripts -->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
```

Even so, you can make it locally, we have added it to the `package.json` file.

## All Images in CSS are Converted to Base64
All images needed in CSS, we convert to Base64 code, this will resolve the `path` problem (especially on Rails).

## Added Several Variables
In version 2.3, we added several new variables, including:

```scss
$colors: (
  ...
  // Form Control
  formcontrol_normal_background:    #fdfdff,
  formcontrol_normal_border:        #e4e6fc,
  formcontrol_focus_background:     #fefeff,
  formcontrol_focus_border:         #95a0f4,

  // Utilities
  section_title_line: #6777ef
);

$font_family:   'Nunito', 'Segoe UI', arial;
$font_weight:   400;
$font_size:     14px;
```