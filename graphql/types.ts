import { gql} from 'apollo-server-express';
import { tiposEnums } from '../modelos/enums/tipos';
import { tiposUsuario } from '../modelos/usuario/tipos';
import { tiposProyecto }  from '../modelos/proyecto/tipos';
const tiposGlobales = gql`
    scalar Date

    
        
`;
export const tipos =[tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto];