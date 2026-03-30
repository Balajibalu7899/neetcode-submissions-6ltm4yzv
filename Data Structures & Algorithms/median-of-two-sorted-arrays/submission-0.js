class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        if(A.length > B.length){
            [A,B]=[B,A];
        }
        let total = A.length + B.length;
        let half = Math.floor((total + 1)/2);
        let L = 0;
        let R = A.length;
        while(true){
            let med1 = Math.floor((R + L)/2);
            let med2 = half - med1;
             let Aleft = med1 > 0 ? A[med1-1]: Number.MIN_SAFE_INTEGER;
             let Aright =med1 <A.length?A[med1]:Number.MAX_SAFE_INTEGER;
             let Bleft =med2 > 0? B[med2-1]:Number.MIN_SAFE_INTEGER;
             let Bright =med2 < B.length? B[med2]:Number.MAX_SAFE_INTEGER;
            if(Aleft <= Bright && Bleft <= Aright){
                if(total % 2===0){
                    return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
                }else{
                  return Math.max(Aleft, Bleft);
                }
            }else if(Aleft > Bright){
                R = med1 - 1;
            }else if(Bleft > Aright){
                L = med1 + 1;
            }
        }
        return -1;
    }
}
