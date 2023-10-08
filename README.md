# Math Pyramid AI Solver
Train an AI model to solve a [math pyramid](https://tobias-gaenzler.github.io/math-pyramid-react/).

<img src="https://github.com/tobias-gaenzler/math-pyramid/blob/main/src/main/resources/images/help_start.jpg?raw=true" height="200" />

This project is intended as a simple training example for deep learning and not for finding an efficient solution for math pyramids (as math pyramids can be easily solved by simple algorithms).

## Data
We train for a math pyramid where the base is three blocks wide (size=3) and the pyramid has six blocks.  
The math pyramid starts with fixed values for three of the blocks and the other three blocks need to be filled with correct values.  

The blocks are indexed, starting in the lower left corner:
```
        x5=24
    x3=9     x4=15
x0=7    x1=2    x2=13
```


Data is represented as follows, where _x_ is the input (values provided at start, unknown values replaced by zero)
and _y_ is the correct solution:
``` 
x0  x1  x2  x3  x4  x5  y0  y1  y2  y3  y4  y5
 7   2  13   0   0   0   7   2  13   9  15  24
```

There are two datasets, one with 1000 and one with 10000 examples.

