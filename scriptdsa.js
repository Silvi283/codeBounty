document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
    const contentArea = document.querySelector(".content");

    // Data for each topic
    const topicContent = {
        "Arrays": "<h2>Arrays</h2><p>Arrays are a collection of elements stored at contiguous memory locations.</p>",
        "Linked List": "<h2>Linked List</h2><p>A linked list is a linear data structure where elements are linked using pointers.</p>",
        "Stack": "<h2>Stack</h2><p>Stack is a LIFO (Last In, First Out) data structure.</p>",
        "Queue": "<h2>Queue</h2><p>Queue is a FIFO (First In, First Out) data structure.</p>",
        "Sorting": "<h2>Sorting</h2><p>Sorting algorithms arrange elements in a specific order.</p>",
        "Searching": "<h2>Searching</h2><p>Searching algorithms find an element in a dataset.</p>",
        "Graph Algorithms": "<h2>Graph Algorithms</h2><p>Graph algorithms help solve problems related to graphs.</p>",
        "Divide & Conquer": "<h2>Divide & Conquer</h2><p>Divide and Conquer is an algorithm design paradigm.</p>",
        "Dynamic Programming": "<h2>Dynamic Programming</h2><p>DP is used to solve problems by breaking them down into overlapping subproblems.</p>",
        "Greedy Algorithms": "<h2>Greedy Algorithms</h2><p>Greedy algorithms make locally optimal choices at each step.</p>",
    };

    // Handle sidebar clicks
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();  // Prevent page reload
            const topic = this.dataset.topic;  // Get topic name
            if (topicContent[topic]) {
                contentArea.innerHTML = topicContent[topic];  // Load content dynamically
            }
        });
    });
});
