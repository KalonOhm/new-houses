const HOUSES_ENDPOINT = "http://ancient-taiga-31359.herokuapp.com/api/houses";

class HousesApi {
  get = async () => {
    try {
      const resp = await fetch(HOUSES_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log("Oops, looks like fetchHouses had an issue.", error);
    }
  };

  put = async (house) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      });
      return await resp.json();
    } catch (error) {
      console.log("Oops, looks like updating houses had an issue.", error);
    }
  };

  // post = async (house) => {
  //   try {
  //     const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {

  //     }
  //   }
  // }

  // delete = 

}


export const housesApi = new HousesApi();
