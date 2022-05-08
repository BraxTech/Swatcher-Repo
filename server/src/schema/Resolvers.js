const Color = require ('../models/colorModel.js')

const resolvers = {
    Query:{
        getColors: async ()=>{
    
                return await Color.find()
            },
        getColorByID: async(_parent,{id},_context,_info)=>{
            return await Color.findById(id)
        },
        getRandomColor: async()=>{
            return await Color.aggregate([{$sample:{size:1}}])
        },
        },
    };
module.exports = {resolvers}