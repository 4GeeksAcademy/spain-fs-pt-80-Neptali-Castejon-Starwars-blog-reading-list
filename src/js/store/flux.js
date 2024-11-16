const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			clearSingle: ()=> setStore({single: {}}),
			
			addRemoveFavorite: (el) => {},

			getData: async (type) => {
				try {
					const store = getStore();
					const resp = await fetch(store.url+`/${type}`);
					if(!resp.ok) throw new Error("Error fetching data");
					const data = await resp.json();

					setStore({[type]: data.results})
					console.log(data.results)
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
