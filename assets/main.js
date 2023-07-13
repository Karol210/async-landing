const url =
  'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bc5deebb3dmsh1e683a758abd28ep1390e7jsnc9e44f8ff6f3', //no se debe mostrar
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}
const content = null || document.getElementById('content')
async function fetchData(urlApi) {
  const res = await fetch(urlApi, options)
  const data = await res.json()
  return data
}

;(async () => {
  try {
    const videos = await fetchData(url)
    let view = `
    ${videos.items.map(video => `
    <div class="group relative">
    <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
        </h3>
    </div>
    </div>
    `).slice(0,4).join('')}`;
    content.innerHTML = view;
  } catch (error) {
    console.log(error)
  }
})() //se ejecuta la funcion automaticamente
