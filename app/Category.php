<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected  $table = 'categories'; // tùy chỉnh tên bảng trong csdl
    public function parent()
    {
        return $this->belongsTo( 'App\Category','parent_id');
    }
    // relationship one to many
    public function products()
    {
        return $this->hasMany('App\Product', 'category_id','id');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    
}
