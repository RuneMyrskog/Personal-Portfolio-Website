import {BLOCKED, UNBLOCKED, CLOSED, OPEN, PATH, Node, aStarIteration, aStarAlgorithm} from './AStar';

var canvas, BLOCKBUFFER, BLOCKWIDTH, BLOCKHEIGHT, CANVASWIDTH, CANVASHEIGHT, ctx, sxBox, syBox, exBox, eyBox, visualizeCheckBox, keepObsticlesCheckBox;

export function initialize() {
    canvas = document.getElementById("gridCanvas")
    canvas.width = 800;
    canvas.height = 500;

    CANVASWIDTH = canvas.width;
    CANVASHEIGHT = canvas.height;

    BLOCKBUFFER = 1 // 4200/(ROWS*COLS)
    BLOCKWIDTH = (CANVASWIDTH - BLOCKBUFFER*(COLS+1)) / COLS
    BLOCKHEIGHT = (CANVASHEIGHT - BLOCKBUFFER*(ROWS+1)) / ROWS

    console.log("BLOCKWIDTH: " + BLOCKWIDTH);
    console.log("BLOCKHEIGHT: " + BLOCKHEIGHT);
    console.log("BLOCKBUFFER: " + BLOCKBUFFER);
    console.log()


    ctx = canvas.getContext("2d")

    sxBox = document.getElementById("sxBox")
    syBox = document.getElementById("syBox")
    exBox = document.getElementById("exBox")
    eyBox = document.getElementById("eyBox")

    visualizeCheckBox = document.getElementById("visualizeCheckBox")
    visualizeCheckBox.checked = true;
    keepObsticlesCheckBox = document.getElementById("keepObsticlesCheckBox")
    console.log("OWIEFJF");
    console.log(keepObsticlesCheckBox);

    document.getElementById("setStartBtn").onclick = document.getElementById("setEndBtn").onclick = function(e){if(!running){setEndPoint(e)}}
    document.getElementById("resetButton").onclick = reset
    document.getElementById("runAlgorithmButton").onclick = function(){if(!running)runAlgorithm()}

    var mouseIsDown = false
    canvas.addEventListener("mousedown", function mousedown(e){mouseIsDown=true;if(!running)editGrid(e)})
    canvas.addEventListener("mousemove", function mousemove(e){if(mouseIsDown && !running){editGrid(e)}})
    canvas.addEventListener("mouseup", function mouseup(){mouseIsDown = false})
    reset();
}

const OPENCOLOR = "#00FF00"
const CLOSEDCOLOR = "#FF0000"
const PATHCOLOR = "#fff700"
const UNBLOCKEDCOLOR = "#AA00FF"
const BACKGROUNDCOLOR = "#FFFFFF"
const BLOCKEDCOLOR = "#000000"

const COLS = 60
const ROWS = 40


var grid = []
var startPos = {x: 2, y: 2}
var endPos = {x: 55, y: 38}

function getDisplayCoord(pos){

    var xPix = pos.x * (BLOCKBUFFER + BLOCKWIDTH) + BLOCKBUFFER
    var yPix = pos.y * (BLOCKBUFFER + BLOCKHEIGHT) + BLOCKBUFFER
    
    return {x: xPix, y: yPix}
}

function getGridCoord(pixel){
    console.log(pixel);
    var gridX = Math.floor((pixel.x - BLOCKBUFFER) / (BLOCKBUFFER + BLOCKWIDTH))
    var gridY = Math.floor((pixel.y - BLOCKBUFFER) / (BLOCKBUFFER + BLOCKHEIGHT))
    return {x: gridX, y: gridY}
}


function setEndPoint(e){
    let entryBoxes = [exBox, eyBox]
    let endpoint = endPos

    if(e.target.id === "setStartBtn"){
        entryBoxes = [sxBox, syBox]
        endpoint = startPos
    }
    
    if(!isValidEntry(entryBoxes)){
        entryBoxes[0].value = entryBoxes[1].value = "!"
        return
    }
    
    grid[endpoint.x][endpoint.y] = UNBLOCKED
    paintBlock(endpoint, UNBLOCKEDCOLOR)

    endpoint.x = parseInt(entryBoxes[0].value)
    endpoint.y = parseInt(entryBoxes[1].value)

    grid[endpoint.x][endpoint.y] = PATH
    paintBlock(endpoint, PATHCOLOR)
}

function isValidEntry(entryBoxes){
    let x = parseInt(entryBoxes[0].value); let y = parseInt(entryBoxes[1].value)
    if(!isNaN(x) && !isNaN(y)){
        if(-1 < x && x < COLS && -1 < y && y < ROWS){
            return true
        }
    }
    return false
}


export function reset(){
    running = false
    if(keepObsticlesCheckBox.checked){
        for(let i = 0; i < COLS; i++){
            for(let j = 0; j < ROWS; j++){
                if(!isEndpoint({x: i, y: j})){
                    if(grid[i][j] !== BLOCKED){
                        grid[i][j] = UNBLOCKED
                    }
                }
            }
        }
    }else{
        grid = []
        for (let i = 0; i < COLS; i ++){
            let row = []
            for(let j = 0; j < ROWS; j++){
                if(isEndpoint({x: i, y: j})){
                    row.push(PATH)
                }else{      
                    row.push(UNBLOCKED)
                }
            }
            grid.push(row)
            
        }
    }
    refreshGrid()
}

var running = false
function editGrid(e){
    var gridCoord = getGridCoord({x: e.pageX - canvas.offsetLeft, y: e.pageY - canvas.offsetTop})
    console.log(gridCoord)
    if(!isEndpoint(gridCoord)){
        console.log(gridCoord.x)
        grid[gridCoord.x][gridCoord.y] = BLOCKED
        
        paintBlock(gridCoord, BLOCKEDCOLOR)
    }
}


function runAlgorithm(){
    running = true
    let openSet = [new Node(startPos, null, 0, 0, 0)]
    if(visualizeCheckBox.checked){
        aStarVisualize(openSet)
    }else{
        paintPath(aStarAlgorithm(grid, startPos, endPos))
    }
}

function aStarVisualize(openSet){
    var path = null
    let finished = false
    for(let iteration = 0; iteration < 20; iteration ++){
        if((path = aStarIteration(grid, openSet, endPos)) != null){
            finished = true
            break
        }
    }
    if(!finished)setTimeout(function(){aStarVisualize(openSet)}, 1000/30)
    refreshGrid()
    
}

/*
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}
*/

function paintPath(path){
    for(let i = 0; i < path.length; i++){
        paintBlock(path[i], PATHCOLOR)
    }
}

function isEndpoint(pos){
    return ((startPos.x === pos.x && startPos.y === pos.y) 
            || (endPos.x === pos.x && endPos.y === pos.y))
}

function paintBlock(pos, color){
    ctx.fillStyle = color
    let pixel = getDisplayCoord(pos)
    ctx.fillRect(pixel.x, pixel.y, BLOCKWIDTH, BLOCKHEIGHT)
}

function refreshGrid(){
    console.log("updating grid")
    ctx.fillStyle = BACKGROUNDCOLOR
    ctx.fillRect(0,0,CANVASWIDTH, CANVASHEIGHT)
    for(let i = 0; i < COLS; i++){
        for(let j = 0; j < ROWS; j++){
            let color = UNBLOCKEDCOLOR;
            if(isEndpoint({x: i, y: j})){
                color = PATHCOLOR
            }else{
                switch(grid[i][j]){
                    case PATH:
                        color = PATHCOLOR
                        break
                    case UNBLOCKED:
                        color = UNBLOCKEDCOLOR
                        break
                    case BLOCKED:
                        color = BLOCKEDCOLOR
                        break
                    case OPEN:
                        color = OPENCOLOR
                        break
                    case CLOSED:
                        color = CLOSEDCOLOR
                        break
                    default:
                        color = BLOCKEDCOLOR
                }
            }
            paintBlock({x: i, y: j}, color)
        }
    }
}

//reset()
