let counter = document.createElement("div");
counter.classList.add("col-md-4", "offset-md-4", "text-center", "rounded", "border", "align-middle")
counter.style.backgroundColor = "#fffff"
let counts = document.createElement("h1");
counts.classList.add("heading");
counts.innerHTML = "10";
counts.style.fontSize = "10rem";
setTimeout(() => {
    counts.innerHTML = "10"
    setTimeout(() => {
        counts.innerHTML = "9"
        setTimeout(() => {
            counts.innerHTML = "8"
            setTimeout(() => {
                counts.innerHTML = "7"
                setTimeout(() => {
                    counts.innerHTML = "6"
                    setTimeout(() => {
                        counts.innerHTML = "5"
                        setTimeout(() => {
                            counts.innerHTML = "4"
                            setTimeout(() => {
                                counts.innerHTML = "3"
                                setTimeout(() => {
                                    counts.innerHTML = "2"
                                    setTimeout(() => {
                                        counts.innerHTML = "1"
                                        setTimeout(() => {
                                            counts.innerHTML = "0"
                                            counts.innerHTML = "Happy Independence day"
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000); 
        }, 1000);
    }, 1000);
}, 1000);
counter.appendChild("counts");
document.body.append("counter");