const typeorm = require("typeorm");
const Commentary = require("../models/Commentary");

module.exports = {
    
    async create(request, response) {
        const commentaryRepository = typeorm.getRepository(Commentary);
        const texto = request.body.texto;
        const comentario = commentaryRepository.create({
            comentario: texto,
            audio: "batata"
        })
        await commentaryRepository.save(comentario);
        return response.json(comentario);
    }
}