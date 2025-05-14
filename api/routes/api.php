<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use app\Http\Controllers\PatientController;
use App\Models\Patient;

Route::get('/patients', function () {
    return Patient::all();
});

Route::get('/patients/{id}', function ($id) {
    $patient = Patient::find($id);

    if (!$patient) {
        return response()->json(['message' => 'Patient not found'], 404);
    }

    return $patient;
});