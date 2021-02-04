module.exports = async (_,{id, input}, {models}) => {
    const podCastToUpdate = await models.Podcast.findOne({_id: id})
    Object.keys(input).forEach(value => {
        podCastToUpdate[value] = input[value]
    })

    const updatedPodcast = await podcastToUpdate.save();
    return updatedPodcast
}