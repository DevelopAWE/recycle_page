<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <title>
    @yield('document-title') | Wisconsin ITAD LLC
  </title>
</head>
<body>
  @include('components.navbar')

  @yield('content')

  @include('components.footer')
  <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>