const API =
'https://youtube-v31.p.rapidapi.com/search?channelId=UCyMHfMKnckbmYHgAqhM5IUw&part=snippet%2Cid&order=date&maxResults=20';

const content = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd86e6f9fa0msh213e8d386aa6c90p18111djsn1ab66e0a9440',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

//funcion que se invoca asi mismo
(async () => {
  try {
    const videos = await fetchData(API);
    //template
    let view = `
	${videos.items.map(video =>`
		<div class="group relative">
			<div
		  		class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
		  		<img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
			</div>
			<div class="mt-4 flex justify-between">
		  		<h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0"></span>
				${video.snippet.title}
		  		</h3>
			</div>
	  	</div>
		`).slice(0,16).join('')
	}`;
		content.innerHTML = view;
  } catch(error) {
		console.error(error);
  }
})();

//se puede no traer los 9 elementos sino menos con el slice
//El método slice() devuelve una copia de una parte del array dentro de un nuevo array 
//empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

//join El método join() une todos los elementos de una matriz 
//(o un objeto similar a una matriz) en una cadena y devuelve esta cadena.