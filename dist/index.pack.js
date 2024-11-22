/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./classes.ts":
/*!********************!*\
  !*** ./classes.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var MainProperty = /** @class */ (function () {
    function MainProperty(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
    return MainProperty;
}());
exports["default"] = MainProperty;


/***/ }),

/***/ "./enums.ts":
/*!******************!*\
  !*** ./enums.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoyaltyUser = exports.Permissions = void 0;
var Permissions;
(function (Permissions) {
    Permissions["ADMIN"] = "ADMIN";
    Permissions["READ_ONLY"] = "READ_ONLY";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser = exports.LoyaltyUser || (exports.LoyaltyUser = {}));


/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTopTwoReviews = exports.makeMultiple = exports.showDetails = exports.populateUser = exports.showReviewTotal = void 0;
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
var reviewTotalDisplay = document.querySelector("#reviews");
var enums_1 = __webpack_require__(/*! ./enums */ "./enums.ts");
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = enums_1.LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        value.toString() +
            " Review" +
            makeMultiple(value) +
            "| last reviewed by " +
            reviewer +
            " " +
            iconDisplay;
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;
function showDetails(value, element, price) {
    if (value) {
        var priceDisplay = document.createElement("div");
        priceDisplay.innerHTML = price.toString() + "/night";
        element.appendChild(priceDisplay);
    }
}
exports.showDetails = showDetails;
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return "s";
    }
    else
        return "";
}
exports.makeMultiple = makeMultiple;
function getTopTwoReviews(reviews) {
    var sortedReviews = reviews.sort(function (a, b) { return b.stars - a.stars; });
    return sortedReviews.slice(0, 2);
}
exports.getTopTwoReviews = getTopTwoReviews;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(/*! ./utils */ "./utils.ts");
var enums_1 = __webpack_require__(/*! ./enums */ "./enums.ts");
var classes_1 = __webpack_require__(/*! ./classes */ "./classes.ts");
var propertyContainer = document.querySelector(".properties");
var reviewContainer = document.querySelector(".reviews");
var container = document.querySelector(".container");
var button = document.querySelector("button");
var footer = document.querySelector(".footer");
var IsLoggedIn;
// Reviews
var reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: enums_1.LoyaltyUser.BRONZE_USER,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: enums_1.LoyaltyUser.SILVER_USER,
        date: "27-03-2021",
    },
];
var you = {
    firstName: "Bobby",
    lastName: "Brown",
    permissions: enums_1.Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
//Properties
var properties = [
    {
        image: "images/colombia-property.jpg",
        title: "Colombian Shack",
        price: 45,
        location: {
            firstLine: "shack 37",
            city: "Bogota",
            code: 45632,
            country: "Colombia",
        },
        contact: [+1123495082908, "marywinkle@gmail.com"],
        isAvailable: true,
    },
    {
        image: "images/poland-property.jpg",
        title: "Polish Cottage",
        price: 30,
        location: {
            firstLine: "no 23",
            city: "Gdansk",
            code: 343903,
            country: "Poland",
        },
        contact: [+1123495082908, "garydavis@hotmail.com"],
        isAvailable: false,
    },
    {
        image: "images/london-property.jpg",
        title: "London Flat",
        price: 25,
        location: {
            firstLine: "flat 15",
            city: "London",
            code: "SW4 5XW",
            country: "United Kingdom",
        },
        contact: [+1123495082908, "andyluger@aol.com"],
        isAvailable: true,
    },
    {
        image: "images/malaysian-hotel.jpeg",
        title: "Malia Hotel",
        price: 35,
        location: {
            firstLine: "Room 4",
            city: "Malia",
            code: 45334,
            country: "Malaysia",
        },
        contact: [+60349822083, "lee34@gmail.com"],
        isAvailable: false,
    },
];
// Functions
// Functions
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.firstName);
// Add the properties
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    var image_1 = document.createElement("img");
    image_1.setAttribute("src", properties[i].image);
    card.appendChild(image_1);
    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);
    propertyContainer.appendChild(card);
}
var count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        var topTwo = (0, utils_1.getTopTwoReviews)(array);
        for (var i = 0; i < topTwo.length; i++) {
            var card = document.createElement("div");
            card.classList.add("review-card");
            card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener("click", function () { return addReviews(reviews); });
// location
var currentLocation = ["Phokeng", "20:30", 12];
footer.innerHTML =
    currentLocation[0] +
        " " +
        currentLocation[1] +
        " " +
        currentLocation[2] +
        "°";
var yourMainProperty = new classes_1.default("images/italian-property.jpg", "Italian House", [
    {
        name: "Olive",
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: "12-04-2021",
    },
]);
var mainImageContainer = document.querySelector(".main-image");
var image = document.createElement("img");
image.setAttribute("src", yourMainProperty.src);
mainImageContainer.appendChild(image);

})();

/******/ })()
;
//# sourceMappingURL=index.pack.js.map