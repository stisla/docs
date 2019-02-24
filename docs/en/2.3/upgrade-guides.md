# Upgrade Guides

---

- [Upgrade Guides](#upgrade-guides)

<a name="upgrade-guides"></a>

## Upgrade Guides

To upgrade version 2.0.0 to version 2.1.0, you need to copy some files, and make some changes to the code structure. The following are some of the changes:

## Added `components.css`
Since version 2.1.0, we separate between `style.css` and `components.css`. The `style.css` file is contains the Stisla core style and Bootstrap override. This is for reasons of flexibility.

The `components.css` file is contains all of Stisla components, such as users, statistics and so on. So, if you only want to use our core style, just put the `style.css` file before the `</head>` tag. And if you want to use our components, you must put the `components.css` file before the `</head>` tag too.

```html
<!DOCTYPE html>
<html lang="id>
    <head>
        ..
        ...
        <link href="dist/css/style.css" rel="stylesheet">
        <link href="dist/css/components.css" rel="stylesheet">
    </head>
    ...
    ..
    .
</html>
```

## Added `dist/img/unsplash`
After you download the Stisla update file, copy the `dist/img/unsplash` folder to your current project.

## Added New Components
As we mentioned above, we've added the `components.css` file, which means we also add the SCSS file. In addition, we added several new components, such as avatar, empty state, hero, pricing and wizard. So, copy all new source files to your current project. Here's the list:
```html
# SCSS Files
sources/scss/components.scss
sources/scss/components/_avatar.scss
sources/scss/components/_empty_state.scss
sources/scss/components/_hero.scss
sources/scss/components/_pricing.scss
sources/scss/components/_wizard.scss

# HTML Files
pages/components-avatar.html
pages/components-empty-state.html
pages/components-hero.html
pages/components-pricing.html
pages/components-wizard.html
```

## Updated Font Awesome
Lastly, we've updated the third-party library, Font Awesome. We updated Font Awesome to version 5.5.0. So, just delete the font awesome folder currently on your project and copy the Font Awesome folder from the Stisla update folder (`dist/modules/fontawesome`).
