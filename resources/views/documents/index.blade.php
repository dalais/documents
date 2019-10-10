@extends('layouts.main')

@section('content')

    <div class="jumbotron">
        <div class="container">
        </div>
    </div>

    <div class="container">

        <div class="row">
            <div class="col-md-8">
                <h2>Heading</h2>
                <p></p>
                <router-view></router-view>
            </div>
        </div>

        <hr>

    </div> <!-- /container -->
@endsection
