function sortColors(nums) {
    let left = 0;
    let right = nums.length - 1;
    let current = 0;

    while (current <= right) {
        if (nums[current] === 0) {
            // Swap nums[left] and nums[current]
            [nums[left], nums[current]] = [nums[current], nums[left]];
            left++;
            current++;
        } else if (nums[current] === 1) {
            current++;
        } else {
            // Swap nums[current] and nums[right]
            [nums[current], nums[right]] = [nums[right], nums[current]];
            right--;
        }
    }
}

sortColors([2,0,2,1,1,0]) // [0,0,1,1,2,2]