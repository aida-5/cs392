document.getElementById('classroomForm').addEventListener('submit', function(event) {
   event.preventDefault();

   var classroomType = document.getElementById('classroomType').value;

   if (classroomType === 'public') {
       window.location.href = 'createPublicClassroom.html';
   } else if (classroomType === 'private') {
       window.location.href = 'createPrivateClassroom.html';
   } else {
       alert('Please select a valid classroom type.');
   }
});