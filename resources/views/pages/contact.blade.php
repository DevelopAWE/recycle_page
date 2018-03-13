@extends('components.master')
@section('document-title')
    Contact Us
@endsection

@section('content')
<h1 class="text-center">Contact Us</h1>
<hr>
<div class="container">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-response-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11627.793885833886!2d-88.142173!3d43.23154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c060befd0b49b88!2sWisconsin+ITAD+LLC!5e0!3m2!1sen!2sus!4v1520950087091" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</div>
<hr>
<div class="container">
  <div class="row">
    <div class="card" id="card">
      <div class="card-body">
        <h2 class="card-title text-right">Connect with Wisconsin ITAD LLC</h2>
        <h6 class="card-subtitle text-muted text-right">
          Germantown, WI
        </h6>
        <p class="card-text text-right">
          W188N11774 Maple Rd,
        </p>
        <p class="card-text text-right">
          Germantown, WI 53022
        </p>
      </div>
    </div>
  </div>
</div>
<div class="container-fluid">
  <div class="col-sm-9">
    <form action="" method="post">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" name="name">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" class="form-control" id="email" name="email">
      </div>
      <div class="form-group">
        <label for="content">Content:</label>
        <textarea class="form-control" name="content" id="content" cols="30" rows="10"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="submit">Submit</button>
        <button class="btn btn-danger" type="reset">Reset</button>
      </div>
    </form>
  </div>
</div>
@endsection