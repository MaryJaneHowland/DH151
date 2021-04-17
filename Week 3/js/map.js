var map = L.map('map').setView([0, 0], 2);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		let data = [
			{
				'title' : 'Honolulu',
				'description' : 'I sailed here at the Rainbow Invite Regatta in January 2019',
				'lat' : '21.3069',
				'lon' : '-157.8583',
                'image' : "https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2017-02/HERO%207_Honolulu_Waikiki_500PX_WEB72DPI.jpg?itok=j70dkUIk"
			},
			{
				'title' : 'Santa Barbara',
				'description' : 'I sailed a team racing regatta and a championship regatta here',
				'lat' : '34.4208',
				'lon' : '-119.6982',
                'image' : "https://static.amazon.jobs/locations/217/thumbnails/SB_2.jpg?1563572230"
			},
			{
				'title' : 'Clearwater',
				'description' : 'I sailed a womens regatta here in 2019',
				'lat' : '27.9659',
				'lon' : '-82.8001',
                'image' : "https://1s9kmc1zi8ih113bns3udt1y-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Clearwater-Beach-Florida-965543248_727x484.jpeg"
			},
			{
				'title' : 'Charleston',
				'description' : 'I went to a regatta here in high school',
				'lat' : '32.7765',
				'lon' : '-79.9311',
                'image' : "https://www.locountry.com/charleston_photos/ashleyriver.jpg"
			},
			{
				'title' : 'Mission Bay',
				'description' : 'This was where I sailed my first college regatta!',
				'lat' : '32.7805',
				'lon' : '-117.2426',
                'image': "http://matchbin-assets.s3.amazonaws.com/public/sites/351/assets/7DG4_1_web_2a_DSC_0069.jpg"
			}
		]

        // create a feature group
        let myMarkers = L.featureGroup();

        var icon = L.icon({
            iconUrl: ' https://www.pinclipart.com/picdir/middle/192-1921400_sail-boat-clipart-sailboat-clip-art-transparent-background.png',
            iconSize: [50, 50], 
        });

        // loop through data
		data.forEach(function(item,index){
			var marker = L.marker([item.lat,item.lon], {icon:icon})
            .bindPopup(`<div>${item.title}</div><img src="${item.image}" width=50%><br>${item.description}`)
        
    

            myMarkers.addLayer(marker)

                $('.sidebar').append(`<div class="sidebar-item" onclick="flyToIndex(${index})">${item.title}</div>`)
		});	

        myMarkers.addTo(map)

        // define layers
        let layers = {
	        "My Markers": myMarkers
        }

        // add layer control box
        L.control.layers(null,layers).addTo(map)

        map.fitBounds(myMarkers.getBounds())

        // function to fly to a location by a given id number
        function flyToIndex(index){
	        map.flyTo([data[index].lat,data[index].lon],12)
	        myMarkers.getLayers()[index].openPopup()
}





    