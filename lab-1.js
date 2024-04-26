// Task 1
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
        throw new Error("Массив должен содержать ровно 10 цифр.");
    }
    var CounrtyCode = numbers.slice(0, 3).join("");
    var FirstPart = numbers.slice(3, 6).join("");
    var SecondPart = numbers.slice(6).join("");
    return "(".concat(CounrtyCode, ") ").concat(FirstPart, "-").concat(SecondPart);
}
var phoneNumberArray = [3, 7, 5, 6, 6, 8, 0, 2, 0, 8];
var PhoneNumber = createPhoneNumber(phoneNumberArray);
console.log(PhoneNumber);
// Task 2
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number < 0) {
            return 0;
        }
        var sum = 0;
        for (var i = 3; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
var result = Challenge.solution(10);
console.log(result);
var result2 = Challenge.solution(-10);
console.log(result2);
// Task 3
function rotateRight(nums, k) {
    if (k > nums.length || k < 0) {
        throw new Error("k должно быть меньше длины массива и положительным");
    }
    var rotated = nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));
    return rotated;
}
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 4;
var result3 = rotateRight(nums, k);
console.log(result3);
// Task 4
function findMedianSortedArrays(nums1, nums2) {
    var merged = __spreadArray(__spreadArray([], nums1, true), nums2, true).sort(function (a, b) { return a - b; });
    var n = merged.length;
    if (n % 2 === 0) {
        var mid1 = merged[n / 2];
        var mid2 = merged[n / 2 - 1];
        return (mid1 + mid2) / 2;
    }
    else {
        return merged[Math.floor(n / 2)];
    }
}
var nums1 = [1, 3];
var nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
var nums3 = [1, 2];
var nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4));
