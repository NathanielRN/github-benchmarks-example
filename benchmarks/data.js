window.BENCHMARK_DATA = {
  "lastUpdate": 1607554780698,
  "repoUrl": "https://github.com/NathanielRN/github-benchmarks-example",
  "entries": {
    "OpenTelemetry Python Benchmark": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "enowell@amazon.com",
            "name": "Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "distinct": true,
          "id": "c2da18f2fc74b7bc4599fbd2fb63316fc3220ec5",
          "message": "Adds benchmark tests for action",
          "timestamp": "2020-12-09T14:54:29-08:00",
          "tree_id": "bbc9036068cb65cba84128042cc3ba4d5321b342",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/c2da18f2fc74b7bc4599fbd2fb63316fc3220ec5"
        },
        "date": 1607554780157,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 196206.52889665132,
            "unit": "iter/sec",
            "range": "stddev: 0.000007117755592177617",
            "extra": "mean: 5.096670358644049 usec\nrounds: 64103"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 5307.190935396869,
            "unit": "iter/sec",
            "range": "stddev: 0.00012287599868366156",
            "extra": "mean: 188.42359586695756 usec\nrounds: 5565"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 135116.64606600595,
            "unit": "iter/sec",
            "range": "stddev: 0.000010506005311652608",
            "extra": "mean: 7.401012599968542 usec\nrounds: 57143"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 148496.85236840905,
            "unit": "iter/sec",
            "range": "stddev: 0.000023719608151191282",
            "extra": "mean: 6.73414947219944 usec\nrounds: 76924"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 101808.53642072558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000332496810911689",
            "extra": "mean: 9.822359059042775 usec\nrounds: 30864"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 1368150.3424281594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019326210505547683",
            "extra": "mean: 730.913825029656 nsec\nrounds: 140846"
          }
        ]
      }
    ]
  }
}