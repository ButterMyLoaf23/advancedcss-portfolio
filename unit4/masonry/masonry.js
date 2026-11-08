const masonryGrid = document.querySelector(".masonry-demo");

// I let the page keep its normal flow if the external library is not there.
if (masonryGrid && window.Masonry) {
    new Masonry(masonryGrid, {
        itemSelector: ".masonry-item",
        percentPosition: true,
        gutter: 16,
    });
}
