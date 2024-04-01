<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin>
 */
class AdminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'CIN' => $this->faker->unique()->regexify('[A-Z]{2}[0-9]{6}'), // Generate a unique CIN
            'prenom' => $this->faker->firstName,
            'Nom' => $this->faker->lastName,
            'username' => $this->faker->userName,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // Example password, you may change this
            'num_app' => $this->faker->numberBetween(1, 16),
            'num_imm' => $this->faker->numberBetween(1, 16),
            'tel' => '06' . $this->faker->numberBetween(10000000, 99999999),
        ];
    }
}
