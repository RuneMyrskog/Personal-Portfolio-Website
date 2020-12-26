

export const BLOCKED = 0
export const UNBLOCKED = 1
export const CLOSED = 2
export const OPEN = 3
export const PATH = 4

const DIRECTIONS = [{x: -1, y: 1}, {x: -1, y: 0}, {x: -1, y: -1}, {x: 0, y: -1}, {x: 1, y: -1}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 0, y: 1}]

export class Node{
    constructor(pos, parent, g, h, f){
        this.pos = pos
        this.g = g
        this.h = h
        this.f = f
        this.parent = parent
    }
}

function distance(pos1, pos2){

    return Math.sqrt((pos1.x - pos2.x)**2 + (pos1.y - pos2.y)**2)
}

function getFinalPath(node, grid){

    var path = []
    while (node != null){
        grid[node.pos.x][node.pos.y] = PATH
        path.push(node.pos)
        node = node.parent
    }

    return path //note in reverse order
}



function getNeighbourPosition(currPos, direction){
    return {x:(currPos.x + direction.x), y:(currPos.y + direction.y)}
}

function isAccessible(currPos, direction, grid){

    let neighbourPos = getNeighbourPosition(currPos, direction)

    if (-1 < neighbourPos.x && neighbourPos.x < grid.length 
        && -1 < neighbourPos.y && neighbourPos.y < grid[0].length){

        
        if ([BLOCKED, CLOSED].includes(grid[neighbourPos.x][neighbourPos.y])){
            return false
        }

        if (direction.x !== 0  && direction.y !== 0){
            if (grid[currPos.x + direction.x][currPos.y] === BLOCKED 
                && grid[currPos.x][currPos.y + direction.y] === BLOCKED){
                    return false
                }
        }
        return true
    }
    return false
}

function getValidNeighbourPositions(node, grid){

    var positions = []
    for(let i = 0; i < DIRECTIONS.length; i++){
        if(isAccessible(node.pos, DIRECTIONS[i], grid)){
            positions.push(getNeighbourPosition(node.pos, DIRECTIONS[i]))
        }
    }
    return positions
}


export function aStarAlgorithm(grid, startPos, endPos){
    let openSet = [new Node(startPos, null, 0, 0, 0)]
    let path = null
    while(openSet.length > 0  && path === null){
        path = aStarIteration(grid, openSet, endPos)
    }
    return path

}
export function aStarIteration(grid, openSet,  endPos){
    
    if (openSet.length > 0){

        let currBest = openSet.reduce((minNode, node) => node.f < minNode.f ? node : minNode)
        openSet.splice(openSet.indexOf(currBest), 1)

        grid[currBest.pos.x][currBest.pos.y] = CLOSED
        
        if(currBest.pos.x === endPos.x && currBest.pos.y === endPos.y){
            return getFinalPath(currBest, grid)
        }

        var neighbourPositions = getValidNeighbourPositions(currBest, grid)
        for(let i = 0; i < neighbourPositions.length; i++){
            var neighbourPos = neighbourPositions[i]

            let g = currBest.g + distance(neighbourPos, currBest.pos)
            let h = distance(neighbourPos, endPos)
            let f = g + h

            if(grid[neighbourPos.x][neighbourPos.y] === OPEN){
                for(let j = 0; j < openSet.length; j++){
                    let openNode = openSet[j]
                    if(openNode.pos.x === neighbourPos.x && openNode.pos.y === neighbourPos.y){
                        if(g < openNode.g){
                            openNode.parent = currBest
                            openNode.g = g
                            openNode.f = f
                        }
                    break
                    }
                }

            }else{
                var neighbour = new Node(neighbourPos, currBest, g, h, f)
                grid[neighbourPos.x][neighbourPos.y] = OPEN
                openSet.push(neighbour)

            }
        }
        return null;
    }
    return [];   
}