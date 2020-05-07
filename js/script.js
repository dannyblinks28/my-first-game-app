   
   var ul=document.querySelector('#ul');
   var btn=document.querySelector('#button');
   var scoreCard=document.querySelector('#scoreCard');
   var quizBox=document.querySelector('#questionBox');
  var op1=document.querySelector('#op1');
  var op2=document.querySelector('#op2');
  var op3=document.querySelector('#op3');
  var op4=document.querySelector('#op4');
  


      var app={
                questions:[
                          {q:'The shape of our milky way galaxy is?', options:['circular','elliptical','spiral','None of the above'],answer:2},

                          {q:'What is the Wuhan coronavirus?',options:['A virus that originated in China','A new virus strain','A virus that causes a respiratory illness','All of the above'],answer:4},

                          {q:'How is the Wuhan coronavirus transmitted?',options:['From pets to people','Eating bat soup','From person-to-person','From eating raw meat'],answer:3},
                          {q: 'Who is at risk for contracting Wuhan coronavirus?', options:['Healthcare workers','Residents of China','Travelers to China','All of the above'], answer:4},
                          {q: 'Ways to prevent the spread of Wuhan coronavirus include…', options:['Stay away from people who are sick','Stay home if you get sick','Follow good hygiene practices','All of the above'], answer:4}
                          ],
                index:0,

                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Quiz Over......!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },

                 next:function(){
                    this.index++;
                    this.load();
                 },

                check:function(ele){
                   
                         var id=ele.id.split('');
                         

                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         } 
                         else{
                         	ele.className="wrong";
                           ele.innerHTML="Wrong";
                         }
                },

                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },

                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 