const mongoose = required(`mongoose`);

const MovieSchema = new mongoose.schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  release_on: {
    type: Date,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model(`Movie`, MovieSchema);
