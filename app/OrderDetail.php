<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class  OrderDetail extends Model
{
    protected $table = "order_detail"; // chi dinh ten CSDL

    public $timestamps = false;

    public function order()
    {
        return $this->belongsTo('App\Order', 'order_id', 'id');
    }
    public function product()
    {
        return $this->belongsTo('App\Product', 'order_id', 'id');
    }
}
