class GHToggle extends HTMLElement {
    connectedCallback() {

      this.label = this.getAttribute("label");
      this.name = this.getAttribute("name");
      this.value = this.getAttribute("value");
      this.event = this.getAttribute("event");
      this.id = this.getAttribute("event");
      this.innerHTML = `
      <style>
      :host{
      }
      :host(.toggle){
        font-weight: bold;
        color: black;
      }
      </style>
      <div class="toggle">
      <input type="checkbox" name=${this.name} onclick=${this.event} ">${this.label}<br>  
    </div>`;
      const button = this.querySelector("button");
//      button.addEventListener("click", this.handleClick);
    }
    
//    IndicatorSelection()  
//{  
//    var checkboxes = document.getElementsByName("${this.name}"); 
//{  
//    for(var i = 0; i < checkboxes.length; i++)  
//        if(checkboxes[i].checked)
//        document.getElementById("indicatorsID").style.opacity = "1"     
//    else    
//    document.getElementById("indicatorsID").style.opacity = "0"
//    }  
//} 
}


window.customElements.define('gh-toggle', GHToggle);


//function IndicatorSelection()  
//{  
//    var checkboxes = document.getElementsByName("toggle-indicators"); 
//    for(var i = 0; i < checkboxes.length; i++)  
//    {  
//        if(checkboxes[i].checked)
//        document.getElementById("indicatorsID").style.opacity = "1"     
//    else    
//    document.getElementById("indicatorsID").style.opacity = "0"
//    }  
//} 