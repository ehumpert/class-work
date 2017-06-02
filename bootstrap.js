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
				'Mac Demarco', 		// this is the TITLE place in the class
				'https://www.youtube.com/watch?v=0HQqXllXpfQ',	// this is the LINK place in the class
				'Salad Days',			// this is the AUTHOR place in the class
				'mac.png',	// this is the IMAGE place in the class
				'Chill tunes that let you think. Float down a river, and let your mind roam.' // this is the BODY place in the class
				),

			new Post(
				'Crystals',
				'http://www.chakras.info/chakra-stones/',
				'',
				'crystals.png', // this is a local image in the same folder as the js script
				'Try one of these to feel balanced in your life.- Crystals can help you with any mental or physical problem that you have. Each of these correlate with different chakras, and help to heal the chakra. The colors of the different stones correspond with those of the chakras, so it can be quite easy to find an appropriate stone once you know what is ailing you. But if you don\'t know where to begin, here\'s a link to help start your search. Simply click on the word: Crystals'
				),

			new Post(
				'Meditation',
				'https://www.youtube.com/watch?v=OW7TH2U4hps',
				'Music for Meditation',
				'singingbowls.png',
				'If you\'re feeling stressed, sit in a calm or relaxing place, close your eyes, breath in and out, listing to this music, and free your mind from the struggle you have right now.'
				),

			new Post(
				'Banks',
				'https://www.youtube.com/watch?v=iyVxioyRfe0&list=PLZqsyBiYZFQ36FD4d2FWCebwModXHiDVn',
				'Goddess',
				'banks.png',
				'Funky tunes for when you feel the feels.'
				),

			new Post(
				'Solange',
				'https://www.youtube.com/playlist?list=PLP0GECvHnGvduaKb3SyBFkD2int9XgWif',
				'A Seat at the Table',
				'solange.png',
				'Here\'s some music that actually matters, and holds messages that need to be heard. Listen to this when you want something important, and if you feel like you need one whole long song, and flow.'
				),
			
			new Post(
				'Glass Animals',
				'https://www.youtube.com/watch?v=49M1O2YgDfE&list=PL2kI801DjQIs-ZII-2Q8rFBjJ0tkdvusd',
				'Zaba',
				'glassanimals.png',
				'Some like How To Be A Human Being better, but I must say that Zaba is by far the chillest of Glass Animals\' music. Listen for the funky rhythms and tunes.'
				),
							
			new Post(
				'Iron and Wine',
				'https://www.youtube.com/watch?v=PsllPN_3MS0&list=RDPsllPN_3MS0#t=0',
				'The Shepherd\'s Dog',
				'ironandwine.png',
				'Somehow these songs remind me of my childhood and the mountains.'
				),
				
			new Post(
				'Grateful Dead',
				'https://www.youtube.com/watch?v=671AgW9xSiA',
				'Ripple',
				'gratefuldead.png',
				'A classic song from my childhood. Also, the only song I can play on the guitar.'
				),
				
			new Post(
				'Bob Marley',
				'https://www.youtube.com/watch?v=QrY9eHkXTa4',
				'Redemption Song',
				'bobmarley.png',
				'This song gives me the chills, and reminds me of car rides when I was a child.'
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



