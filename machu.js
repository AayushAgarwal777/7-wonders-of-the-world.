const ans21="QIN SHI HUANG"
const ans22="21196 km"
const ans23="10 million"
const ans24="nothern china"
const ans25="steel"

class China{
    constructor(){
        this.input1=createInput("")
        this.input1.position(800,80)
        this.button1=createButton("check")
        this.button1.position(1100,80)
        this.button1.mousePressed(()=>{
          if(authenticate(ans21,this.input1.value())){
            this.input1.hide()
            this.button1.hide()
            this.ans1=createElement("h3")
            this.ans1.html("QIN SHI HUANG")
            this.ans1.position(800,60)
            score+=1
          }
        })
        this.input2=createInput("")
        this.input2.position(800,180)
        this.button2=createButton("check")
        this.button2.position(1100,180)
        this.button2.mousePressed(()=>{
          if(authenticate(ans22,this.input2.value())){
           this.input2.hide()
            this.button2.hide()
            this.ans2=createElement("h3")
            this.ans2.html("21196 km")
            this.ans2.position(800,160)
            score+=1
          }
        })
        this.input3=createInput("")
        this.input3.position(800,280)
        this.button3=createButton("check")
        this.button3.position(1100,280)
        this.button3.mousePressed(()=>{
          if(authenticate(ans23,this.input3.value())){
            this.input3.hide()
            this.button3.hide()
            this.ans3=createElement("h3")
            this.ans3.html("10 million")
            this.ans3.position(800,260)
            score+=1
          }
        })
        this.input4=createInput("")
        this.input4.position(800,380)
        this.button4=createButton("check")
        this.button4.position(1100,380)
        this.button4.mousePressed(()=>{
          if(authenticate(ans24,this.input4.value())){
            this.input4.hide()
            this.button4.hide()
            this.ans4=createElement("h3")
            this.ans4.html("nothern china")
            this.ans4.position(800,360)
            score+=1
          }
        })
        this.input5=createInput("")
        this.input5.position(800,480)
        this.button5=createButton("check")
        this.button5.position(1100,480)
        this.button5.mousePressed(()=>{
          if(authenticate(ans25,this.input5.value())){
            this.input5.hide()
            this.button5.hide()
            this.ans5=createElement("h3")
            this.ans5.html("steel")
            this.ans5.position(800,460)
            score+=1
          }
        })
    }
   
}