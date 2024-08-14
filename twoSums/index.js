const twoSum_v1 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j =  i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i , j]
            }
        }
    }
    return [];
}

const twoSum_v2 =  (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i ++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

module.exports = {
    twoSum_v1,
    twoSum_v2
}