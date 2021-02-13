const fs = require('fs');
const typeorm = require("typeorm");
const Commentary = require("../models/Commentary");
const textToSpeech = require('../services/textToSpeach');

module.exports = {
    
    async create(request, response) {
        try {
            const commentaryRepository = typeorm.getRepository(Commentary);
            const texto = request.body.texto;

            const synthesizeParams = {
                text: texto,
                accept: 'audio/mpeg',
                voice: 'pt-BR_IsabelaVoice',
            };

            const timeStamp = Date.now();
        
            textToSpeech.synthesize(synthesizeParams)
            .then(response => {
                return textToSpeech.repairWavHeaderStream(response.result);
            })
            .then(buffer => {
                fs.writeFileSync(`tmp/${timeStamp}audio.mp3`, buffer);
            })
            .catch(err => {
                console.log('error:', err);
            });

            const comentario = commentaryRepository.create({
                comentario: texto,
                audio: `${timeStamp}audio.mp3`
            });
            
            await commentaryRepository.save(comentario);
            return response.json(comentario);
        } catch (err) {
            return response.json({error: err.message})
        }
    },

    async index(request, response) {
        const commentaryRepository = typeorm.getRepository(Commentary);

        const commentaries = await commentaryRepository.find({
            order: { audio: "DESC" },
            take: 3,
        });

        return response.json(commentaries)
    }
}