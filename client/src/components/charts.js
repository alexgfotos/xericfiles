import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';



function Charts(props) {
    const [plants, setPlants] = useState([]);

    async function getPlants() {
        const plantReq = await axios.get(`/api/plants?UserId=${props.user.id}`)
        // console.log(plantReq);
    
        setPlants(plantReq.data);
      }

      useEffect(() => {
        // on site load, get all genera using the api call/route
        getPlants()
        
    
      }, [])
    
    
    
      let plantData = []
      plants.forEach(plant => {
        let currentPlant = {};
        currentPlant.name = plant.name;
        currentPlant.speciesId = plant.SpeciesId
        currentPlant.id = plant.id;
        if (plant.Images.length) {
          currentPlant.picture = plant.Images[0].image
        }
        plantData.push(currentPlant);
      })
  


    return (
      <Paper>
        <Chart
          data={plantData}
        >
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
          />
          <Title
            text="The Population of Continents and Regions"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }

  export default Charts
