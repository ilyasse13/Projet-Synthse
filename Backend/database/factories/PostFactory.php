<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titre' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            
        ];
    }
    public function withIds($posterId, $sessionId)
    {
        return $this->state(function (array $attributes) use ($posterId, $sessionId) {
            return [
                'poster_id' => $posterId,
                'session_id' => $sessionId,
            ];
        });
    }
}
