<?php

namespace Database\Seeders;

use App\Models\Metier;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MetierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    $metier=Metier::factory(10)->create();
    }
}
