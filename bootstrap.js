// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Look at this Thing', 		// this is the TITLE place in the class
				'https://google.com',	// this is the LINK place in the class
				'Elizabeth Humpert',			// this is the AUTHOR place in the class
				'img-20.png',	// this is the IMAGE place in the class
				'If we all believe one thing what are we?' // this is the BODY place in the class
				),

			new Post(
				'Slowly Drifting Down a River',
				'https://www.youtube.com/watch?v=0HQqXllXpfQ',
				'Vernor Winfield McBriare Smith IV',
				'mac.jpg', // this is a local image in the same folder as the js script
				'Chill cool tunes dancing down a floating river '
				),

			new Post(
				'This Post: Crazy Fredrick',
				'https://google.com',
				'Bob Author',
				'https://unsplash.it/200',
				'Crazy Fredrick bought many very exquisite opal jewels.'
				),

			new Post(
				'Another Post: promptly judged',
				'https://vuejs.org',
				'Jane Author',
				'https://unsplash.it/200',
				'We promptly judged antique ivory buckles for the next prize.'
				),

			new Post(
				'Another Unanswered Question I Have',
				'https://google.com',
				'Anptoght Author',
				'#',
				'Why must we try if we get nothing out of it?'
				),
			new Post(
				'All of the Things I Know'
				'https://google.com'
				'Whata Person
			),
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



