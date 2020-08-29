var arrayChange = function (a) {
    var count = 0;
    var keepGoing = true;
    while (keepGoing) {
        for (var i = 0; i < a.length; i++) {
            console.log("============== Iteration: " + i + " ==============");
            console.log("========== Current count: " + count + " ==========");
            if (a[i] <= a[i + 1]) {
                a[i] += 1;
                count++;
                a = a.sort();
            }
            var sorted = a.sort();
            console.log("Sorted: " + sorted);
            if (a === sorted) {
                keepGoing = false;
            }
        }
    }
    return count;
};
// Test
console.log(arrayChange([1, 1, 1])); // 3
