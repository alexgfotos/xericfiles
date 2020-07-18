import React from "react";
import { Grid } from "@material-ui/core";
import FormPlant from "../components/FormPlant"
import Image from 'material-ui-image'

function Form(props) {

    return (
        <>
            <Grid container spacing={12}>
                <Grid item xs={8}>
                    <FormPlant/>
                </Grid>
                <Grid item xs={4}>
                  <Image height="30" src="https://cvws.icloud-content.com/S/AZlUdUWCSNuhFDLBpKzJBGGH8w7J/IMG_5938.jpg?o=AggTCQxQFB_6Okq4vsOImezjCSLQiZ8McFhAzG1eDNpu&v=1&z=https%3A%2F%2Fp34-content.icloud.com%3A443&x=1&a=CAogIrRMCZs3f-FeauUcyGRMRIeDSdGzYdgpsDDDIIT5j9cSYxD1vemXti4Y9dT8nLYuIgEAUgSH8w7JaiQ5MlW7KksBUD36cAQDchzTj8uelwY2leJNVaE0kzoIfpyVs5tyJChh700cCUCLZoOfZ4ITp2pLURSSFvnn1nJwlcz84eOucgDZSA&e=1595104242&r=73df0a98-9ee2-4511-9146-5daa4cfa3e0f-2&s=Lo2EaCbBEbFc35KNCyBn6E2afbI"/>
                  <Image height="30" src="https://cvws.icloud-content.com/S/AewEWSvsGPN4xpMoWUxZF9Xc3n8G/IMG_1924.JPG?o=AkabqQ-Ihxfb5TPsn8vIYj0Lypg6LMkfq_dYlttOzn0A&v=1&z=https%3A%2F%2Fp34-content.icloud.com%3A443&x=1&a=CAogpnxGdMxxCf1vdMGK1V0VjCO7wYiaGiiEx2PQy1dTracSYxC-s4WYti4YvsqYnbYuIgEAUgTc3n8GaiRmopR6floFnpYD_KqYQ2oP2UbkS4grpIgJqsS1zAoRU3WcbtRyJG9G2l9TQvujl4kYpIzauod-EDnhTP26CLUIQGW-_dFk-TDvxQ&e=1595104699&r=b94b75b3-bfab-41ea-abaf-d4f45745d507-3&s=yktcUcNBa1IDNgkimaqoJLH6S-o"/>
                  <Image height="30" src="https://cvws.icloud-content.com/S/AZfastHizkI7BEY2pLpsCXrFBF9O/IMG_1914.JPG?o=AmX_l_KMGITp-3xFjoIsGE9NmLoLWwDJ9kAZ_1M8N11t&v=1&z=https%3A%2F%2Fp34-content.icloud.com%3A443&x=1&a=CAog0s885AN76pe6hOdRrQnBjJBtxD0Jhqpr_05H5eZYzewSYxDu-ISYti4Y7o-YnbYuIgEAUgTFBF9OaiQ2Kgy0A95OSz5uOWsPPoXSMqgxzci7rfYK2U8BWqYeCjxXP1JyJO6fGpY3T1A0SxIsYd3S7fhxkCxaJfhcHPH0MEpYspDK9y9CDw&e=1595104692&r=08e3b4c5-0154-45e8-b25d-a4365302d58b-4&s=zzu5emSA4RE2_qmVNwibVDebzJU"/>
                </Grid>
            </Grid>
        </>
    )

}

export default Form;