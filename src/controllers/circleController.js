const circleController = {};

circleController.circleAreaAndPerimeter = (req, res) => {
    let { radio } = req.body;
    if (isNaN(radio) || radio < 0 || radio > 2000000000){
        res.json("Unvalid numbers")
    }
    else {
        var values = calculate(radio)
        let areaAndPerimeter = {
            area : values.area,
            perimeter : values.perimeter
        }
        res.json(areaAndPerimeter)
    }

}
function calculate (r){
    let values = { 
        perimeter : 0, 
        area : 0
    }
    values.perimeter = 2*Math.PI*r;
    values.area = Math.PI*r*r;

    return values;
}

module.exports = circleController;