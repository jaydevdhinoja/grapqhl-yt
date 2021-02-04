const { ApolloError } = require("apollo-server");
module.exports = async (_,{id}, {models}) => {
    const deletedPodcast = await models.Podcast.deleteOne({_id: id})
    if(deletedPodcast.deletedCount) {
        return{id: id}
    } else {
        throw new ApolloError(`Failed to delete address.`);
    }
}