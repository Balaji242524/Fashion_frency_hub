const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = doocument.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn.addEventListener("click", () => {
        item.scrollLeft += containerWidth;
        console.log("nxt");
        });
    });

    preBtn.addEventListener("click", () => {
        item.scrollright -= containerWidth;
        console.log("nxt");
    });