using System;

Random random = new Random();
int secretNumber = random.Next(1, 101);
int guess = 0;
int numberOfGuess = 0;

Console.WriteLine("Welcome to Guesst the number");
Console.WriteLine("I'm thinking of a number from 1 - 100.");

while (guess != secretNumber)
{
    Console.Write("Write your guess: ");

    string input = Console.ReadLine();

    if (int.TryParse(input, out guess))
    {
        numberOfGuess++;

        if (guess < secretNumber)
        {
            Console.WriteLine("Too low! Try again.");
        }
        else if (guess > secretNumber)
        {
            Console.WriteLine("Too high! Try again.");
        }
        else
        {
            Console.WriteLine($"Congrats! You made it on {numberOfGuess} tries.");
        }
    }
    else
    {
        Console.WriteLine("Wrong format, write a number.");
    }
}
