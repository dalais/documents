@extends('layouts.main')

@section('content')

    <div class="jumbotron">
        <div class="container">
        </div>
    </div>

    <div class="container">

        <div class="row" id="index-container">
            <div class="col-md-8">
                <h2>Heading</h2>
                <p>
                    <!-- use router-link component for navigation. -->
                    <!-- specify the link by passing the `to` prop. -->
                    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
                    <router-link to="/documents">Документы</router-link>
                </p>
                <!-- route outlet -->
                <!-- component matched by the route will render here -->
                <router-view></router-view>
            </div>
        </div>

        <hr>

    </div> <!-- /container -->
@endsection
