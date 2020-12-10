TARGET_NUMBER = 27

def test_instrumentation_1_prime_factors(benchmark):
    def prime_factors_iterative(input_number):
        factor = 2
        factors = []
        while factor * factor <= input_number:
            if input_number % factor:
                factor += 1
            else:
                input_number //= factor
                factors.append(factor)
        if input_number > 1:
            factors.append(input_number)
        return factors
    
    benchmark(prime_factors_iterative, TARGET_NUMBER)