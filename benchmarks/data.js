window.BENCHMARK_DATA = {
  "lastUpdate": 1607629398265,
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
        "date": 1607625333396,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 183334.40769361157,
            "unit": "iter/sec",
            "range": "stddev: 5.220157555888418e-7",
            "extra": "mean: 5.454513490294739 usec\nrounds: 75758"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 6080.8241050812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020226914494506583",
            "extra": "mean: 164.45139387675914 usec\nrounds: 5814"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 122050.86904793973,
            "unit": "iter/sec",
            "range": "stddev: 5.874518901329751e-7",
            "extra": "mean: 8.193305035847104 usec\nrounds: 64517"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1008148.464237409,
            "unit": "iter/sec",
            "range": "stddev: 2.2349376730087712e-7",
            "extra": "mean: 991.917396567605 nsec\nrounds: 185186"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 752495.137105397,
            "unit": "iter/sec",
            "range": "stddev: 1.0990200686319081e-7",
            "extra": "mean: 1.328912242339098 usec\nrounds: 192308"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 1691664.977806476,
            "unit": "iter/sec",
            "range": "stddev: 4.973632581262417e-8",
            "extra": "mean: 591.1335950795665 nsec\nrounds: 149254"
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
        "date": 1607625338264,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 191650.83723364075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010993111821784054",
            "extra": "mean: 5.21782223565715 usec\nrounds: 57143"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 6115.202341164085,
            "unit": "iter/sec",
            "range": "stddev: 0.000010426223670419723",
            "extra": "mean: 163.52688663604232 usec\nrounds: 5575"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 133147.0377735195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013753789924191951",
            "extra": "mean: 7.510493787334425 usec\nrounds: 68489"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1054627.4289964065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010923514292009702",
            "extra": "mean: 948.2021541499348 nsec\nrounds: 77520"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 739995.0144609166,
            "unit": "iter/sec",
            "range": "stddev: 5.511296173289276e-7",
            "extra": "mean: 1.3513604557572538 usec\nrounds: 175439"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 1602190.024479925,
            "unit": "iter/sec",
            "range": "stddev: 1.1410673443015108e-7",
            "extra": "mean: 624.1456910358139 nsec\nrounds: 140846"
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
        "date": 1607625344531,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 24068333.89901081,
            "unit": "iter/sec",
            "range": "stddev: 3.009048109366334e-8",
            "extra": "mean: 41.548368249994134 nsec\nrounds: 200000"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 143267.74440049502,
            "unit": "iter/sec",
            "range": "stddev: 0.000004108122031738149",
            "extra": "mean: 6.97993818625754 usec\nrounds: 161291"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 4320145.829155655,
            "unit": "iter/sec",
            "range": "stddev: 1.4750474639809556e-7",
            "extra": "mean: 231.47366768298383 nsec\nrounds: 50506"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 283409065.8399438,
            "unit": "iter/sec",
            "range": "stddev: 1.6663518243938318e-9",
            "extra": "mean: 3.5284686360843156 nsec\nrounds: 200000"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 9127548.97496776,
            "unit": "iter/sec",
            "range": "stddev: 4.616094209773573e-8",
            "extra": "mean: 109.55843707236643 nsec\nrounds: 105264"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 14809937.403300773,
            "unit": "iter/sec",
            "range": "stddev: 2.1530666485887786e-8",
            "extra": "mean: 67.52223002486512 nsec\nrounds: 178572"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - instrumentation": [
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
          "id": "d511cbd0460bb0b45040942ee9b70aea037e15d6",
          "message": "Merge pull request #6 from NathanielRN/add-python-version-namespace\n\nAdd python version namespace + new package",
          "timestamp": "2020-12-10T19:05:36Z",
          "tree_id": "acae648579aef49638394fa45c45827841295317",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/d511cbd0460bb0b45040942ee9b70aea037e15d6"
        },
        "date": 1607627168244,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_prime_factors.py::test_instrumentation_1_prime_factors",
            "value": 1271610.8318670487,
            "unit": "iter/sec",
            "range": "stddev: 1.0399114060421266e-7",
            "extra": "mean: 786.4041221886614 nsec\nrounds: 140846"
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
          "id": "7a8282e0d28e29c66db7a51b77bbb0cdce411426",
          "message": "Merge pull request #3 from NathanielRN/worse-performance\n\nMake the performance worse",
          "timestamp": "2020-12-10T19:33:26Z",
          "tree_id": "e2c7bb1df3e8b9d41bf86890ada8fc65e5cd573c",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/7a8282e0d28e29c66db7a51b77bbb0cdce411426"
        },
        "date": 1607628833761,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_prime_factors.py::test_instrumentation_1_prime_factors",
            "value": 1205858.0508610585,
            "unit": "iter/sec",
            "range": "stddev: 1.282200627577664e-7",
            "extra": "mean: 829.2850052176017 nsec\nrounds: 120482"
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
          "id": "e980c32c7aea756dd6f2377147501094dbe8893d",
          "message": "Merge pull request #3 from NathanielRN/worse-performance\n\nMake the performance worse",
          "timestamp": "2020-12-10T11:42:24-08:00",
          "tree_id": "565e9a2b79ab446fce3bf6626532a4b86d8bc6c1",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/e980c32c7aea756dd6f2377147501094dbe8893d"
        },
        "date": 1607629397715,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_prime_factors.py::test_instrumentation_1_prime_factors",
            "value": 1245227.4747632968,
            "unit": "iter/sec",
            "range": "stddev: 1.0646386972510138e-7",
            "extra": "mean: 803.0661226697462 nsec\nrounds: 158705"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - instrumentation": [
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
          "id": "d511cbd0460bb0b45040942ee9b70aea037e15d6",
          "message": "Merge pull request #6 from NathanielRN/add-python-version-namespace\n\nAdd python version namespace + new package",
          "timestamp": "2020-12-10T19:05:36Z",
          "tree_id": "acae648579aef49638394fa45c45827841295317",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/d511cbd0460bb0b45040942ee9b70aea037e15d6"
        },
        "date": 1607627172184,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_prime_factors.py::test_instrumentation_1_prime_factors",
            "value": 974262.5341191789,
            "unit": "iter/sec",
            "range": "stddev: 0.000019281628138446554",
            "extra": "mean: 1.0264173823579186 usec\nrounds: 153847"
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
          "id": "7a8282e0d28e29c66db7a51b77bbb0cdce411426",
          "message": "Merge pull request #3 from NathanielRN/worse-performance\n\nMake the performance worse",
          "timestamp": "2020-12-10T19:33:26Z",
          "tree_id": "e2c7bb1df3e8b9d41bf86890ada8fc65e5cd573c",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/7a8282e0d28e29c66db7a51b77bbb0cdce411426"
        },
        "date": 1607628847000,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_prime_factors.py::test_instrumentation_1_prime_factors",
            "value": 1004378.4163879211,
            "unit": "iter/sec",
            "range": "stddev: 0.000001440565331024805",
            "extra": "mean: 995.6406705714891 nsec\nrounds: 126583"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - instrumentation": [
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
          "id": "d511cbd0460bb0b45040942ee9b70aea037e15d6",
          "message": "Merge pull request #6 from NathanielRN/add-python-version-namespace\n\nAdd python version namespace + new package",
          "timestamp": "2020-12-10T19:05:36Z",
          "tree_id": "acae648579aef49638394fa45c45827841295317",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/d511cbd0460bb0b45040942ee9b70aea037e15d6"
        },
        "date": 1607627174470,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_prime_factors.py::test_instrumentation_1_prime_factors",
            "value": 1204985.9082051401,
            "unit": "iter/sec",
            "range": "stddev: 4.743550330818463e-7",
            "extra": "mean: 829.885223711477 nsec\nrounds: 188680"
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
          "id": "7a8282e0d28e29c66db7a51b77bbb0cdce411426",
          "message": "Merge pull request #3 from NathanielRN/worse-performance\n\nMake the performance worse",
          "timestamp": "2020-12-10T19:33:26Z",
          "tree_id": "e2c7bb1df3e8b9d41bf86890ada8fc65e5cd573c",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/7a8282e0d28e29c66db7a51b77bbb0cdce411426"
        },
        "date": 1607628839619,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_prime_factors.py::test_instrumentation_1_prime_factors",
            "value": 1166973.7329794902,
            "unit": "iter/sec",
            "range": "stddev: 1.1130545625811469e-7",
            "extra": "mean: 856.9173167649826 nsec\nrounds: 133316"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - instrumentation": [
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
          "id": "d511cbd0460bb0b45040942ee9b70aea037e15d6",
          "message": "Merge pull request #6 from NathanielRN/add-python-version-namespace\n\nAdd python version namespace + new package",
          "timestamp": "2020-12-10T19:05:36Z",
          "tree_id": "acae648579aef49638394fa45c45827841295317",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/d511cbd0460bb0b45040942ee9b70aea037e15d6"
        },
        "date": 1607627179401,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_prime_factors.py::test_instrumentation_1_prime_factors",
            "value": 879914.5002905871,
            "unit": "iter/sec",
            "range": "stddev: 4.485576097781749e-7",
            "extra": "mean: 1.136474054774362 usec\nrounds: 138889"
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
          "id": "7a8282e0d28e29c66db7a51b77bbb0cdce411426",
          "message": "Merge pull request #3 from NathanielRN/worse-performance\n\nMake the performance worse",
          "timestamp": "2020-12-10T19:33:26Z",
          "tree_id": "e2c7bb1df3e8b9d41bf86890ada8fc65e5cd573c",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/7a8282e0d28e29c66db7a51b77bbb0cdce411426"
        },
        "date": 1607628846321,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_prime_factors.py::test_instrumentation_1_prime_factors",
            "value": 804502.4591481275,
            "unit": "iter/sec",
            "range": "stddev: 1.626380392219751e-7",
            "extra": "mean: 1.243004280010382 usec\nrounds: 125000"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - core": [
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
          "id": "d511cbd0460bb0b45040942ee9b70aea037e15d6",
          "message": "Merge pull request #6 from NathanielRN/add-python-version-namespace\n\nAdd python version namespace + new package",
          "timestamp": "2020-12-10T19:05:36Z",
          "tree_id": "acae648579aef49638394fa45c45827841295317",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/d511cbd0460bb0b45040942ee9b70aea037e15d6"
        },
        "date": 1607627180831,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 247330.75272103748,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025857165254698007",
            "extra": "mean: 4.043168870018733 usec\nrounds: 78747"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 6870.019457832486,
            "unit": "iter/sec",
            "range": "stddev: 0.00005609972318562721",
            "extra": "mean: 145.55999530101818 usec\nrounds: 6597"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 168415.37976215358,
            "unit": "iter/sec",
            "range": "stddev: 0.000004118416818474204",
            "extra": "mean: 5.93769999754334 usec\nrounds: 80646"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1604841.4850948872,
            "unit": "iter/sec",
            "range": "stddev: 7.440190161369418e-7",
            "extra": "mean: 623.1145002716098 nsec\nrounds: 86957"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 970618.8185436359,
            "unit": "iter/sec",
            "range": "stddev: 7.914932799628671e-7",
            "extra": "mean: 1.0302705664622456 usec\nrounds: 196079"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 2199150.0821724455,
            "unit": "iter/sec",
            "range": "stddev: 3.0510861277756333e-7",
            "extra": "mean: 454.7211252684788 nsec\nrounds: 188680"
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
          "id": "7a8282e0d28e29c66db7a51b77bbb0cdce411426",
          "message": "Merge pull request #3 from NathanielRN/worse-performance\n\nMake the performance worse",
          "timestamp": "2020-12-10T19:33:26Z",
          "tree_id": "e2c7bb1df3e8b9d41bf86890ada8fc65e5cd573c",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/7a8282e0d28e29c66db7a51b77bbb0cdce411426"
        },
        "date": 1607628854516,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 194116.91318824198,
            "unit": "iter/sec",
            "range": "stddev: 0.000003543196967334151",
            "extra": "mean: 5.151534627125792 usec\nrounds: 16129"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 5482.9125402123345,
            "unit": "iter/sec",
            "range": "stddev: 0.00005699655649212417",
            "extra": "mean: 182.38481695009372 usec\nrounds: 3764"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 133754.74545868573,
            "unit": "iter/sec",
            "range": "stddev: 0.00000621979362148454",
            "extra": "mean: 7.476370251916637 usec\nrounds: 60972"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 301.3967153723692,
            "unit": "iter/sec",
            "range": "stddev: 0.0002353172138269533",
            "extra": "mean: 3.317886191176706 msec\nrounds: 340"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 204.06970123902917,
            "unit": "iter/sec",
            "range": "stddev: 0.000403049184780088",
            "extra": "mean: 4.900286490000241 msec\nrounds: 200"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 755426.002372289,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024521443278365392",
            "extra": "mean: 1.3237563928958715 usec\nrounds: 181819"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - core": [
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
          "id": "d511cbd0460bb0b45040942ee9b70aea037e15d6",
          "message": "Merge pull request #6 from NathanielRN/add-python-version-namespace\n\nAdd python version namespace + new package",
          "timestamp": "2020-12-10T19:05:36Z",
          "tree_id": "acae648579aef49638394fa45c45827841295317",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/d511cbd0460bb0b45040942ee9b70aea037e15d6"
        },
        "date": 1607627187293,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 167018.99836271984,
            "unit": "iter/sec",
            "range": "stddev: 0.000016243412527889768",
            "extra": "mean: 5.987342816104501 usec\nrounds: 62500"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 5206.794321852953,
            "unit": "iter/sec",
            "range": "stddev: 0.00006392128330304353",
            "extra": "mean: 192.05675088854443 usec\nrounds: 5066"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 120161.52409885783,
            "unit": "iter/sec",
            "range": "stddev: 0.000006565987507849481",
            "extra": "mean: 8.32213146012772 usec\nrounds: 46729"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1277577.0259117584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010914124542932444",
            "extra": "mean: 782.7316707472085 nsec\nrounds: 62894"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 653090.1092060534,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020437799138130298",
            "extra": "mean: 1.531182276233944 usec\nrounds: 99020"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 1729557.4497343577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013490263838124708",
            "extra": "mean: 578.1825866227867 nsec\nrounds: 90910"
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
          "id": "7a8282e0d28e29c66db7a51b77bbb0cdce411426",
          "message": "Merge pull request #3 from NathanielRN/worse-performance\n\nMake the performance worse",
          "timestamp": "2020-12-10T19:33:26Z",
          "tree_id": "e2c7bb1df3e8b9d41bf86890ada8fc65e5cd573c",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/7a8282e0d28e29c66db7a51b77bbb0cdce411426"
        },
        "date": 1607628855213,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 191568.4774786053,
            "unit": "iter/sec",
            "range": "stddev: 0.000026165647915158524",
            "extra": "mean: 5.220065499093826 usec\nrounds: 74627"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 5515.061048583288,
            "unit": "iter/sec",
            "range": "stddev: 0.00017099882846068152",
            "extra": "mean: 181.32165558836027 usec\nrounds: 4724"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 128723.44993737382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037104635489472384",
            "extra": "mean: 7.768592284362462 usec\nrounds: 53476"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 312.12665526589166,
            "unit": "iter/sec",
            "range": "stddev: 0.0007646962242825781",
            "extra": "mean: 3.2038276229504623 msec\nrounds: 305"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 222.04805993025374,
            "unit": "iter/sec",
            "range": "stddev: 0.00040705089929315676",
            "extra": "mean: 4.503529552629752 msec\nrounds: 228"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 803658.7360491063,
            "unit": "iter/sec",
            "range": "stddev: 7.89341540121518e-7",
            "extra": "mean: 1.2443092511084164 usec\nrounds: 188680"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - instrumentation": [
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
          "id": "d511cbd0460bb0b45040942ee9b70aea037e15d6",
          "message": "Merge pull request #6 from NathanielRN/add-python-version-namespace\n\nAdd python version namespace + new package",
          "timestamp": "2020-12-10T19:05:36Z",
          "tree_id": "acae648579aef49638394fa45c45827841295317",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/d511cbd0460bb0b45040942ee9b70aea037e15d6"
        },
        "date": 1607627188820,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_prime_factors.py::test_instrumentation_1_prime_factors",
            "value": 6792952.063539995,
            "unit": "iter/sec",
            "range": "stddev: 4.712203243922417e-8",
            "extra": "mean: 147.21140244274693 nsec\nrounds: 81301"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - core": [
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
          "id": "d511cbd0460bb0b45040942ee9b70aea037e15d6",
          "message": "Merge pull request #6 from NathanielRN/add-python-version-namespace\n\nAdd python version namespace + new package",
          "timestamp": "2020-12-10T19:05:36Z",
          "tree_id": "acae648579aef49638394fa45c45827841295317",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/d511cbd0460bb0b45040942ee9b70aea037e15d6"
        },
        "date": 1607627186524,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 210981.21094621593,
            "unit": "iter/sec",
            "range": "stddev: 0.000005554145355185296",
            "extra": "mean: 4.739758557243865 usec\nrounds: 69445"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 6407.713983246331,
            "unit": "iter/sec",
            "range": "stddev: 0.00007544935855735862",
            "extra": "mean: 156.06189705324073 usec\nrounds: 5090"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 141995.60207445265,
            "unit": "iter/sec",
            "range": "stddev: 0.00000938534003471298",
            "extra": "mean: 7.042471635675514 usec\nrounds: 70423"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1023476.2677587958,
            "unit": "iter/sec",
            "range": "stddev: 0.000022772540581391345",
            "extra": "mean: 977.0622255753874 nsec\nrounds: 81301"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 809007.0333722251,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026683846747140118",
            "extra": "mean: 1.236083196745311 usec\nrounds: 192308"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 1742022.9433240672,
            "unit": "iter/sec",
            "range": "stddev: 7.700135234810132e-7",
            "extra": "mean: 574.04525229268 nsec\nrounds: 36902"
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
          "id": "7a8282e0d28e29c66db7a51b77bbb0cdce411426",
          "message": "Merge pull request #3 from NathanielRN/worse-performance\n\nMake the performance worse",
          "timestamp": "2020-12-10T19:33:26Z",
          "tree_id": "e2c7bb1df3e8b9d41bf86890ada8fc65e5cd573c",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/7a8282e0d28e29c66db7a51b77bbb0cdce411426"
        },
        "date": 1607628857449,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 216065.76792157537,
            "unit": "iter/sec",
            "range": "stddev: 2.8487463521057913e-7",
            "extra": "mean: 4.628220423898738 usec\nrounds: 66667"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 6882.114036825037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018390673213981536",
            "extra": "mean: 145.30418918506257 usec\nrounds: 6676"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 148713.89611333597,
            "unit": "iter/sec",
            "range": "stddev: 3.5250482189045723e-7",
            "extra": "mean: 6.72432117061806 usec\nrounds: 74627"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 383.69722689900203,
            "unit": "iter/sec",
            "range": "stddev: 0.000006091869533439034",
            "extra": "mean: 2.6062215984251123 msec\nrounds: 381"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 237.10556832432619,
            "unit": "iter/sec",
            "range": "stddev: 0.0000389220079787801",
            "extra": "mean: 4.217530642857549 msec\nrounds: 238"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 791500.6385565453,
            "unit": "iter/sec",
            "range": "stddev: 2.941786355963302e-7",
            "extra": "mean: 1.2634228594226957 usec\nrounds: 192308"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - core": [
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
          "id": "d511cbd0460bb0b45040942ee9b70aea037e15d6",
          "message": "Merge pull request #6 from NathanielRN/add-python-version-namespace\n\nAdd python version namespace + new package",
          "timestamp": "2020-12-10T19:05:36Z",
          "tree_id": "acae648579aef49638394fa45c45827841295317",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/d511cbd0460bb0b45040942ee9b70aea037e15d6"
        },
        "date": 1607627187410,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 217435.29000219604,
            "unit": "iter/sec",
            "range": "stddev: 2.2678567148859343e-7",
            "extra": "mean: 4.599069451835073 usec\nrounds: 78126"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 7276.670358128806,
            "unit": "iter/sec",
            "range": "stddev: 0.000001316106201068413",
            "extra": "mean: 137.42549143825033 usec\nrounds: 7008"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 144239.5209664836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012945921636497222",
            "extra": "mean: 6.932912653199717 usec\nrounds: 71943"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 1168803.0864798473,
            "unit": "iter/sec",
            "range": "stddev: 1.0383583559220777e-7",
            "extra": "mean: 855.5761116372122 nsec\nrounds: 178540"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 942231.8465295149,
            "unit": "iter/sec",
            "range": "stddev: 5.0197898750129875e-8",
            "extra": "mean: 1.061309913990197 usec\nrounds: 175439"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 2055742.8821925547,
            "unit": "iter/sec",
            "range": "stddev: 2.4393099036561026e-8",
            "extra": "mean: 486.4421560992905 nsec\nrounds: 178572"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - core": [
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
          "id": "d511cbd0460bb0b45040942ee9b70aea037e15d6",
          "message": "Merge pull request #6 from NathanielRN/add-python-version-namespace\n\nAdd python version namespace + new package",
          "timestamp": "2020-12-10T19:05:36Z",
          "tree_id": "acae648579aef49638394fa45c45827841295317",
          "url": "https://github.com/NathanielRN/github-benchmarks-example/commit/d511cbd0460bb0b45040942ee9b70aea037e15d6"
        },
        "date": 1607627209051,
        "tool": "pytest",
        "benches": [
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_1",
            "value": 17726903.468147423,
            "unit": "iter/sec",
            "range": "stddev: 1.0252048903836267e-7",
            "extra": "mean: 56.4114314604381 nsec\nrounds: 196079"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_2",
            "value": 103768.55560392165,
            "unit": "iter/sec",
            "range": "stddev: 0.00001499902220446413",
            "extra": "mean: 9.63683067746399 usec\nrounds: 136987"
          },
          {
            "name": "performance/benchmarks/test_benchmark_knapsack.py::test_core_1_benchmark_3",
            "value": 3054019.5017173677,
            "unit": "iter/sec",
            "range": "stddev: 5.432270220748395e-7",
            "extra": "mean: 327.4373328126071 nsec\nrounds: 37174"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive",
            "value": 262016738.8417757,
            "unit": "iter/sec",
            "range": "stddev: 2.3655963037947025e-9",
            "extra": "mean: 3.816550058668163 nsec\nrounds: 200000"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_fibonacci_recursive_memoized",
            "value": 6580744.008620495,
            "unit": "iter/sec",
            "range": "stddev: 6.93400088693892e-8",
            "extra": "mean: 151.95850175755177 nsec\nrounds: 75188"
          },
          {
            "name": "performance/benchmarks/test_benchmark_fibonacci.py::test_core_2_benchmark_2",
            "value": 10919855.198959656,
            "unit": "iter/sec",
            "range": "stddev: 2.8567960178591175e-8",
            "extra": "mean: 91.57630589237426 nsec\nrounds: 133334"
          }
        ]
      }
    ]
  }
}