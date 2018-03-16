<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="{{ asset('css/contact-form-7-css.css') }}">
  <link rel="stylesheet" href="{{ asset('css/sf7cf-style-css.css') }}">
  <link rel="stylesheet" href="{{ asset('css/bootstrap-css.min.css') }}">
  <link rel="stylesheet" href="{{ asset('css/slickCSS-css.css') }}">
  <link rel="stylesheet" href="{{ asset('css/slickThemeCSS-css.css') }}">
  <link rel="stylesheet" href="{{ asset('css/featherlightCSS-css.css') }}">
  <link rel="stylesheet" href="{{ asset('css/normalize.css') }}">
  <link rel="stylesheet" href="{{ asset('css/html5blank-css.min.css') }}">
  <script src="{{ asset('js/conditionizr.min.js') }}" type="text/javascript"></script>
  <script src="{{ asset('js/modernizr.min.js') }}" type="text/javascript"></script>
  <script src="{{ asset('js/jquery.js') }}" type="text/javascript"></script>
  <script src="{{ asset('js/jquery-migrate.min.js') }}" type="text/javascript"></script>
  <script src="{{ asset('js/scripts.js') }}" type="text/javascript"></script>
  <script src="{{ asset('js/bootstrap.min.js') }}" type="text/javascript"></script>
  <script src="{{ asset('js/slick.min.js') }}" type="text/javascript"></script>
  <script src="{{ asset('js/parallax.min.js') }}" type="text/javascript"></script>
  <script src="{{ asset('js/featherlight.js') }}"></script>
  <title>
    @yield('document-title') | Wisconsin ITAD LLC
  </title>
  
</head>
<body>
  <div class="wrapper">
    @include('components.navbar')

    @yield('content')

    @include('components.footer')
  </div>
  <script src="{{ asset('js/contact-script.js') }}"></script>
  <script src="{{ asset('js/conditional-fields-script.js') }}"></script>
</body>
</html>