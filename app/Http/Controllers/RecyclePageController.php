<?php

namespace App\Http\Controllers;

class RecyclePageController extends Controller
{
    public function index()
    {
        return view('pages.index');
    }

    public function contact()
    {
        return view('pages.contact');
    }
}
