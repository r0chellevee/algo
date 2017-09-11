//Given two sorted arrays of varying lengths:
//Merge both arrays into one array in sorted order. 
//Solve in linear time.

var mergeArrays = (list1, list2) => {
    
var len1 = list1.length;
var len2 = list2.length;
var len = len1 + len2 - (Math.max(len1, len2) - Math.min(len1, len2));

var mergedList = new Array(len);
let i = 0;

    while (i < len) {
      mergedList[i] = list1[0] < list2[0] ? list1.shift() : list2.shift();
      
      i++;
    }
    
    mergedList = mergedList.concat(list1, list2);
    
    return mergedList;
}

var sample = [1, 3, 4, 8, 9, 14];
var sample2 = [2, 5, 7, 10, 11, 18];
var sample3 = [12, 19]


mergeArrays(sample, sample1);




