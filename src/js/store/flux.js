const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			clearSingle: ()=> setStore({single: {}}),

			addRemoveFavorite: (el) => {
				const store = getStore();
				const isFavorite = store.favorites.some(fav => `${fav.type}-${fav.uid}` === `${el.type}-${el.uid}`);
				const newFavorites = isFavorite
					? store.favorites.filter(fav => `${fav.type}-${fav.uid}` !== `${el.type}-${el.uid}`)
					: [...store.favorites, el];
			
				setStore({ favorites: newFavorites });
				console.log("Favoritos actualizados:", newFavorites);
			},			
			 
			getData: async (type) => {
				try {
					const store = getStore();
					const resp = await fetch(store.url+`/${type}`);
					if(!resp.ok) throw new Error("Error fetching data");
					const data = await resp.json();

					console.log("este es el resultado de la data", data)
					setStore({[type]: data.results})
					console.log("este es el resultado de la data.results", data.results)
				} catch (error) {
					console.error();
				}
			},

			getOne: async ( type, uid) => {
				try {
					const store = getStore();
					const resp = await fetch(store.url+`/${type}/${uid}`);
					if(!resp.ok) throw new Error("Error fetching people");
					const data = await resp.json();

					setStore({single: data.result})
					console.log(data.results)
				} catch (error) {
					console.error();
				}
			},
		}
	};
};

export default getState;
