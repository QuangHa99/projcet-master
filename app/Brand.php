<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $table = 'brands';
    public function products()
    {
        return $this->hasMany('App\Product', 'brand_id','id');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }

}
