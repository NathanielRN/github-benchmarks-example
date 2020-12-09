ITEM_VALUES = [50, 100, 150]
ITEM_WEIGHTS = [10, 30, 70]
BACKPACK_CAPACITY = 150


def test_core_1_benchmark_1(benchmark):
    def knapsack_recursive(capacity, weights, values):
        if len(values) == 0 or capacity == 0:
            return 0

        if weights[-1] > capacity:
            return knapsack_recursive(capacity, weights[:-1], values[:-1])

        with_last_item = values[-1] + knapsack_recursive(
            capacity - weights[-1], weights[:-1], values[:-1]
        )
        without_last_item = knapsack_recursive(capacity, weights[:-1], values[:-1])
        return max(with_last_item, without_last_item)

    benchmark(knapsack_recursive, BACKPACK_CAPACITY, ITEM_VALUES, ITEM_WEIGHTS)


def test_core_1_benchmark_2(benchmark):
    def knapsack_recursive_dynamic_programming(capacity, weights, values):
        matrix = [[0] * (capacity + 1)] * (len(values) + 1)
        for row in range(len(values) + 1):
            for col in range(capacity + 1):
                if row == 0 or col == 0:
                    matrix[row][col] = 0
                elif weights[row - 1] > col:
                    matrix[row][col] = matrix[row - 1][col]
                else:
                    with_last_item = (
                        values[row - 1] + matrix[row - 1][col - weights[row - 1]]
                    )
                    without_last_item = matrix[row - 1][col]
                    matrix[row][col] = max(with_last_item, without_last_item)

        return matrix[len(values)][capacity]

    benchmark(
        knapsack_recursive_dynamic_programming,
        BACKPACK_CAPACITY,
        ITEM_VALUES,
        ITEM_WEIGHTS,
    )


def test_core_1_benchmark_3(benchmark):
    def knapsack_recursive_memoization(capacity, weights, values, memo=None):
        if not memo:
            memo = [[-1] * (capacity + 1)] * (len(values) + 1)

        if len(values) == 0 or capacity == 0:
            return 0

        if memo[len(values)][capacity] != -1:
            return memo[len(values)][capacity]

        if weights[-1] > capacity:
            memo[len(values)][capacity] = knapsack_recursive_memoization(
                capacity, weights[:-1], values[-1], memo
            )
            return memo[len(values)][capacity]

        with_last_item = values[-1] + knapsack_recursive_memoization(
            capacity - weights[-1], weights[:-1], values[:-1], memo
        )
        without_last_item = knapsack_recursive_memoization(
            capacity, weights[:-1], values[:-1], memo
        )
        memo[len(values)][capacity] = max(with_last_item, without_last_item)
        return memo[len(values)][capacity]

    benchmark(
        knapsack_recursive_memoization, BACKPACK_CAPACITY, ITEM_VALUES, ITEM_WEIGHTS
    )
