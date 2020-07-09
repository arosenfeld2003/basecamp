document.addEventListener('turbolinks:load', function() {
  var projectsBtns = document.querySelectorAll('.projects-filter-btn');
  var ownedProjects = Array.from(document.getElementsByClassName('owner'));
  var memberProjects = Array.from(document.getElementsByClassName('member'));

  projectsBtns.forEach((btn) => {
    addEventListener('click', event => {
      let target = event.target;
      if (target.id === 'owner') {
        ownedProjects.forEach(el => el.style.display = "block");
        memberProjects.forEach(el => el.style.display = "none");
      } else if (target.id === 'member') {
        ownedProjects.forEach(el => el.style.display = "none");
        memberProjects.forEach(el => el.style.display = "block");
      } else {
        ownedProjects.forEach(el => el.style.display = "block");
        memberProjects.forEach(el => el.style.display = "block");
      }
    })
  })
}, false);


//     if (navigator.userAgent.indexOf("Firefox") !== -1) {
//       if (e.originalTarget.files.length == 1) {
//         fileLabel.textContent = e.originalTarget.files[0].name; }
//       else if (e.originalTarget.files.length > 1) {
//         fileLabel.textContent = e.originalTarget.files.length + " files";
//       } else {
//         fileLabel.textContent = "No file chosen"
//       }
//     } else {
//       if (e.path[0].files.length == 1)
//         fileLabel.textContent = e.path[0].files[0].name;
//       else if (e.path[0].files.length > 1) {
//         fileLabel.textContent = e.path[0].files.length + " files"
//       } else {
//         fileLabel.textContent = "No file chosen"
//       }
//     }
//    });
// }, false);
