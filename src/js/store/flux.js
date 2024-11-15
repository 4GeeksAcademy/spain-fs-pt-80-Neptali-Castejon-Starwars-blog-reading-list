const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadCharacter: async () => {
				try {
					const store = getStore();
					const resp = await fetch(store.url+'/people');
					if(!resp.ok) throw new Error("Error loading data");
					const data = await resp.json();

					// Ver como se reciben los datos
					console.log(data);

					setStore({people: data.results})
					console.log(data.results)
				} catch (error) {
					console.error();
				}
			}
		}
	};
};

export default getState;
