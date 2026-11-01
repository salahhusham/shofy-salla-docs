(function () {
  var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (!path || path === "") path = "index.html";
  document.querySelectorAll("[data-nav]").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path || (path === "section.html" && href === "sections.html")) {
      a.classList.add("active");
    }
  });
})();
