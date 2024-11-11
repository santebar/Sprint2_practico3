import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperheroRepository extends IRepository{
    async obtenerPorId(id){
        return await SuperheroRepository.findById(id);
    }
    async obtenerTodos(){
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor){
        const query = {[atributo]: new RegExp(valor, 'i')};
        return await SuperHero.find(query);
    }

    async obtenerMayorDe30(){
        return await SuperHero.find({edad: {$gt: 30}, planetaOrigen: 'Tierra', poderes: {$size: {$size: {$gte: 2}}}});
    }
}

export default new SuperheroRepository();