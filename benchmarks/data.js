window.BENCHMARK_DATA = {
  "lastUpdate": 1607559397243,
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
      },
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
          "id": "914b8d5b0dcde0bba030d0978d9c293991e0cff9",
          "message": "Increase the compute requirements of tests",
          "timestamp": "2020-12-09T15:07:27-08:00",
          "tree_id": "0e2de38691655af0843f7a0fa4d284bb123c25a3",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/914b8d5b0dcde0bba030d0978d9c293991e0cff9"
        },
        "date": 1607555321661,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 185551.3713257861,
            "unit": "iter/sec",
            "range": "stddev: 0.000003978648420164961",
            "extra": "mean: 5.389343085178426 usec\nrounds: 62894"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 4368.609503620518,
            "unit": "iter/sec",
            "range": "stddev: 0.00004340390957171426",
            "extra": "mean: 228.9057877961494 usec\nrounds: 4769"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 123418.06588771747,
            "unit": "iter/sec",
            "range": "stddev: 0.000007980276933881243",
            "extra": "mean: 8.10254149428799 usec\nrounds: 66226"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 4078.6382176947436,
            "unit": "iter/sec",
            "range": "stddev: 0.000058511380645991075",
            "extra": "mean: 245.17987294425996 usec\nrounds: 3770"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 2821.249586675582,
            "unit": "iter/sec",
            "range": "stddev: 0.00006917645686710963",
            "extra": "mean: 354.4528653979705 usec\nrounds: 2890"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 1167496.3688134833,
            "unit": "iter/sec",
            "range": "stddev: 4.30725533879338e-7",
            "extra": "mean: 856.5337132620882 nsec\nrounds: 60976"
          }
        ]
      },
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
          "id": "aa3279cdb5d262020331958d8f147ef8c117805f",
          "message": "Reduced complexity of tests",
          "timestamp": "2020-12-09T15:11:27-08:00",
          "tree_id": "2e92539e2d237a89c020e5940ca9437ea81605f5",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/aa3279cdb5d262020331958d8f147ef8c117805f"
        },
        "date": 1607555529562,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 917035.7331883898,
            "unit": "iter/sec",
            "range": "stddev: 5.892785596048373e-7",
            "extra": "mean: 1.090470048013458 usec\nrounds: 125000"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 49757.021272900216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034205203152663955",
            "extra": "mean: 20.097666106564994 usec\nrounds: 36901"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 567728.8942548101,
            "unit": "iter/sec",
            "range": "stddev: 4.2540444045369186e-7",
            "extra": "mean: 1.7614040964268822 usec\nrounds: 185186"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1603216.9351185246,
            "unit": "iter/sec",
            "range": "stddev: 1.1696418910442708e-7",
            "extra": "mean: 623.7459061810512 nsec\nrounds: 80646"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 1015419.6496276682,
            "unit": "iter/sec",
            "range": "stddev: 2.4470776748431716e-7",
            "extra": "mean: 984.8145053792053 nsec\nrounds: 196079"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 2385499.5436098548,
            "unit": "iter/sec",
            "range": "stddev: 1.973786726306123e-7",
            "extra": "mean: 419.1994094820178 nsec\nrounds: 175439"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enruizno@edu.uwaterloo.ca",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "enowell@amazon.com",
            "name": "Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "distinct": true,
          "id": "66126af6bb4a80b1ae754e11a499b6e9fbf0f285",
          "message": "Merge pull request #1 from NathanielRN/add-performance-tests\n\nAdd benchmarking performance tests",
          "timestamp": "2020-12-09T16:14:46-08:00",
          "tree_id": "e715ca3878a02759d1ddded4bd3165b93031e828",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/66126af6bb4a80b1ae754e11a499b6e9fbf0f285"
        },
        "date": 1607559396217,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 197299.12642067787,
            "unit": "iter/sec",
            "range": "stddev: 0.000008123589729324315",
            "extra": "mean: 5.068446161630827 usec\nrounds: 75188"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 5641.748613416757,
            "unit": "iter/sec",
            "range": "stddev: 0.00007693061932778416",
            "extra": "mean: 177.25001032869133 usec\nrounds: 6390"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 137589.0078337263,
            "unit": "iter/sec",
            "range": "stddev: 0.000013056968244497927",
            "extra": "mean: 7.268022465926065 usec\nrounds: 70418"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1284840.73178565,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012016605139699729",
            "extra": "mean: 778.3065832682576 nsec\nrounds: 72464"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 796616.4534806509,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019686303028065627",
            "extra": "mean: 1.2553092465397957 usec\nrounds: 196079"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 1828907.7381073732,
            "unit": "iter/sec",
            "range": "stddev: 0.000001198480941449843",
            "extra": "mean: 546.7744376405933 nsec\nrounds: 192271"
          }
        ]
      }
    ]
  }
}