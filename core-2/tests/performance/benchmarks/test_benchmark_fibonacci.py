FIBONACCI_NUMBER = 15


def test_core_2_fibonacci_recursive(benchmark):
    def fibonacci_recursive(num):
        if num == 1 or num == 0:
            return num
        return fibonacci_recursive(num - 1) + fibonacci_recursive(num - 2)

    benchmark(fibonacci_recursive, FIBONACCI_NUMBER)


def test_core_2_fibonacci_recursive_memoized(benchmark):
    def fibonacci_recursive_memoized(num, memo=None):
        if not memo:
            memo = {}

        if num == 1 or num == 0:
            return num

        if num - 1 in memo:
            a = memo[num - 1]
        else:
            a = fibonacci_recursive_memoized(num - 1)
            memo[a] = a

        if num - 2 in memo:
            b = memo[num - 2]
        else:
            b = fibonacci_recursive_memoized(num - 2)
            memo[a] = a

        return a + b

    benchmark(fibonacci_recursive_memoized, FIBONACCI_NUMBER)


def test_core_2_benchmark_2(benchmark):
    def fibonacci_iterative(num):
        a, b = 0, 1
        for _ in range(0, num):
            a, b = b, a + b
        return a

    benchmark(fibonacci_iterative, FIBONACCI_NUMBER)
