(function () {
    var checkbox = document.getElementById("checkbox"),
        path = document.getElementById("path"),
        bow = document.getElementById("bow"),
        male = document.getElementById("male");

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            male.classList.remove("ma");
            setTimeout(function () {
                path.classList.add("fe");
                male.classList.add("fe");
                bow.classList.add("fe");
            }, 390);
        } else {
            male.classList.add("ma");
            setTimeout(function () {
                path.classList.remove("fe");
                male.classList.remove("fe");
                bow.classList.remove("fe");
            }, 390);
        }
    });
})();
