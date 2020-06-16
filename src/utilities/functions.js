

export function checkWinner(boxes) {
    // Our winning combinations array of array's
    const rows = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    // Iterate over array with winning combinations with for-loop
    for (let i = 0; i < rows.length; i++) {
        const [a,b,c] = rows[i]
            if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
                // Return the winner ('X' or 'O')
                return boxes[a]
            }
    }
    // If no winner, do nothing
    return null
}

export function allBoxesFilled(boxes) {
    // Declare variable (count) to store number of clicked boxes
    let count = 0 

    // Iterate over all boxes
    boxes.forEach(function (item) {
        // Check if box is clicked (not null)
        if (item !== null) {
            // If not-null, increase count by 1
            count++
        }
    })

    // Check if all boxes are clicked/filled
    if (count === 9) {
        return true
    } else {
        return false
    }
  
}