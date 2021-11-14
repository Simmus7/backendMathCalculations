const rectangleController = {};

rectangleController.rectangleAreaAndPerimeter = (req, res) => {
    let { height, large } = req.body;
    if (isNaN(height) || height < 0 || isNaN(large) || large < 0 || large>230000000 || height>230000000){
        res.json("Unvalid numbers")
    }
    else {
        var toReturn = {
            area : height*large,
            perimeter: height*2+large*2
        }
        res.json(toReturn)
    }
}



module.exports = rectangleController;