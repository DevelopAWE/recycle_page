<nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
  <a class="navbar-brand" href="/">Wisconsin ITAD LLC</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item {{ Request::is('/') ? 'active' : '' }} ">
        <a class="nav-link" href="/">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link {{ Request::is('about') ? 'active' : '' }} " href="/about">About</a>
      </li>
      <li class="nav-item {{ Request::is('contact') ? 'active' : '' }}">
        <a href="/contact" class="nav-link">Contact Us</a>
      </li>
      {{--  <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>  --}}
    </ul>
  </div>
</nav>