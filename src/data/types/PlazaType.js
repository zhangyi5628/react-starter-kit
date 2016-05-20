import {
  GraphQLInt as Int,
  GraphQLObjectType as ObjectType,
  GraphQLString as String
} from 'graphql';


const plazaType = new ObjectType({
  name  : 'plaza',
  fields: {
    plazaId  : {
      type: Int
    },
    plazaName: {
      type: String
    },
    address  : {
      type: String
    },
    entGroupName: {
      type: String
    }
  }
});

export default plazaType;
