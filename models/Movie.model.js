const {model, Schema} = require('mongoose');


const movieSchema = Schema({
  name: String,
  genre: String,
  plot: String,
  cast: {
    type: Schema.Types.ObjectId,
    ref: 'celebrities',
  },
  castMember: {
    type: Schema.Types.String,
    ref: 'celebrities',
  }
});

const movieModel = model('movies', movieSchema);

module.exports = movieModel;