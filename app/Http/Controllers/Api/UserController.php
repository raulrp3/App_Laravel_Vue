<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        
        return UserResource::collection($users);
    }

    public function store(Request $request){
        $user = $this->validate($request, [
            'name' => 'required', 
            'email' => 'required',
            'password' => 'required',
            'is_admin' => 'required'
        ]);

        $user = User::create($user);

        return new UserResource($user);
    }

    public function destroy($id){
        $user = User::find($id);
        $user->delete();
    }
}
