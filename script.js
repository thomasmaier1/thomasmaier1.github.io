// Define section
const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

/*	Create a event listener for each thumbnail. When the thumbnail is clicked, 
	display the modal with the enlarged image.	*/
thumbnails.forEach(thumbnail => {
	thumbnail.addEventListener('click', () => {
		modal.style.display = 'block';
		modalImage.src = thumbnail.src;
	});
});
	
/* 	Create a event listener for the stop button in the modal. When the button is clicked,
	hide the modal view.	*/
closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});
