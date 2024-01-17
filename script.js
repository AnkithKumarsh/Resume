// Function to show project modal
function showProjectModal(projectTitle) {
  document.getElementById("projectTitle").innerText = projectTitle;
  // Add more details about the project as needed
  document.getElementById("projectModal").style.display = "block";
}
// Function to hide project modal
function hideProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}
// Close modal if clicked outside of the modal content
window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target == modal) {
    hideProjectModal();
  }
};
