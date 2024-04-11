<?php

namespace App\Http\Controllers;

use App\Models\Habitant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserCrudController extends Controller
{
    public function createUser(Request $request)
    {
        $validator= Validator::make ($request->all(), [
            'Nom' => 'required|string|',
            'prenom' => 'required|string',
            'CIN' => ['required', 'regex:/^[A-Za-z]{2}\d{6}$/'],
            'image' => 'nullable|image|mimes:jpg,jpeg,png',
            'num_imm'=> 'required|digit',
            'num_appart'=>'required|digit',
            'id_admin'=>['required', 'regex:/^[A-Za-z]{2}\d{6}$/'],

        ]);
       

        $validated= $validator->validated();
         // Generate username by concatenating nom and prenom with a dot
         $username = $validated['nom'] . '.' . $validated['prenom'];

         // Generate password by concatenating nom and prenom without any separator
         $password = $validated['nom'] . $validated['prenom'];
 
        try {    
            $habitant = Habitant::create([
                'nom'=>$validated['Nom'],
                'prenom'=>$validated['prenom'],
                'CIN'=>$validated['CIN'],
                'username'=>$username,
                'password'=>$password,
                'num_imm'=>$validated['num_imm'],
                'num_app'=>$validated['num_appart'],
                'id_admin'=>'BB234567',
                'session_id'=>22
            ]);

            $user=User::create([
                'nom'=>$validated['Nom'],
                'prenom'=>$validated['prenom'],
                'user_id'=>$validated['CIN'],
                'username'=>$username,
                'password'=>$password,
                'type'=>'Habitant',
                'id_admin'=>'BB234567',
                'session_id'=>22
            ]);

            return response()->json([
                'message' => 'Habitant created successfully.', 
                'habitant' => $habitant,
                'message1'=>'user created successfully',
                'user'=>$user
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to create product.'], 500);
        }
    }
    
}
