# Math Pyramid AI Solver
Train an AI model to solve a [math pyramid](https://tobias-gaenzler.github.io/math-pyramid-react/).

<img alt="Math pyramid rule" src="https://github.com/tobias-gaenzler/math-pyramid/blob/main/src/main/resources/images/help_start.jpg?raw=true" height="200" />

This project is intended as a simple training example for deep learning and not for finding an efficient solution for math pyramids (as math pyramids can be easily solved by simple algorithms).

## Data
We train for a math pyramid where the base is three blocks wide (size=3) and the pyramid has six blocks.  
Additionally, the values in the math pyramid blocks are restricted to integers between 0 and 100.

The math pyramid starts with fixed values for three of the blocks and the other three blocks need to be filled with correct values.   
The blocks are indexed, starting in the lower left corner:  
<img alt="Math pyramid input indices" src="https://github.com/tobias-gaenzler/math-pyramid-ai-solver/blob/main/field_indices_input_x.png?raw=true" height="200" />
<img alt="Math pyramid solution indices" src="https://github.com/tobias-gaenzler/math-pyramid-ai-solver/blob/main/field_indices_solution_y.png?raw=true" height="200" />


Data is represented as follows, where _x_ is the input (values provided at start, unknown values replaced by zero)
and _y_ is the correct solution:
``` 
x0  x1  x2  x3  x4  x5  y0  y1  y2  y3  y4  y5
 7   2  13   0   0   0   7   2  13   9  15  24
```

There are two datasets, one with 1000 and one with 10000 examples.
Data is scaled to values between zero and one before training the model.
This ensures, that the model will work with higher block values then 100.

## Model
Tensorflow keras is used to train the AI.  
* The model uses only dense layers and _relu_ activation function. There is no activation function for the output layer, as we need the actual values.
Increasing the number of layers and nodes did not improve the output after certain thresholds (e.g. more than 6 layers, more than 192 nodes).  
* Loss/Cost function (how well is the model performing/used for training): _Mean Squared Error_ (Squared L2-Norm). Other standard loss functions did not fare very well.  
* Metrics (Judge Performance, not used during training): Mean absolute error
* Optimizer: Adam did perform quite well, start learning rate: 0.001
* Callback: use a callback to stop training when certain loss is achieved
* Batch-Size: 64 did get good results
* epochs: 10000 (it does take a long time to get good results, heavily depends on start values, vanishing gradient -> loss increases and decreases after some time)

## Result
After tinkering a lot with hyperparameters and the model, a prediction of _99%_ on the test set can be achieved.



