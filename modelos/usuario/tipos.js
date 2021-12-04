import { gql} from 'apollo-server-express';

const tiposUsuario = gql`
    


  type Usuario{
      _id: ID!
      nombre: String!
      apellido: String!
      correo: String!
      identificacion: String!
      estado: Enum_EstadoUsuario
      rol: Enum_Rol!
      

  }
  type Query{
      Usuarios: [Usuario]
      Usuario(_id: String!): Usuario
     
  }

  type Mutation {
      crearUsuario(
        nombre: String!
        apellido: String!
        correo: String!
        identificacion: String!
        rol: Enum_Rol!
        estado: Enum_EstadoUsuario
        password: String!

      ):Usuario

      eliminarUsuario(_id: String , correo: String) : Usuario

      editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario!
    ): Usuario
  }
  
          
        
`;

export {tiposUsuario};
