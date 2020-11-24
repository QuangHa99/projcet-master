<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    public function details()
    {
        return $this->hasMany('App\OrderDetail', 'order_id', 'id');
    }
    public function status()
    {
        return $this->belongTo('App\OrderStatus', 'order_status', 'id');
    }
    public function coupon()
    {
        return $this->belongTo('App\Coupon', 'coupon', 'id');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
