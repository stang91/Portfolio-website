/* Set the width of the sidebar to 200px and the left margin of the page content to 200px */
function openNav() {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
};
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};
//bio length changes
const bios=document.querySelector("#bios").content.cloneNode(!0);
    bioEl=document.querySelector(".bio");
    options=document.querySelector(".my-life-bio-control");
    
options.addEventListener("change",(e=>{
    const t=bios.querySelector(`[bioLength=${e.target.value}]`);
    bioEl.innerHTML=t.innerHTML
}));