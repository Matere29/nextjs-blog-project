exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 8219:
/***/ ((module) => {

// Exports
module.exports = {
	"post": "post-item_post__nJZXo",
	"image": "post-item_image__Lr4BI",
	"content": "post-item_content__C12vp"
};


/***/ }),

/***/ 3065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ posts_grid)
});

// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4512);
// EXTERNAL MODULE: ../../../node_modules/next/link.js
var next_link = __webpack_require__(9218);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../../../node_modules/next/image.js
var next_image = __webpack_require__(3875);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/posts/post-item.module.css
var post_item_module = __webpack_require__(8219);
var post_item_module_default = /*#__PURE__*/__webpack_require__.n(post_item_module);
;// CONCATENATED MODULE: ./components/posts/post-item.js




function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;
    return /*#__PURE__*/ jsx_runtime.jsx("li", {
        className: (post_item_module_default()).post,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
            href: linkPath,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (post_item_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: imagePath,
                        alt: title,
                        width: 300,
                        height: 200,
                        layout: "responsive"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (post_item_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("time", {
                            children: formattedDate
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: excerpt
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const post_item = (PostItem);

;// CONCATENATED MODULE: ./components/posts/posts-grid.js



function PostsGrid(props) {
    const { posts } = props;
    return /*#__PURE__*/ jsx_runtime.jsx("ul", {
        className: (post_item_module_default()).grid,
        children: posts.map((post)=>/*#__PURE__*/ jsx_runtime.jsx(post_item, {
                post: post
            }, post.slug))
    });
}
/* harmony default export */ const posts_grid = (PostsGrid);


/***/ })

};
;