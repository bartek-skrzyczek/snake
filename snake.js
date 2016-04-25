/*Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz"
for numbers that are divisible by both 3 and 5.
(This is actually an interview question that has been claimed to weed
out a significant percentage of programmer candidates. So if you solved it,
you’re now allowed to feel good about yourself.)


*/

// GLOBAL VARIABLES

// CONSTANTS

var COLS = 26;
var ROWS = 26;

//IDs
var EMPTY = 0;
var SNAKE = 1;
var FRUIT = 2;

var grid = {
    
    width: null,
    height: null,
    _grid: null,
    
    init: function(d,c,r) {
        this.width = c;
        this.height = r;
        
        this._grid = [];
        for (var x = 0; x < c; x++) {
            this._grid.push([]);
           for (var y=0; y < r; y++) {
               this._grid[x].push(d);
           }
        }
    },
    
    set: function(val, x,y) {
        this._grid[x][y] = val;
    },
    
    get: function(x,y) {
        return this._grid[x][y];
    }
    
}

var snake = {
    
    direction: null,
    _queue: null,
    
    init: function(d,x,y) {
        
    },
    
    insert: function(x,y) {
        
    },
    
    remove: function() {
        
    }
    
}

function setFood() {}

function main() {}

function init() {}

function loop() {}

function update() {}

function draw() {}

main();