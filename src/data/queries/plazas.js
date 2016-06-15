
import GraphiQL, {
  GraphQLString as String
} from 'graphql';

import plazasType from '../types/PlazasType';
import fetch from '../../core/fetch';

//{
//  plazas {
//  message
//  status
//  data {
//    plazaId
//    plazaName
//    address
//    entGroupName
//  }
//}
//}


const plazas = {
  type: plazasType,
  args: {
    message: {
      type: String
    }
  },
  resolve({request}, args) {
    return fetch("https://mapi.ffan.com/cdaservice/v2/citys/110100/plazas?caller=ffan_app")
      .then(res=> res.json())
      .then(json => json)
      .catch(err => {
        console.log("-- fetch error --");
        console.log(err);
      });
  },
};

export default plazas;
