namespace SomeNameSpaceName { 
    export interface ISomeInterfaceName {      }  
    export class SomeClassName {      }  
 }

 

 console.log(SomeNameSpaceName.SomeClassName)

namespace BaseDrawing { 
    export interface IShape { 
        draw:()=>void ; 
    }
}

namespace Drawing { 
    export class Circle implements BaseDrawing.IShape { 
        public draw() { 
            console.log("Circle is drawn"); 
        }  
    }
}

namespace Drawing { 
    export class Triangle implements BaseDrawing.IShape { 
        public draw() { 
            console.log("Triangle is drawn"); 
        } 
    } 
}

function drawAllShapes(shape:BaseDrawing.IShape) { 
    shape.draw(); 
} 
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());