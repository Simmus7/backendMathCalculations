const circleController = {};

circleController.circleAreaAndPerimeter = (req, res) => {
    let { radio } = req.body;
    if (isNaN(radio) || radio < 0){
        res.json("Por favor ingrese un valor para el radio válido")
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