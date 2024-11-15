//PEGA A IMAGEM EM TRANSFORMA EM PDF APENAS **

var novaimagem,showimg;

function loadimg(event){
      const bgDiv = document.getElementById('result');
      bgDiv.style.backgroundImage = "url('"+URL.createObjectURL(event.target.files[0])+"')";
      bgDiv.style.width = "300px";
      
      bgDiv.style.height = "auto";
      bgDiv.style.backgroundSize = "cover";
      bgDiv.style.backgroundPositionX = "center";
      bgDiv.style.backgroundPositionY = "center";
      bgDiv.style.backgroundRepeat = "no-repeat";

      
      console.log(event.target.files[0]);
    //  showimg = document.getElementById('ShowImg');
     // showimg.style.backgroundImage = bgDiv
      bgDiv.src =  URL.createObjectURL(event.target.files[0]);
      newimg = document.createElement('img');
      newimg.src =  URL.createObjectURL(event.target.files[0]);
      let imgodwn = document.getElementById('cont')
      imgodwn.style.display = ('Flex')
      let ShowImg123 = document.getElementById('result')
      ShowImg123.style.display = ('Block')
      // showimg.onload = function(){
      //       URL.revokeObjectURL(showimg.src)
           
      // }
}


function PdfDown(){

 

      const doc = new jsPDF({
            orientation: "landscape",
            unit: "mm",
            format: "a4",
          });    

          const pageWidth = doc.internal.pageSize.getWidth();
          const pageHeight = doc.internal.pageSize.getHeight();
        
         
          const originalImageWidth = 297;
          const originalImageHeight = 210; 
        
      
          const ratio = Math.min(pageWidth / originalImageWidth, pageHeight / originalImageHeight);
          const scaledWidth = originalImageWidth * ratio;
          const scaledHeight = originalImageHeight * ratio;
        
          const xPosition = (pageWidth - scaledWidth) / 2;
          const yPosition = (pageHeight - scaledHeight) / 2;

          doc.addImage(newimg, "JPEG", xPosition, yPosition, scaledWidth, scaledHeight);
          doc.save('IMG-to-PDFFileConverted.pdf');
}

function PdfDownPortrait(){
      /*  const doc = new jsPDF({
              orientation: 'landscape',
              unit: "mm",
              format: 'letter'
            })*/
       
      /*
        const doc = new jsPDF({
              orientation: "portrait", 
              unit: "mm",
              format: 'a4',
              Align: 'Center',
              Display:'Flex'
              
              
            });
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const xPosition = (pageWidth - textWidth) / 2
        console.log(`Largura: ${pageWidth}mm, Altura: ${pageHeight}mm`);
  
        doc.addImage(newimg,"JPEG",0,0,);
        doc.save('IMG-to-PDFFileConverted.pdf');*/
      const doc = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
          });    

          const pageWidth = doc.internal.pageSize.getWidth();
          const pageHeight = doc.internal.pageSize.getHeight();
        
         
          const originalImageWidth = 598.28;
          const originalImageHeight = 841.89; 
        
      
          const ratio = Math.min(pageWidth / originalImageWidth, pageHeight / originalImageHeight);
          const scaledWidth = originalImageWidth * ratio;
          const scaledHeight = originalImageHeight * ratio;
        
          const xPosition = (pageWidth - scaledWidth) / 2;
          const yPosition = (pageHeight - scaledHeight) / 2;

          doc.addImage(newimg, "JPEG", xPosition, yPosition, scaledWidth, scaledHeight);
          doc.save('IMG-to-PDFFileConverted.pdf');
  }