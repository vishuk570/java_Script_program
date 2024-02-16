// Example usage:
let intervals = [[1,3],[2,6],[8,10],[15,18]];
// let mergedIntervals = mergeIntervals(intervals);
// console.log(mergedIntervals);
// Output: [[1,6],[8,10],[15,18]] Merge Intervals

function mergeIntervals(interval){
  interval.sort((a, b) => a[0] - b[0]);
  const result=interval[0];
  for(let i=1;i<interval.lengthi;i++){
    
  }
}

console.log(mergeIntervals(intervals))
