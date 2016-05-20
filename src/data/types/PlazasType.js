import {
  GraphQLObjectType as ObjectType,
  GraphQLList as List,
  GraphQLInt as Int,
  GraphQLString as String
} from 'graphql';

import plazaType from './PlazaType';


const plazasType = new ObjectType({
  name  : 'plazas',
  fields: {
    message: {
      type: String,
    },
    status : {
      type: Int,
    },
    data: {
      type: new List(plazaType),
    }
  }
});

export default plazasType;
