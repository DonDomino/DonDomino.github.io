const contentLoad = (async () => {

	const loadTestimonials = async (url) => {

		try {
			let response = await fetch(url);
			let data = await response.json();
			return data;
		}
		catch(err) {
			console.error(err);
		}
	}

	const users = await loadTestimonials("https://jsonplaceholder.typicode.com/users");
	const posts = await loadTestimonials("https://jsonplaceholder.typicode.com/posts");
	const pics = [ "./images/person_1.jpg", "./images/person_2.jpg", "./images/person_3.jpg", "./images/person_4.jpg" ];

  const testimonialPics = pics.map( pic => `
    <div class="testimonial">
      <img src="${pic}" class="d-block w-100" alt="">
    </div>` 
  );

  const postBody = posts.map( (post, index) => `<p>${post.userId[index].body}</p>` ).splice(0,4);
  const userName = users.map( user => `<span>${user.name}</span>`).splice(0,4);
  console.log(postBody);
  // for(let i = 1; i < 4; i++){
  //   const render = () => {
  //     return(`
  //       <div class="carousel-item">
  //         <div class="testimonial">
  //           <img src="${pics[i]}" class="d-block w-100" alt="">
  //         </div>
  //         <p>${posts[i].body}</p>
  //         <span>${users[i].name}</span>
  //       </div>        
  //     `)
  //   }    
  //   document.getElementsByClassName('carousel-inner')[i].innerHTML = render();
  // }  

})();

// for(let i = 1; i < pics.length; i++){
//   const render = () => {
//     i = 1 ? 
//       `<div class="carousel-item active">
//         <div class="testimonial">
//           <img src="${pics[i]}" class="d-block w-100" alt="">
//         </div>
//         <p>${posts[i].body}</p>
//         <span>${users[i].name}</span>
//       </div>`
//       :
//       `<div class="carousel-item">
//         <div class="testimonial">
//           <img src="${pics[i]}" class="d-block w-100" alt="">
//         </div>
//         <p>${posts[i].body}</p>
//         <span>${users[i].name}</span>
//       </div>`
    
//   }    
//   document.querySelector('.carousel-inner')[i].innerHTML = render();
// }  

