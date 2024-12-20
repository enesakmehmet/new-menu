document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
  
    
    let activeIndex = 0;
  
    const setActiveTab = (index) => {
      
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));
  
      
      tabButtons[index].classList.add("active");
      tabContents[index].classList.add("active");
  
      
      window.location.hash = tabButtons[index].dataset.tab;
    };
  
   
    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        activeIndex = index;
        setActiveTab(activeIndex);
      });
    });
  
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        activeIndex = (activeIndex + 1) % tabButtons.length; // Sıradaki sekme
      } else if (e.key === "ArrowLeft") {
        activeIndex = (activeIndex - 1 + tabButtons.length) % tabButtons.length; // Önceki sekme
      } else {
        return;
      }
      setActiveTab(activeIndex);
    });
  
    
    const hash = window.location.hash.replace("#", "");
    const hashIndex = Array.from(tabButtons).findIndex(
      (btn) => btn.dataset.tab === hash
    );
    if (hashIndex !== -1) {
      activeIndex = hashIndex;
    }
    setActiveTab(activeIndex);
  });
  