@extends('components.master')

@section('document-title')
    Index
@endsection

@section('content')
<div>
<div class="hero" style="background: url({{asset('img/heroes/hero-electronics-recycling.jpg')}}) center no-repeat; background-size: cover; height: 50px"></div>
<main role="main">
  <section id="section-1">
    <div class="table-cell">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <h1>Heading</h1>
            <h3>Heading 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velit exercitationem quasi ad impedit non nam a, omnis dolorum, molestiae at aspernatur, nesciunt expedita pariatur saepe temporibus ea iste dolor!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br>
  <br>
  <section id="section-2">
    <div class="table-cell">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
              <h2>What we recycle</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt vel corrupti architecto dignissimos unde officia qui ducimus dolorem facilis dolor deleniti nihil ex tempora iste, modi minima facere animi nemo!
              </p>
              {{--  TODO: NEED TO ADD WHAT WE RECYCLE  --}}
            <div class="recyclable-electronics col-sm-3 col-xs-6" data-item-select="1">
               <div class="recyclable-electronics__title-image">
              <h3 class="recyclable-electronic__title">COMPUTERS
                <br>Desktops/Laptops/
                <br>Towers</h3>
              <img class="recyclable-electronic__image" src="#" alt="labtop image">
              </div>
            </div>
            <div class="recyclable-electronics col-sm-3 col-xs-6" data-item-select="2">
              <div class="recyclable-electronics__title-image">
                <h3 class="recycleable-electronic__title">
                  Network<br>Equipment
                </h3>
                <img class="recyclable-electronic__image" src="#" alt="Rack">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
</div>
@endsection