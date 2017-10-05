//Rotate a given matrix 90° clockwise

function rotateImage(a) {
    for ( var i = 0; i < a.length; i++) {
        for (var j = 0; j < i; j++) {
            var temp = a[i][j]
            a[i][j] = a[j][i]
            a[j][i] = temp
        }
    }
    a.forEach((arr, i) => {
       arr.reverse()
    })
    return a
}

//****Refactored version****
var matrix = [[1,2,3], [4,5,6], [7,8,9]]
rotateImage(matrix)

function rotateImage(a) {
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < i; ++j) {
            [a[i][j], a[j][i]] = [a[j][i], a[i][j]]
        }
    }
    a.forEach(arr => arr.reverse())
    return a
}

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]
rotateImage(matrix)