function build(){
    var net = new Net();

    net.addLayer(2);

    net.addLayer(2);
    net.addLayer(1);
  


    net.setInputValues([3,3])
    net.setOutputValues([1])

    net.weights[0].setValues([[.5, .5],[.5, .5]])
    net.weights[1].setValues([[.5],[.5]])

    // net.training = {
    //         "inputs": [ [-4,3] , [2,5] , [1,3]],
    //         "outputs":[[1], [2], [3]]
    // }

    return net;

}