const pdf = require("html-pdf");
const {render, renderFile} = require('pug')
var path = require("path");
var pugPath = path.join(__dirname, '../../views/templateOne.pug')


var options = { format: "Letter" };

module.exports.createPdf = async (req, res, next) => {
  Promise.resolve(true)
    .then(async () => {
      //render the pug in html
      const output = renderFile(pugPath, {title: 'Just Testing here', another: 'Another', datas: ['Roqeeb', 2, 3, 4, 5]})
      
      // convert html to pdf
      pdf.create(output, options).toFile("Resume.pdf", (err, result) => {
        if (err) {
          throw err;
        }
        res.json({
          success: true,
          message: result,
        });
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        success: false,
        errorCode: "",
        message: error,
      });
    });
};
