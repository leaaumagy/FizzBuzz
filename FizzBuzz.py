def fizz_buzz_process(value):
    """
    FizzBuzz rule.
    """
    if value % 3 == 0 and value % 5 == 0:
        return "FizzBuzz"
    elif value % 3 == 0:
        return "Fizz"
    elif value % 5 == 0:
        return "Buzz"
    else:
        return value

def FizzBuzz(n):
    """
    Applies the FizzBuzz rule to each element of the input if it's iterable.
    """
    if isinstance(n, (int, float)):
        return [fizz_buzz_process(n)]
    elif isinstance(n, list):
        return [fizz_buzz_process(item) for item in n]
    elif isinstance(n, dict):
        return {key: fizz_buzz_process(value) for key, value in n.items()}
    elif isinstance(n, (tuple, set)):
        return type(n)(fizz_buzz_process(item) for item in n)

def main():
    """
    Main function that prompts the user for input, runs FizzBuzz, and prints the results or the error.
    """
    user_input = input("Enter a number, list, tuple, set, or dictionary: ")
    
    try:
        user_input_eval = eval(user_input)
        result = FizzBuzz(user_input_eval)
        print("Result:", result)

    except (SyntaxError, NameError, TypeError, ValueError) as e:
        print(f"Error: {e}. Please provide a valid number, list, tuple, set, or dictionary.")


if __name__ == "__main__":
    main()
