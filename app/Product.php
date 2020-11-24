<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    public function category()
    {
        return $this->belongsTo('App\Category', 'category_id','id');
    }
    public function brand()
    {
        return $this->belongTo('App\Brand', 'brand_id','id');
    }
    public function vendor()
    {
        return $this->belongTo('App\Vendor', 'vendor_id','id');
    }
    public function ratings()
    {
        return $this->hasMany('App\Rating', 'product_id','id');
    }
    public function details()
    {
        return $this->hasMany('App\OrderDetail', 'product_id','id');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
