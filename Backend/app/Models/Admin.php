<?php

namespace App\Models;

use Database\Factories\AdminFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;
    protected $primaryKey = 'CIN';

    protected $fillable = [
        'CIN', 'Nom', 'prenom', 'username', 'password', 'num_app', 'num_imm', 'tel', 'image', 'email',
    ];

    public function sessions()
    {
        return $this->hasMany(Session::class);
    }
    protected static function newFactory()
    {
        return AdminFactory::new();
    }

}
