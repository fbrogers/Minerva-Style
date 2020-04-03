# Minerva-Style

A Roman-styled theme for Bootstrap 4 with custom structural classes.

## Full Examples

- [Image Header](https://ucf-sdes-it.github.io/Minerva-Style/index.htm) - For public, Marketing-style sites that need closer adherence to *ucf.edu*.
- [Slim Nav Light](https://ucf-sdes-it.github.io/Minerva-Style/slim-nav-light.htm) - For standalone public utility applications and/or the primary area of multi-area internal sites.
- [Slim Nav Dark](https://ucf-sdes-it.github.io/Minerva-Style/slim-nav-dark.htm) - For standalone internal applications and/or the secondary/admin/configuration area of multi-area internal sites.
- [Slim Nav Red](https://ucf-sdes-it.github.io/Minerva-Style/slim-nav-red.htm) - For standalone restricted applications and/or the AppDev-only area of multi-area internal sites.

## Snippets

### HTML Header

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{{Page Title}}} | {{{Site Title}}} | UCF</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.it.ucf.edu/minerva-v1.0.0/css/minerva.css" />
    <link rel="shortcut icon" href="https://cdn.it.ucf.edu/minerva-v1.0.0/images/favicon_black.png" />
    <link rel="apple-touch-icon" href="https://cdn.it.ucf.edu/minerva-v1.0.0/images/apple-touch-icon.png" />
</head>
```

### jQuery Include

Depending on the jQuery usage in your site, you may need to put this in the `<head>`.

```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
```

### JavaScript Includes

Place this code snippet as the **last** elements in the `<body>` tag.

```html
<!-- js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdn.it.ucf.edu/minerva-v1.0.0/js/minerva.js"></script>
```

### UCF Header Bar

#### Public-Facing Sites (Official Marketing Bar)

Add a placeholder for the UCF Header Bar beneath the screen reader skip link:

```html
<body>
    <a href="#content" class="sr-only sr-only-focusable">Skip to Main Content</a>
    <div id="ucfhb"></div>
```

Include the UCF Header Bar JS include under the footer (with the rest of the included JS):

```html
<script src="https://universityheader.ucf.edu/bar/js/university-header.js?use-1200-breakpoint=1" id="ucfhb-script"></script>
```

#### Internal Sites (Minerva Slimmed-Down Bar)

For use on internal-only visibility, typically paired with **Slim Nav Dark** and always **Slim Nav Red**. Add this as the first element inside the body tag (after the "jump to content" screen-reader snippet). Remember to **remove** the JS include for the UCF Header Bar if you are using this version.

```html
<body>
    <a href="#content" class="sr-only sr-only-focusable">Skip to Main Content</a>
```

Include the JS under the footer (with the rest of the included JS):

```html
<script src="https://cdn.it.ucf.edu/minerva-v1.0.0/js/internal-header.js"></script>
```

### Site Header and Navigation: Marketing Theme

#### Header Starter Kit

```html
<header class="site-header image">
    <div class="container">
        <div class="header-title-block">
            <span class="header-title">
                <a href="#">{{{Application Area Title}}}</a>
            </span>
        </div>
        <div class="clearfix"></div>
        <div class="header-subtitle-block">
            <span class="header-subtitle">
                <a href="#">{{{Subtitle, Usually Unit/College Name and Link}}}</a>
            </span>
        </div>
    </div>
</header>
```

#### Navigation Starter Kit

```html
<nav class="navbar navbar-expand-lg navbar-light site-nav">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.htm">Image Header</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="slim-nav-light.htm">Slim Nav Light</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="slim-nav-dark.htm">Slim Nav Dark</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="slim-nav-red.htm">Slim Nav Red</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline">
                <button class="btn btn-sm btn-outline-dark warning" type="button">Log Out</button>
            </form>
        </div>
    </div>
</nav>
```

### Site Header and Navigation: Slim Nav Theme(s)

(Replace `slim-nav-light` with `slim-nav-dark` or `slim-nav-red` and `navbar-light` with `navbar-dark` for desired effect.)

```html
<header>
    <nav class="navbar navbar-light navbar-expand-lg slim-nav slim-nav-light">
        <div class="container">
            <a class="navbar-brand" href="#">{{{Application Area Title}}}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main-nav">
                <ul class="navbar-nav ml-md-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.htm">Image Header</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="slim-nav-light.htm">Slim Nav Light</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="slim-nav-dark.htm">Slim Nav Dark</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="slim-nav-red.htm">Slim Nav Red</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-3">
                    <button class="btn btn-sm btn-warning" type="button">Log Out</button>
                </form>
            </div>
        </div>
    </nav>
</header>
```

### Site Footer

```html
<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-12">
                <p class="mb-0">
                    Designed, Developed and Supported by
                </p>
                <h2 class="h5 mb-3">
                    UCF IT App<span class="d-lg-inline d-md-none">lication</span> Development
                </h2>
                <p>
                    &copy; <a href="https://www.ucf.edu/">University of Central Florida</a> |
                    <b><a href="https://ucf.service-now.com/ucfit?id=sc_cat_item&amp;sys_id=ae7581c4dbb5a20096b0fb37bf961954" class="external">Report Issue</a></b>
                </p>
            </div>
            <div class="col-md-6 col-12 text-md-right text-sm-left">
                <h2 class="h5 mb-md-3 mb-sm-0">
                    {{{Application Title}}}
                </h2>
                <p>
                    Current Version: <b>{{{Semantic Version}}}-{{{Environment}}}</b><br>
                    Current User: <b>{{{Domain}}}\{{{Username}}}</b>
                </p>
            </div>
        </div>
    </div>
</footer>
```

### Site Content

Each view should have a single, unique-to-the-area page title represented as an H1 and displayed in the `<title>` tag along with the application area and `| UCF`.

```html
<h1>{{{Unique Page Title}}</h1>
<hr>
```
