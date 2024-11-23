class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button element into your layout
        this.btn = ui.addHTMLElement(this.main, "button", "Primary", -1, 0.1)
        this.btn.innerText = "My Button"
        this.btn.cornerRadius = 20
        //this.btn.type = "button"
        this.btn.onclick = this.onTouch
        
        this.btn2 = ui.addHTMLElement(this.main, "marquee", "Secondary", 1, 0.1)
        this.btn2.innerText = "Link"
        this.btn2.behavior = "scroll"
        //this.btn2.type = "a"
        this.btn2.onclick = this.onTouch2
        
        // Add a button element into your layout
        this.btn3 = ui.addHTMLElement(this.main, "input", "range", -1, 0.1)
        //this.btn.innerText = "My Button"
        //this.btn3.type = "calendar"
        alert(this.btn3.options);
        this.btn3.onclick = this.onTouch

        // this.btn.addEventListener("click", this.onTouch)
    }

    onTouch( e )
    {
        e.stopPropagation()
        alert(JSON.stringify(e))
        ui.showPopup( "You touched the button" )
    }
      onTouch2( e )
    {
        e.stopPropagation()
        alert(JSON.stringify(e))
        ui.showPopup( "You touched the marquee" )
    }
}