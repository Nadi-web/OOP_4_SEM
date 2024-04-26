// Task 1

function createPhoneNumber(numbers: number[]): string {
    if (numbers.length !== 10) {
        throw new Error("Массив должен содержать ровно 10 цифр.");
    }

    const CounrtyCode = numbers.slice(0, 3).join("");
    const FirstPart = numbers.slice(3, 6).join("");
    const SecondPart = numbers.slice(6).join("");

    return `(${CounrtyCode}) ${FirstPart}-${SecondPart}`;
}

const phoneNumberArray: number[] = [3,7,5,6,6,8,0,2,0,8];
const  PhoneNumber: string = createPhoneNumber(phoneNumberArray);
console.log(PhoneNumber); 

// Task 2

class Challenge {
    static solution(number: number): number {
        if (number < 0) {
            return 0;
        }

        let sum = 0;

        for (let i = 3; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }

        return sum;
    }
}
const result = Challenge.solution(10);
console.log(result); 
const result2 = Challenge.solution(-10);
console.log(result2); 

// Task 3

function rotateRight(nums: number[], k: number): number[] {

    if ( k > nums.length || k < 0 ) {
        throw new Error("k должно быть меньше длины массива и положительным");
    }

    const rotated = nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));
    return rotated;
}


const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 4;
const result3 = rotateRight(nums, k);
console.log(result3);

// Task 4

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const n = merged.length;
    
    if (n % 2 === 0) {
        const mid1 = merged[n / 2];
        const mid2 = merged[n / 2 - 1];
        return (mid1 + mid2) / 2;
    } else {
        return merged[Math.floor(n / 2)];
    }
}


const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); 
