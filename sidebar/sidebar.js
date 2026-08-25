const sidebar=document.querySelector(".sidebar");
const sidebarToggleBtn=document.querySelectorAll(".sidebar-toggle");
const themeToggleBtn=document.querySelector(".theme-toggle");
const themeIcon=themeToggleBtn.querySelector(".theme-icon ");
const searchForm=document.querySelector(".search-form ");


const updateThemeIcon = ()=>{
  const isDark=document.body.classList.contains("dark-theme");
  themeIcon.textContent=sidebar.classList.contains("collapsed") ? (isDark ? "light_mode" : "dark_mode"):"dark_mode";
};


// apply dark theme if saved or system prepers

const savedTheme=localStorage.getItem("theme");
const systemPrepersDark=window.matchMedia("(prepers-color-scheme:Dark)").matches;

const shouldUseDarkTheme=savedTheme==="Dark" || (!savedTheme && systemPrepersDark);

document.body.classList.toggle("dark-theme" , shouldUseDarkTheme);
 updateThemeIcon();



sidebarToggleBtn.forEach((btn)=>{
  btn.addEventListener("click",()=>{
  sidebar.classList.toggle("collapsed");
  updateThemeIcon();
});
});


searchForm.addEventListener("click",()=>{
  if(sidebar.classList.contains("collapsed")){
    sidebar.classList.remove("collapsed");
    searchForm.querySelector("input").focus();
  };
});


themeToggleBtn.addEventListener("click",()=>{
 const isDark= document.body.classList.toggle('dark-theme');
  localStorage.setItem("theme",isDark ? "Dark" : "light");
  updateThemeIcon();
});

