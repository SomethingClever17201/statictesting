


//color



//98BF5B


function onLoad()
{

    let obj =  document.getElementById("image");
    let height = obj.height;
    obj.style.height = height + 'px';

    let infoObjects;


    $.getJSON('info.json', function(data) {
         //do stuff with your data here
         console.log(data);
         infoObjects = data;
 });


 let top = document.getElementById("artistName");
 let element = document.createElement("p");
 console.log(top);
 console.log(element);
 element.innerHTML = infoObjects.artistName;

 top.appendChild(newContent);




}


var x = 300;

var pos = "f";


function turnyBoi() {

    
    let bool = true;
    //let obj = document.getElementById("turny").style.width;
    let col = document.getElementById("turny").style.backgroundColor;


    const f = document.getElementsByClassName("front");
    const b = document.getElementsByClassName("back");









    let obj = x;

    



    var y = 0;
    

    id = setInterval(frame, 5);

    function frame() {
            if(y==0)
            {
                if(obj >x){
                    bool = true;
                    y++;
    
    
                }
                if(obj < 0){
                    bool = false
                    obj=1;
                    if(pos == 'f')
                    {
                        //document.getElementById("turny").style.backgroundColor = "blue";
                        //col =document.getElementById("turny").style.backgroundColor;
                        hideElems(f);
                        showElems(b);
                    }
                    else{
                        //document.getElementById("turny").style.backgroundColor = "crimson";
                        //col =document.getElementById("turny").style.backgroundColor;

                        hideElems(b);
                        showElems(f);
                    }
                }
        
                if(bool){
                    obj -= 5 * (1 - (obj/(x + 50)));
                    
        
                }else{
                    obj+= 5 * (1 - (obj/(x + 50)));
    
                }
    
                //console.log(obj);
                document.getElementById("turny").style.width = obj + "px";
            }
            else if(y==1){
                y=2;

                if(pos=="f"){
                    pos="b";
                }
                else{
                    pos="f";
                }

            }

        }

        function hideElems(elems)
        {
            for (let i = 0; i < elems.length;i++){
                elems[i].style.visibility= "hidden";
            }
        }
        function showElems(elems)
        {
            for (let i = 0; i < elems.length;i++){
                elems[i].style.visibility= "visible";
            }
        }

}




