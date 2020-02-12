<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\User;

class Book extends Model
{
    public function author(){
        return $this->belongsTo(User::class, 'id_author');
    }
}
