<?php

namespace App\Http\Controllers;

use App\Product;
use App\Rating;
use App\Order;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function saveRating(Request $request, $id)
    {
        $email = Order::where(['email' => $_GET['email']])->first();
        if($email){
            $product = Product::find($id);
            $product->total_number +=1;
            $product->total_rating +=$_GET['number_rating'];
            $product->save();
            Rating::insert([
                    'product_id'=>$id,
                    'ra_number'=>$_GET['number_rating'],
                    'content'=>$_GET['contents'],
                    'name' => $_GET['name'],
                    'email' => $_GET['email'],
                    'phone' => $_GET['phone']

            ]);
            return response()->json(['code'=>'1']);
        }else{
            return response()->json(['code'=>'2']);
        }
    }

}
