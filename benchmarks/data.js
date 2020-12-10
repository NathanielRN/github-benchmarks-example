window.BENCHMARK_DATA = {
  "lastUpdate": 1607625327568,
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
          "id": "8816dbacfc4143ae6fbda905e1696a7fd48d1e28",
          "message": "Merge pull request #1 from NathanielRN/add-performance-tests\n\nAdd benchmarking performance tests",
          "timestamp": "2020-12-09T16:20:15-08:00",
          "tree_id": "fca51f876eb94761f40c0bc4fc9d269dc7648e53",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/8816dbacfc4143ae6fbda905e1696a7fd48d1e28"
        },
        "date": 1607559663560,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 232623.1976554415,
            "unit": "iter/sec",
            "range": "stddev: 2.3816148250881683e-7",
            "extra": "mean: 4.298797411774844 usec\nrounds: 78741"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 6738.330977463484,
            "unit": "iter/sec",
            "range": "stddev: 0.000001972294698962416",
            "extra": "mean: 148.40470189792177 usec\nrounds: 6481"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 163745.23210463318,
            "unit": "iter/sec",
            "range": "stddev: 2.8235131825640206e-7",
            "extra": "mean: 6.107048047426506 usec\nrounds: 76924"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1539852.886980593,
            "unit": "iter/sec",
            "range": "stddev: 2.0837280329805992e-8",
            "extra": "mean: 649.4126864030682 nsec\nrounds: 77520"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 966491.8821697374,
            "unit": "iter/sec",
            "range": "stddev: 1.3239154751102174e-7",
            "extra": "mean: 1.0346698388765243 usec\nrounds: 188680"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 2231060.805716482,
            "unit": "iter/sec",
            "range": "stddev: 5.3501204251815976e-8",
            "extra": "mean: 448.21727737636263 nsec\nrounds: 188715"
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
          "id": "c5da534f34c1fb2818704fe18d4f0cf93a5ba6bf",
          "message": "Merge pull request #1 from NathanielRN/add-performance-tests\n\nAdd benchmarking performance tests",
          "timestamp": "2020-12-09T16:21:40-08:00",
          "tree_id": "9e8bf9282658cfa0d7859430b8726e09c5ccce4e",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/c5da534f34c1fb2818704fe18d4f0cf93a5ba6bf"
        },
        "date": 1607559749866,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 201652.29289776823,
            "unit": "iter/sec",
            "range": "stddev: 8.818681227216622e-7",
            "extra": "mean: 4.959031140335064 usec\nrounds: 77520"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 5719.031141452362,
            "unit": "iter/sec",
            "range": "stddev: 0.000009459278708035033",
            "extra": "mean: 174.8547918810681 usec\nrounds: 5444"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 143100.65188517878,
            "unit": "iter/sec",
            "range": "stddev: 0.000001133325799998112",
            "extra": "mean: 6.988088361766379 usec\nrounds: 60241"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1341819.28333846,
            "unit": "iter/sec",
            "range": "stddev: 8.2333622973094e-8",
            "extra": "mean: 745.2568407813366 nsec\nrounds: 78741"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 828728.374612988,
            "unit": "iter/sec",
            "range": "stddev: 2.1693647972655193e-7",
            "extra": "mean: 1.206667987524907 usec\nrounds: 172414"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 1921208.3954305826,
            "unit": "iter/sec",
            "range": "stddev: 9.379468741775967e-8",
            "extra": "mean: 520.5057412712275 nsec\nrounds: 169492"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6088da0152eafb1763eb0e9b79b2e14ebee0ecb7",
          "message": "Merge pull request #5 from NathanielRN/add-python-versions\n\nTest the gh-pages commit when there are multiple Python Versions",
          "timestamp": "2020-12-10T18:34:18Z",
          "tree_id": "69c91fad1cfd182442e509523b2b62d802720cf3",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/6088da0152eafb1763eb0e9b79b2e14ebee0ecb7"
        },
        "date": 1607625319444,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 188176.04078302794,
            "unit": "iter/sec",
            "range": "stddev: 0.000012321324730156291",
            "extra": "mean: 5.314172813068307 usec\nrounds: 71424"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 5504.953072870254,
            "unit": "iter/sec",
            "range": "stddev: 0.00013741678487792894",
            "extra": "mean: 181.65459119501728 usec\nrounds: 4929"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 134789.9533222957,
            "unit": "iter/sec",
            "range": "stddev: 0.00001036782154551356",
            "extra": "mean: 7.418950562353145 usec\nrounds: 61350"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1288274.6157838758,
            "unit": "iter/sec",
            "range": "stddev: 7.276430482921294e-7",
            "extra": "mean: 776.2320143144299 nsec\nrounds: 63292"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 798550.3333896055,
            "unit": "iter/sec",
            "range": "stddev: 0.000001518910601567548",
            "extra": "mean: 1.2522692160864255 usec\nrounds: 181819"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 1831432.7068757648,
            "unit": "iter/sec",
            "range": "stddev: 7.129816873402974e-7",
            "extra": "mean: 546.0206079350974 nsec\nrounds: 178572"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6088da0152eafb1763eb0e9b79b2e14ebee0ecb7",
          "message": "Merge pull request #5 from NathanielRN/add-python-versions\n\nTest the gh-pages commit when there are multiple Python Versions",
          "timestamp": "2020-12-10T18:34:18Z",
          "tree_id": "69c91fad1cfd182442e509523b2b62d802720cf3",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/6088da0152eafb1763eb0e9b79b2e14ebee0ecb7"
        },
        "date": 1607625326703,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 219536.65496794283,
            "unit": "iter/sec",
            "range": "stddev: 7.733121043450347e-7",
            "extra": "mean: 4.55504799481445 usec\nrounds: 69445"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 7088.399352360851,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019571027789756286",
            "extra": "mean: 141.07557295949212 usec\nrounds: 6812"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 147917.4414393316,
            "unit": "iter/sec",
            "range": "stddev: 7.118770551591163e-7",
            "extra": "mean: 6.760527969314224 usec\nrounds: 59172"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1672455.032384148,
            "unit": "iter/sec",
            "range": "stddev: 2.037046108320283e-8",
            "extra": "mean: 597.9234004125457 nsec\nrounds: 83334"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 832531.2610990327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015354892036553903",
            "extra": "mean: 1.201156096745112 usec\nrounds: 161291"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 2245187.6252679466,
            "unit": "iter/sec",
            "range": "stddev: 4.3772999611657566e-8",
            "extra": "mean: 445.39707450053356 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}