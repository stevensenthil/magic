var row=document.querySelector("#row");
row.setAttribute("class","row align-items-center justify-content-evenly");



let card=[
          {
			  image:"images/project-img1.jpg",
			  head:"Edge",
			  paragraph:"Rsp Home <br> Tp puram",
			  flat:"2 BHk Flates <br>",
			  icon:"bi bi-currency-rupee",
			  lakes:"78.3 Lac",
			  lakdetail:"onwards",
			  foundation:"Marketed by jones foundation Pvt Ltd."
		  },
		   {
			  image:"images/project-img2.jpg",
			  head:"Pace Prana",
			  paragraph:"Sk villa <br> Guindy",
			  flat:"2 BHk Flates <br>",
			  icon:"bi bi-currency-rupee",
			  lakes:"1.03 Cr",
			  lakdetail:"onwards",
			  foundation:"Marketed by jones foundation Pvt Ltd."
		  },
		   {
			  image:"images/project-img3.jpg",
			  head:"Pearl Queen Park",
			  paragraph:"Residential Home <br> Bangalore",
			  flat:"2 BHk Flates <br>",
			  icon:"bi bi-currency-rupee",
			  lakes:"68.3 Lac",
			  lakdetail:"onwards",
			  foundation:"Marketed by jones foundation Pvt Ltd."
		  },
		  
		   {
			  image:"images/project-img4.jpg",
			  head:"Senthil Avenue",
			  paragraph:"Rlk Home <br> Chennai",
			  flat:"2 BHK Flates <br>",
			  icon:"bi bi-currency-rupee",
			  lakes:"25.3 Lac",
			  lakdetail:"onwards",
			  foundation:"Marketed by jones foundation Pvt Ltd."
		  },
		  
		   {
			  image:"images/project-img5.jpg",
			  head:"Jones The Breeze",
			  paragraph:"Senthil Foundation<br> Tp puram",
			  flat:"2,3 BHk Flates <br>",
			  icon:"bi bi-currency-rupee",
			  lakes:"53.3 Lac",
			  lakdetail:"onwards",
			  foundation:"Marketed by jones foundation Pvt Ltd."
		  },
		  
		   {
			  image:"images/project-img6.jpg",
			  head:"Senthil Cassia",
			  paragraph:"Sanjay Home <br> Tp puram",
			  flat:"2 BHk Flates <br>",
			  icon:"bi bi-currency-rupee",
			  lakes:"39.3 Lac",
			  lakdetail:"onwards",
			  foundation:"Marketed by jones foundation Pvt Ltd."
		  }
		 ]
		 
		 card.map((e)=>{
		
		 var column1=document.createElement("div");
        column1.setAttribute("class","col-lg-4 d-flex mb-4");
		
		var columnimg=document.createElement("div");
        columnimg.setAttribute("class","col-lg-4 card shadow rounded");
		
		var image=document.createElement("img");
        image.setAttribute("src",e.image);
        image.style.width="100%";
		
		
		var content=document.createElement("div");
        content.setAttribute("class","col-lg-8 border shadow rounded px-3 py-2");
		
		var head=document.createElement("h4");
        head.setAttribute("class","");
        head.innerHTML=e.head;
		
		var paragraph=document.createElement("p");
        paragraph.setAttribute("class","");
        paragraph.innerHTML=e.paragraph;
		
		var detail=document.createElement("div");
        detail.setAttribute("class","");
		
		
		var flat=document.createElement("span");
        flat.setAttribute("class","");
        flat.innerHTML=e.flat;
		
		var icon=document.createElement("i");
        icon.setAttribute("class",e.icon);
		
		var lakes=document.createElement("span");
        lakes.setAttribute("class","fw-bold me-2");
        lakes.innerHTML=e.lakes;
		
		var lakdetail=document.createElement("span");
        lakdetail.setAttribute("class","");
        lakdetail.innerHTML=e.lakdetail;
		
		var foundation=document.createElement("span");
        foundation.setAttribute("class","");
        foundation.innerHTML=e.foundation;
		
		
		
		
		row.append(column1);
		// column.append(column1);
		column1.append(columnimg,content);
		columnimg.append(image);
        content.append(head,paragraph,detail);
        detail.append(flat,icon,lakes,lakdetail,foundation);		
		 })